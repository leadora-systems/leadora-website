# Google Sheets — Form Storage Setup

Contact and careers submissions are stored in a **Google Spreadsheet** via a **Google Apps Script** web app. This project does **not** send email by default.

**Related files**

| File | Purpose |
|------|---------|
| `docs/google-sheets-script.gs` | Apps Script source (paste into Google Sheets) |
| `lib/google-sheets.ts` | Next.js server helper that POSTs to the web app |
| `app/api/contact/route.ts` | Contact form API |
| `app/api/careers/route.ts` | Careers apply API (multipart + resume) |

---

## Table of contents

1. [How it works](#1-how-it-works)
2. [Prerequisites](#2-prerequisites)
3. [Spreadsheet & Apps Script](#3-spreadsheet--apps-script)
4. [Script properties (secrets & Drive)](#4-script-properties-secrets--drive)
5. [Deploy the web app](#5-deploy-the-web-app)
6. [Environment variables](#6-environment-variables)
7. [Test locally & on Vercel](#7-test-locally--on-vercel)
8. [Sheet tabs & columns](#8-sheet-tabs--columns)
9. [Updating the script later](#9-updating-the-script-later)
10. [Troubleshooting](#10-troubleshooting)

---

## 1. How it works

```text
Browser form
    → POST /api/contact  or  POST /api/careers (multipart)
    → Next.js API route (validation)
    → lib/google-sheets.ts (JSON POST to Apps Script URL)
    → Apps Script doPost()
        → Contact: append row to "Contact" tab
        → Careers: upload resume to Google Drive + append row to "Careers" tab
```

| Form | API route | Payload to Apps Script |
|------|-----------|-------------------------|
| Contact | `POST /api/contact` | JSON: name, email, company, service, budget, timeline, message |
| Careers | `POST /api/careers` | JSON (built server-side): fields + `resumeBase64`, `resumeName`, `resumeMimeType` |

**Resume handling:** The browser uploads a file to Next.js; the API converts it to base64 for one POST to Apps Script. Apps Script writes the file to **Google Drive** and stores only the **Drive URL** in the sheet (not base64 in cells).

**Limits (enforced in code):**

- Resume max size: **5 MB**
- Allowed types: **PDF, DOC, DOCX**

---

## 2. Prerequisites

- Google account with access to [Google Sheets](https://sheets.google.com) and [Google Drive](https://drive.google.com)
- A Drive folder for career resumes (create e.g. `Leadora Systems / Careers / Resumes`)
- `.env.local` for local dev (copy from `.env.example`)

---

## 3. Spreadsheet & Apps Script

1. Create a spreadsheet (e.g. **Leadora Form Submissions**).
2. Open **Extensions → Apps Script**.
3. Delete any default code.
4. Paste the full script from **`docs/google-sheets-script.gs`** in this repo.
5. Save the project (e.g. name it `FormWebhook`).

The script auto-creates **Contact** and **Careers** tabs with headers on first submission.

---

## 4. Script properties (secrets & Drive)

In Apps Script: **Project Settings** (gear) → **Script properties** → **Add script property**.

| Property | Required | Value |
|----------|:--------:|--------|
| `SHEET_SECRET` | Recommended | Long random string — must match `GOOGLE_SHEETS_SECRET` in `.env.local` / Vercel |
| `RESUME_FOLDER_ID` | **Required for careers** | Drive folder ID where resume files are stored |

### Get `RESUME_FOLDER_ID`

1. Open the target folder in Google Drive.
2. Copy the ID from the URL:  
   `https://drive.google.com/drive/folders/`**`THIS_PART`**

### Secret mapping

| Apps Script | Next.js / Vercel |
|-------------|------------------|
| `SHEET_SECRET` | `GOOGLE_SHEETS_SECRET` |

If `SHEET_SECRET` is set in Apps Script, requests without a matching `GOOGLE_SHEETS_SECRET` are rejected with `Unauthorized`.

---

## 5. Deploy the web app

1. **Deploy → New deployment**
2. Type: **Web app**
3. **Execute as:** Me
4. **Who has access:** Anyone  
   (Required so Vercel serverless functions can POST without Google login.)
5. **Deploy** → copy the **Web app URL** (ends with `/exec`).

**Security note:** “Anyone” means anyone with the URL can POST. Always use `SHEET_SECRET` in production.

---

## 6. Environment variables

Add to **`.env.local`** (local) and **Vercel → Settings → Environment Variables** (staging + production).

```env
GOOGLE_SHEETS_WEB_APP_URL=https://script.google.com/macros/s/XXXXXXXX/exec
GOOGLE_SHEETS_SECRET=your-long-random-secret
```

| Variable | Local | Production / Staging |
|----------|-------|----------------------|
| `GOOGLE_SHEETS_WEB_APP_URL` | Optional | **Required** |
| `GOOGLE_SHEETS_SECRET` | Recommended | **Recommended** (must match `SHEET_SECRET`) |

### Behavior without `GOOGLE_SHEETS_WEB_APP_URL`

| Environment | Behavior |
|-------------|----------|
| **Development** (`npm run dev`) | Submissions are **logged to the console**; no error shown to user if API succeeds otherwise |
| **Production** | API throws — forms will fail |

### Vercel scopes

Enable for **Production** and **Preview** (covers staging and PR previews):

- `GOOGLE_SHEETS_WEB_APP_URL`
- `GOOGLE_SHEETS_SECRET`

After adding or changing env vars, **redeploy** the affected environment.

---

## 7. Test locally & on Vercel

### Contact form

1. Set `.env.local` with URL + secret.
2. `npm run dev` → open `/contact`.
3. Submit the form.
4. Confirm a new row on the **Contact** tab.

### Careers form (with resume)

1. Ensure `RESUME_FOLDER_ID` is set in Apps Script properties.
2. Open `/careers` → apply with a **PDF under 5 MB**.
3. Confirm:
   - New row on **Careers** tab
   - **Resume URL** populated
   - File appears in the Drive folder

### Staging / production

Repeat the same tests on:

- Staging: `https://leadora-website.vercel.app/` (or your staging URL)
- Production: `https://www.leadorasystems.com/`

Use test data you can delete from the sheet later, or use a separate spreadsheet URL for non-production (advanced).

---

## 8. Sheet tabs & columns

Created automatically by Apps Script:

### Contact tab

| Column | Source |
|--------|--------|
| Timestamp | ISO time (server) |
| Name | Form |
| Email | Form |
| Company | Form (optional) |
| Service | Form (optional) |
| Budget | Form (optional, USD/INR ranges) |
| Timeline | Form (optional) |
| Message | Form |

### Careers tab

| Column | Source |
|--------|--------|
| Timestamp | ISO time |
| Name | Form |
| Email | Form |
| Phone | Form (optional) |
| Position | Form |
| Message | Form (optional) |
| Resume URL | Google Drive file link |
| Resume File Name | Generated safe filename |
| Resume File ID | Drive file ID |

---

## 9. Updating the script later

When you change `docs/google-sheets-script.gs`:

1. Paste the updated code into Apps Script and **Save**.
2. **Deploy → Manage deployments → Edit (pencil) → New version → Deploy**.  
   (Or create a **New deployment** if you prefer a fresh URL.)
3. If the Web App URL changed, update `GOOGLE_SHEETS_WEB_APP_URL` everywhere and redeploy Vercel.

Changing only the script without a new deployment version does **not** update the live web app.

---

## 10. Troubleshooting

| Problem | Likely cause | Fix |
|---------|--------------|-----|
| `Unauthorized` / 401 in response | Secret mismatch | Match `SHEET_SECRET` ↔ `GOOGLE_SHEETS_SECRET` exactly |
| Careers fails: `RESUME_FOLDER_ID not configured` | Missing script property | Add folder ID in Apps Script properties |
| Resume upload fails: file too large | Over 5 MB | Use smaller file or increase limit in both API + script |
| Forms work locally, fail on Vercel | Env vars missing | Add vars for **Production** / **Preview**; redeploy |
| Forms fail locally with no `.env` | Expected | Add `GOOGLE_SHEETS_WEB_APP_URL` or check server console for logged payload |
| Old submissions stop working after script edit | Deployment not updated | Deploy **new version** of web app (see §9) |
| Row missing but no error | Wrong spreadsheet bound to script | Open the sheet tied to the Apps Script project you deployed |
| Test rows in production sheet | Same URL for all envs | Use separate spreadsheet + URL for staging (optional) |

---

## Quick checklist (new environment)

- [ ] Spreadsheet created
- [ ] `google-sheets-script.gs` pasted and saved
- [ ] `SHEET_SECRET` set
- [ ] `RESUME_FOLDER_ID` set (for careers)
- [ ] Web app deployed (`Anyone` access)
- [ ] `GOOGLE_SHEETS_WEB_APP_URL` + `GOOGLE_SHEETS_SECRET` in Vercel
- [ ] Contact test on staging/production
- [ ] Careers + PDF test on staging/production

---

**See also:** `README.md`, `docs/development-and-deployment.md`
