# DTE Equipment — Website Design Preview

This repo hosts a **link-only preview** of the DTE Equipment website re-design, built
from the design handoff bundle (21 pages: homepage, product catalogue, application
landing pages, company pages, and content pages). It is a high-fidelity prototype —
not the production site — meant for internal/client review before the real build.

## What's in here

- `site/` — the full static site. Each page is a self-contained HTML file using a
  lightweight client-side templating runtime (`support.js`, loaded from a CDN-hosted
  React/Babel) — no build step required.
- `.github/workflows/deploy-pages.yml` — deploys `site/` to GitHub Pages on every
  push to `main` (or on demand via "Run workflow" in the Actions tab).

## Making it accessible only via a shared link

Two layers keep this from being casually stumbled on:

1. **Unlisted.** Every page carries `noindex, nofollow, noarchive`, so it won't
   appear in search results, and nothing links to it from a public site.
2. **Access code gate.** `site/access-gate.js` shows a full-page access-code prompt
   before any content is visible. The current code is:

   > **greentec-2026**

   Share the deployed URL + this code with whoever needs to review the site.

   **Important:** this is a client-side-only gate, not real security — the code is
   visible to anyone who views page source, and it does not protect any sensitive
   data (there isn't any; all forms on this site are already non-functional
   prototypes). It's meant to keep the link out of casual/accidental view, not to
   withstand a determined visitor. To rotate the code, edit `ACCESS_CODE` in
   `site/access-gate.js` and redeploy. For real access control, put the deployed
   site behind your host's built-in password protection instead (e.g. Vercel/Netlify
   password-protected previews, or a Cloudflare Access rule) — GitHub Pages itself
   has no built-in option.

## Deploying

1. In the repo's GitHub Settings → Pages, set **Source** to **GitHub Actions**.
2. Push to `main` (or run the "Deploy design preview to GitHub Pages" workflow
   manually from the Actions tab). The site will publish at
   `https://<org>.github.io/<repo>/`.
3. Share that URL plus the access code above.

Netlify or Vercel work too if you'd rather not use GitHub Pages — just point either
at the `site/` folder as the publish directory (no build command needed).

## Known limitations (carried over from the design handoff)

- **Some local prototype images/fonts are missing.** A handful of images and the
  Futura ND Alt heading font referenced under `/uploads/` and `/fonts/` were never
  included in the handoff bundle — the browser will fall back to system fonts and
  those specific images will show broken. Everything hotlinked from `greentec.eu` /
  `virnig.com` (the bulk of the product photography) loads normally.
- **Forms are non-functional.** Every enquiry/quote form is client-side only with a
  "prototype form" disclosure and a fallback phone number — no CRM/email backend is
  wired up.
- **Placeholder content.** Several testimonials, comparison photos, and all of
  `legal.html` (Privacy Policy/Terms) are bracketed placeholder copy — see the
  original design handoff notes for the full list.
- These are pre-existing gaps in the design handoff itself, not introduced by this
  deployment.

## What changed from the original handoff files

- Renamed pages to plain, lowercase filenames (e.g. `DTE Homepage.dc.html` →
  `index.html`, `Products.dc.html` → `products.html`) and updated every internal
  link to match — the original filenames had spaces and a `.dc.html` double
  extension that don't play well with URLs/hosting.
- Added the access-code gate (`access-gate.js`) and a `noindex` meta tag to every
  page.
- No other content, layout, or behavior was changed — the shared header/footer
  component-import mechanism (`SiteHeader.dc.html` / `SiteFooter.dc.html`) still
  works exactly as it did in the handoff, since it's resolved by the page's own
  `name="..."` attribute rather than a hardcoded filename.
