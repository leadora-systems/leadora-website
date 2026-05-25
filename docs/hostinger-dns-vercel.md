# Hostinger domain → Vercel (no Cloudflare required)

**Cloudflare is optional**, not required. Your domain can stay on **Hostinger DNS** and point directly to Vercel.

## Steps

1. Deploy the site on [Vercel](https://vercel.com) and add your domain (e.g. `leadorasystems.com`) in **Project → Settings → Domains**.
2. Vercel will show the DNS records you need (usually a **CNAME** for `www` and an **A** record for the apex/root domain).
3. Log in to **Hostinger → Domains → DNS / DNS Zone**.
4. Add or update records to match Vercel’s instructions:

   | Type | Name | Value (example) |
   |------|------|-----------------|
   | A | `@` | `76.76.21.21` (use Vercel’s current IP) |
   | CNAME | `www` | `cname.vercel-dns.com` |

   Exact values come from the Vercel dashboard — copy them from there.

5. Wait for DNS propagation (minutes to 48 hours). Vercel will issue SSL automatically.

## Email on Hostinger

If you use Hostinger email (`info@yourdomain.com`), keep **MX records** as Hostinger provides. Only change **A / CNAME** for the website; do not remove MX unless you move email elsewhere.

## When would you use Cloudflare?

Only if you want extra CDN/WAF/DDoS in front of Vercel later. For MVP, **Hostinger DNS + Vercel is enough**.
