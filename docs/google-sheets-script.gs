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
        'Timestamp', 'Name', 'Email', 'Phone', 'Position', 'Message'
      ]);
      sheet.appendRow([
        timestamp,
        body.name || '',
        body.email || '',
        body.phone || '',
        body.position || '',
        body.message || ''
      ]);
    } else {
      const sheet = getOrCreateSheet(ss, 'Contact', [
        'Timestamp', 'Name', 'Email', 'Company', 'Service', 'Message'
      ]);
      sheet.appendRow([
        timestamp,
        body.name || '',
        body.email || '',
        body.company || '',
        body.service || '',
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

function jsonResponse(obj, code) {
  const output = ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
  // Apps Script Web App doesn't support HTTP status codes in all modes;
  // client checks JSON body for errors.
  return output;
}
