/**
 * Paste into Google Sheets → Extensions → Apps Script
 * Deploy as Web App (Anyone) and use the URL in GOOGLE_SHEETS_WEB_APP_URL
 */

function doPost(e) {
  try {
    const expectedSecret = PropertiesService.getScriptProperties().getProperty('SHEET_SECRET');
    const body = JSON.parse(e.postData.contents);

    if (expectedSecret && body.secret !== expectedSecret) {
      return jsonResponse({ error: 'Unauthorized' }, 401);
    }

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const formType = body.formType || 'contact';
    const timestamp = new Date().toISOString();

    if (formType === 'careers') {
      const sheet = getOrCreateSheet(ss, 'Careers', [
        'Timestamp',
        'Name',
        'Email',
        'Phone',
        'Position',
        'Message',
        'Resume URL',
        'Resume File Name',
        'Resume File ID'
      ]);

      // Resume upload (transient base64 over the wire; do NOT store base64 in sheet).
      const resumeFolderId = PropertiesService.getScriptProperties().getProperty('RESUME_FOLDER_ID');
      const resumeBase64 = body.resumeBase64;
      const resumeMimeType = body.resumeMimeType;
      const resumeOriginalName = body.resumeName || '';

      let resumeUrl = '';
      let resumeFileName = '';
      let resumeFileId = '';

      if (resumeBase64) {
        if (!resumeFolderId) {
          return jsonResponse({ error: 'RESUME_FOLDER_ID not configured' }, 500);
        }

        const maxBytes = 5 * 1024 * 1024;
        const bytes = Utilities.base64Decode(resumeBase64);
        if (bytes.length > maxBytes) {
          return jsonResponse({ error: 'Resume must be 5MB or smaller' }, 400);
        }

        const allowedExtensions = ['pdf', 'doc', 'docx'];
        const dot = resumeOriginalName.lastIndexOf('.');
        const ext = dot === -1 ? '' : resumeOriginalName.slice(dot + 1).toLowerCase();
        if (allowedExtensions.indexOf(ext) === -1) {
          return jsonResponse({ error: 'Only PDF/DOC/DOCX files are allowed' }, 400);
        }

        const allowedMimeTypes = [
          'application/pdf',
          'application/msword',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ];
        if (resumeMimeType && allowedMimeTypes.indexOf(resumeMimeType) === -1) {
          return jsonResponse({ error: 'Invalid resume file type' }, 400);
        }

        const safeName = slug(body.name || 'candidate');
        const safePosition = slug(body.position || 'role');
        const datePart = timestamp.slice(0, 10);
        const suffix = Utilities.getUuid().slice(0, 8);
        resumeFileName = datePart + '_' + safeName + '_' + safePosition + '_' + suffix + '.' + ext;

        const blob = Utilities.newBlob(bytes, resumeMimeType || 'application/octet-stream', resumeFileName);
        const folder = DriveApp.getFolderById(resumeFolderId);
        const file = folder.createFile(blob);

        resumeUrl = file.getUrl();
        resumeFileId = file.getId();
      }

      sheet.appendRow([
        timestamp,
        body.name || '',
        body.email || '',
        body.phone || '',
        body.position || '',
        body.message || '',
        resumeUrl,
        resumeFileName || resumeOriginalName || '',
        resumeFileId
      ]);
    } else {
      const sheet = getOrCreateSheet(ss, 'Contact', [
        'Timestamp', 'Name', 'Email', 'Company', 'Service', 'Budget', 'Timeline', 'Message'
      ]);
      sheet.appendRow([
        timestamp,
        body.name || '',
        body.email || '',
        body.company || '',
        body.service || '',
        body.budget || '',
        body.timeline || '',
        body.message || ''
      ]);
    }

    return jsonResponse({ success: true });
  } catch (err) {
    return jsonResponse({ error: String(err) }, 500);
  }
}

function getOrCreateSheet(ss, name, headers) {
  let sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
  } else if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
  }
  return sheet;
}

function slug(value) {
  return String(value || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 50) || 'x';
}

function jsonResponse(obj, code) {
  const output = ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
  // Apps Script Web App doesn't support HTTP status codes in all modes;
  // client checks JSON body for errors.
  return output;
}
