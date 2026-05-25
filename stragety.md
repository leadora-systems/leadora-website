# Deployment Strategy & Architecture

**Project:** Leadora Systems — IT Startup Marketing Website  
**Phase:** MVP (Phase 1) — Lead generation + talent acquisition  
**Source:** Expert panel analysis (`deployement stragey/`)

---

## 1. Executive Summary

| Item | Decision |
|------|----------|
| **Site type** | B2B marketing + hiring website (not a web application) |
| **Framework** | Next.js 14+ (App Router) |
| **Rendering** | Static Site Generation (SSG) + serverless API routes for forms only |
| **Hosting** | Vercel (primary) |
| **DNS** | Hostinger DNS → Vercel (Cloudflare optional, not required) |
| **Forms** | Google Sheets (Apps Script webhook) — no email for now |
| **MVP monthly cost** | ~$0–5/mo (Vercel free tier + domain ~$12–15/yr) |

**Final verdict:** Build a **Next.js 14 static + serverless** app, deploy on **Vercel**, DNS on **Cloudflare**. Do not ship the current single-file HTML as the long-term production architecture.

---

## 2. Assumptions

If any assumption is wrong, the architecture may shift (e.g. to full SSR + database).

### Team & resources
- Small founding team (1–5 people), no dedicated DevOps
- Frontend developer with React knowledge
- No infrastructure engineer at MVP
- Budget constrained — minimize monthly burn

### Infrastructure baseline
- No existing cloud infra or CI/CD
- Domain purchased or planned (`.in` or `.com`)
- No real-time features (chat, live feeds)
- Email via third-party (Resend, SendGrid, or Formspree) — no self-hosted mail

### Technical constraints
- Contact + career forms need **email delivery only** — no database at MVP
- Portfolio/products are static showcase
- **No auth**, user accounts, or dashboards in Phase 1
- **SEO is critical** (local + niche IT keywords)

### Business constraints
- Phase 1 = MVP marketing site (6–12 weeks to launch)
- Phase 2 may add client portal, SaaS, or internal tools
- Legal pages required: Privacy Policy, Terms & Conditions, Cookie Policy
- Site updated periodically by the team (not set-and-forget)

### When assumptions change
If Phase 1 requires **client login**, **real-time dashboards**, or **payments** → use **Option C** (Next.js SSR + Postgres/MongoDB + API routes) instead of pure SSG.

---

## 3. Business Context

### What this site is
- **B2B marketing + talent acquisition** website
- Primary goals: **lead gen**, **brand credibility**, **hiring**, **SEO**, **content marketing**
- Success = contact submissions, career applications, search rankings, Core Web Vitals green

### Content profile
- Mostly static (services, team, tech stack)
- Occasionally updated (portfolio, careers)
- Two dynamic actions: **contact form**, **career apply form**
- Google Maps embed (iframe)
- No real-time data

### SEO priority
**HIGH** — target keywords examples:
- "IT company Chennai"
- "Spring Boot development India"
- "React development startup"
- "Azure deployment services"

**SSG or SSR is non-negotiable** for indexing and performance.

### Brand signal
As an IT company, the website is a **technical credibility signal**. Fast Next.js + strong Lighthouse scores > WordPress or generic templates.

---

## 4. Architecture Options (Comparison)

| Criterion | **A: Next.js SSG** ✅ | B: React SPA + Express | C: Next.js SSR + DB | D: WordPress / Webflow |
|-----------|------------------------|-------------------------|---------------------|-------------------------|
| Use case fit | Perfect for MVP | Overkill | Right stack, wrong timing | Poor for IT credibility |
| SEO | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| Performance | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ |
| Cost (MVP) | ~$0–5/mo | ~$10–25/mo | ~$20–60/mo | ~$10–39/mo |
| DevOps | 🟢 Low | 🔴 High | 🔴 High | 🟡 Medium |
| Scalability | Infinite (CDN) | Medium | High | Low |

**Selected option:** **Option A — Next.js Static Export / SSG** with serverless API routes for forms.

---

## 5. Recommended Architecture (Exact Stack)

### Verdict
**Next.js 14+ App Router — Static Generation + Serverless API Routes**

### Technology stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript (strongly recommended) |
| Styling | Tailwind CSS + Framer Motion |
| Forms (client) | React Hook Form + Zod |
| Forms (server) | Resend API (serverless) |
| Images | `next/image` (WebP, lazy load) |
| Icons | Lucide React or Phosphor Icons |
| SEO | Next.js Metadata API + `next-sitemap` |
| Analytics | Vercel Analytics (free) + GA4 |
| Linting | ESLint + Prettier |
| E2E testing | Playwright (Phase 2) |

### Infrastructure

| Component | Provider / approach |
|-----------|-------------------|
| Hosting | Vercel — git-push deploy, SSL, edge CDN, preview per branch |
| DNS | Cloudflare — DDoS, analytics, WAF (**DNS-only / grey cloud**) |
| Email | Resend + React Email (free tier: 3,000 emails/mo) |
| Assets | Next.js Image Optimization |

### Project structure

```
/app                    # App Router — SSG pages
/app/api/contact        # Serverless — contact form
/app/api/careers        # Serverless — career apply form
/components             # Reusable UI
/content                # MDX or JSON (services, careers)
/public                 # Logos, OG images
```

### MVP scope — build now

- [ ] Home + hero
- [ ] About Us
- [ ] Services (7–8 services)
- [ ] Tech Stack showcase
- [ ] Careers page + apply form
- [ ] Contact page + contact form
- [ ] Privacy Policy, Terms & Conditions, Cookie Policy
- [ ] Mobile-responsive layout
- [ ] SEO meta tags + `sitemap.xml`

### Phase 2 — defer

- Portfolio / case studies with filtering
- Blog / technical articles (MDX)
- Client portal or login
- Job board with database-backed applications
- Analytics dashboard
- A/B testing
- Headless CMS (Sanity / Contentful)
- Supabase for stored applications

### Do not build in MVP (avoid over-engineering)

- Database
- Authentication / JWT
- Docker / Kubernetes
- Separate Express.js server
- Redis for static content
- GraphQL API layer
- Microservices
- CMS at launch
- Custom CDN setup (Vercel handles it)
- Terraform / Pulumi (Phase 2+ if needed)

---

## 6. Deployment Strategy (Exact Steps)

### 6.1 Branch & environment strategy

| Branch | Environment | URL (example) |
|--------|-------------|---------------|
| `main` | Production | `yourcompany.com` |
| `staging` | Staging | `staging.yourcompany.com` |
| `feature/*` | Preview | `pr-123.vercel.app` |

### 6.2 CI/CD pipeline

1. **Trigger** — Push to any branch or open PR
2. **Lint & type check** — ESLint + `tsc --noEmit` (fail fast)
3. **Build** — `next build` (all pages compile, SSG succeeds)
4. **Deploy preview** — Vercel creates preview URL per PR
5. **Merge to `main`** — Auto-deploy production (~30s to CDN)
6. **Post-deploy** — Lighthouse CI; fail if Core Web Vitals drop below threshold

**Platform:** GitHub repository connected to Vercel (GitHub Actions optional for extra checks; Vercel handles deploy by default).

### 6.3 Secrets & environment variables

**Never commit secrets to Git.** Store in Vercel dashboard, scoped per environment:

| Variable | Purpose |
|----------|---------|
| `RESEND_API_KEY` | Email sending |
| `NEXT_PUBLIC_GA_ID` | Google Analytics (public OK) |
| `CAREERS_EMAIL` | Career form recipient |

Environments: **Production**, **Preview**, **Development**.

### 6.4 SSL, HTTPS, DNS

- **SSL:** Vercel auto-provisions Let's Encrypt; auto-renew
- **DNS:** CNAME domain to Vercel **or** Cloudflare DNS with Vercel as origin
- **Cloudflare:** Use **DNS-only (grey cloud)** — not orange proxy (avoids SSL conflict with Vercel)
- **HSTS:** Enabled by default on Vercel; HTTP → HTTPS redirect automatic

### 6.5 Rollback

- **Vercel instant rollback:** One click or `vercel rollback` — &lt;60 seconds
- **Git rollback:** `git revert` + push to `main` → clean rebuild
- **Zero-downtime:** Atomic deployments — old version stays live until new build succeeds

### 6.6 Monitoring & logging

| Area | Tool |
|------|------|
| Uptime | Vercel built-in + BetterUptime (free) |
| Performance | Vercel Analytics (RUM) |
| Errors | Sentry (free tier, source maps) |
| Traffic | GA4 + Vercel Analytics |
| API logs | Vercel Function Logs |
| Alerts | Slack webhook / PagerDuty free |

### 6.7 Backup

- **Code:** Git is the backup; rebuild from repo in &lt;5 minutes
- **Repo:** GitHub with branch protection on `main` (PR reviews required)
- **Optional mirror:** GitLab or Bitbucket secondary mirror
- **Form data:** Resend logs emails; optional Zapier → Notion or Google Sheets

---

## 7. Cloud Platform

### Primary (recommended)
**Vercel + Cloudflare DNS**

| Platform | Verdict |
|----------|---------|
| **Vercel** | ✅ Recommended — native Next.js, previews, serverless, free SSL |
| **Netlify** | 🟡 Good fallback if Vercel pricing changes |
| **AWS Amplify** | ⚠️ Viable but overkill for MVP |
| **S3 + CloudFront** | ❌ Not recommended for Next.js (API routes need Lambda@Edge) |

### Cloudflare (DNS layer)
- Free DDoS, WAF, DNS analytics
- Email routing, R2 (future)
- **Rule:** DNS-only with Vercel origin

---

## 8. Risks & Mitigations

| Risk | Severity | Mitigation |
|------|----------|------------|
| Vercel vendor lock-in | LOW | Use standard Next.js API routes; avoid Vercel-only KV/Edge Config in MVP |
| Form spam | MEDIUM | hCaptcha or Cloudflare Turnstile on both forms |
| Serverless cold starts | LOW | No action needed at this scale |
| SEO execution gap | **HIGH** | `next-sitemap`, JSON-LD (Organization + LocalBusiness), 300+ words per service, Metadata API, Google Search Console day 1 |
| Phase 2 migration pain | MEDIUM | Clean structure, TypeScript, thin API routes from day 1 |
| Unoptimized images | MEDIUM | Always `next/image`; compress with Squoosh/ImageOptim |

---

## 9. Current State vs Target

| Current | Target |
|---------|--------|
| Single `index.html` (~1,800 lines, inline CSS/JS) | Next.js 14 multi-page app with components |
| No build pipeline | Vercel git deploy + `next build` |
| No serverless forms | `/app/api/contact`, `/app/api/careers` + Resend |
| No structured SEO tooling | Metadata API, sitemap, JSON-LD |

**Migration approach:** Port existing design/content from `index.html` into Next.js pages and shared components; preserve brand (Syne, DM Sans, navy/cyan palette).

---

## 10. Implementation Order (Before Coding Checklist)

Use this sequence when implementation starts:

### Week 1–2
1. Initialize Next.js 14 repo (TypeScript, Tailwind, ESLint, App Router)
2. Connect GitHub → Vercel; configure preview + production
3. Add Cloudflare DNS for domain
4. Implement Home page (hero, services overview, CTA)
5. Add Resend + `/app/api/contact`

### Week 3–4
6. About, Services (all 8), Tech Stack pages
7. Careers page + `/app/api/careers`
8. Contact page
9. Legal pages (Privacy, T&C, Cookies)
10. Mobile responsiveness + animations
11. hCaptcha / Turnstile on forms

### Week 5 (pre-launch)
12. SEO: meta, OG images, JSON-LD, `sitemap.xml`
13. Google Search Console + Bing Webmaster Tools
14. Lighthouse target: 95+ all categories
15. Sentry + Vercel Analytics
16. Cross-browser / device testing
17. Production deploy on `main`

---

## 11. Implementation Definition of Done (MVP)

- [ ] All MVP pages live on production domain
- [ ] Contact and career forms send email via Resend
- [ ] Forms protected against spam
- [ ] HTTPS active; DNS on Cloudflare (grey cloud)
- [ ] `main` deploys automatically from GitHub
- [ ] Preview URLs work for PRs
- [ ] Secrets only in Vercel (not in repo)
- [ ] Sitemap submitted to Search Console
- [ ] Lighthouse 95+ on Home and Contact pages
- [ ] Legal pages linked in footer

---

## 12. References

- Strategy UI/report: `deployement stragey/` (`index.html`, `app.js`)
- Current site source: `index.html` (Leadora Systems)
- Remote strategy repo: `https://github.com/akashbandla/deployment-statergy.git`

---

---

## 13. Implementation Status (Updated)

| Step | Status |
|------|--------|
| Next.js 14 + TypeScript + Tailwind scaffold | ✅ Done |
| Port draft design (`draft/index.html`) | ✅ Done |
| Home, About, Services, Careers, Contact | ✅ Done |
| Legal pages (Privacy, Terms, Cookies) | ✅ Done |
| API routes `/api/contact`, `/api/careers` | ✅ Done → Google Sheets |
| SEO metadata + sitemap + robots | ✅ Done |
| Vercel deploy + Hostinger DNS | ⏳ Pending (your account) |
| Google Sheets Apps Script URL in production | ⏳ Pending (see `docs/google-sheets-setup.md`) |
| hCaptcha / Turnstile on forms | ⏳ Phase 1.5 |
| Lighthouse 95+ audit | ⏳ Pending |

**Run locally:** `npm run dev` → http://localhost:3000

**Original draft preserved at:** `draft/index.html`
