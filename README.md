# Leadora Systems — Marketing Website

Next.js 14 marketing site for Leadora Systems Private Limited, ported from the `draft/index.html` design.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- React Hook Form + Zod
- Google Sheets (contact & careers form storage — no email)

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

See `.env.example`. Set up Google Sheets: **`docs/google-sheets-setup.md`**.

Without `GOOGLE_SHEETS_WEB_APP_URL`, dev mode logs submissions to the console; production requires the URL.
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

