# Leadora Systems — Marketing Website

Next.js 14 marketing website for **Leadora Systems Private Limited**.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- React Hook Form + Zod
- Google Sheets (Contact + Careers form storage — no email by default)

## Requirements

- Node.js (LTS recommended)
- npm (bundled with Node)
- Git

## Clone repository

```bash
git clone https://github.com/leadora-systems/leadora-website.git
cd leadora-website
```
## Quick start

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.


### Clone a specific branch (optional)

Use this when you need to clone `development` branch directly

```bash
# example: start from integration branch
git clone -b development https://github.com/leadora-systems/leadora-website.git
cd leadora-website
```


If you already cloned the repo, switch branches instead:

```bash
git fetch origin
git checkout development
git pull origin development
```


## Scripts

```bash
# local development
npm run dev

# production build
npm run build
npm run start

# quality
npm run lint
```

## Documentation

| Doc | Purpose |
|-----|---------|
| `docs/development-and-deployment.md` | Git workflow, branches, Vercel deploys, command reference |
| `docs/google-sheets-setup.md` | Contact/careers forms → Google Sheets + Drive |
| `docs/google-sheets-script.gs` | Apps Script source (paste into Google Sheets) |


## Environment variables

Environment variables are documented in `.env.example`.

Commonly used:

- `GOOGLE_SHEETS_WEB_APP_URL` — Google Apps Script Web App URL used by API routes
- `GOOGLE_SHEETS_SECRET` — shared secret validated by Apps Script (`SHEET_SECRET` script property)

Google Sheets setup: **`docs/google-sheets-setup.md`**.

Without `GOOGLE_SHEETS_WEB_APP_URL`, **dev mode logs submissions to the console**; production requires the URL.

## Forms & data flow

- **Contact**: `POST /api/contact` → Google Sheets
- **Careers**: `POST /api/careers` (multipart) → Google Sheets + resume file in Google Drive

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home |
| `/about` | About |
| `/services` | All services |
| `/careers` | Careers + apply form |
| `/contact` | Contact form |
| `/privacy` | Privacy Policy |
| `/terms` | Terms & Conditions |
| `/cookies` | Cookie Policy |

## Deployment

### Branch flow

```text
feature/*  →  development  →  staging  →  main
```

- **`feature/*`**: branch from `development` for each task; open PR into `development`
- **`development`**: integration branch for ongoing feature work
- **`staging`**: pre-release QA before production
- **`main`**: live production code

### Vercel mapping

| Branch | Deploys to |
|--------|------------|
| `main` | **Production** — https://www.leadorasystems.com/ |
| `staging` | **Staging** — https://leadora-website.vercel.app/ |
| `feature/*` | **Preview** (per PR / branch) |

Full guide (git workflow, commands, release process): **`docs/development-and-deployment.md`**.

