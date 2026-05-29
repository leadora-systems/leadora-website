# Google Sheets — form storage (no email)

Contact and career submissions are saved to a Google Spreadsheet via a free Apps Script web hook.

## 1. Create the spreadsheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet (e.g. **Leadora Form Submissions**).
2. Open **Extensions → Apps Script**.
3. Delete any default code and paste the script from `docs/google-sheets-script.gs` in this repo (or copy from below).
4. Save the project (e.g. name it `FormWebhook`).

## 2. Set a secret (recommended)

In Apps Script: **Project Settings** → add script property:

| Property | Value |
|----------|--------|
| `SHEET_SECRET` | A long random string you also put in `.env.local` as `GOOGLE_SHEETS_SECRET` |
| `RESUME_FOLDER_ID` | Google Drive folder id where resumes are stored (e.g. `Leadora Systems/Careers/Resumes`) |

## 3. Deploy as web app

1. **Deploy → New deployment**
2. Type: **Web app**
3. Execute as: **Me**
4. Who has access: **Anyone** (required so Vercel can POST)
5. Deploy → copy the **Web app URL**

Add to `.env.local` and Vercel:

```env
GOOGLE_SHEETS_WEB_APP_URL=https://script.google.com/macros/s/XXXX/exec
GOOGLE_SHEETS_SECRET=your-same-secret-here
```

## 4. Test

Submit the contact form on your site. You should see a new row on the **Contact** tab. Career applications go to the **Careers** tab.

## Sheets created automatically

| Tab | Columns |
|-----|---------|
| Contact | Timestamp, Name, Email, Company, Service, Budget, Timeline, Message |
| Careers | Timestamp, Name, Email, Phone, Position, Message, Resume URL, Resume File Name, Resume File ID |
