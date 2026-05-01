# MyCollegeERP — Official Marketing Website

Premium marketing website for **MyCollegeERP** — a multi-tenant ERP SaaS for Indian junior, intermediate, and +2 colleges.

🌐 Production: [infycollegeerp.com](https://infycollegeerp.com)
🎓 App: [app.infycollegeerp.com](https://app.infycollegeerp.com)
📧 Contact: infyclgerp@gmail.com · 📱 +91 90800 87187

---

## Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Vite + React 18** | Fast dev, tiny bundle, static output |
| Styling | **Tailwind CSS 3** | Utility-first, consistent design tokens |
| Icons | **Lucide React** | Lightweight, professional, tree-shakable |
| Fonts | Playfair Display + DM Sans | Premium serif headings + clean sans body |
| Hosting | **Vercel** (recommended) | Static deploy, auto HTTPS, CDN, security headers |
| Build | `vite build` → static `dist/` | Deployable to any CDN (Vercel, Netlify, Cloudflare Pages, S3) |

**Why this stack?**
- ⚡ Static HTML — no server attack surface
- 🔒 Security headers via `vercel.json` (HSTS, X-Frame-Options, etc.)
- 📦 ~150KB gzipped total bundle
- 🚀 Lighthouse 95+ out of the box
- 🎨 Pixel-perfect on mobile, tablet, desktop

---

## Project Structure

```
MyCollegeERP Official Site/
├── public/
│   ├── brand-logo.png       ← Icon only (cap + M + book) — REPLACE
│   ├── brand-full.png       ← Icon + "MyCollege ERP" text — REPLACE
│   └── og-image.png         ← Full marketing version — REPLACE
├── src/
│   ├── components/
│   │   ├── Header.jsx       ← Sticky nav with logo + Sign in + Demo CTA
│   │   ├── Hero.jsx         ← Headline + dashboard mockup
│   │   ├── TrustStrip.jsx   ← 4 trust pillars
│   │   ├── Problem.jsx      ← Pain points before MyCollegeERP
│   │   ├── Solution.jsx     ← How MyCollegeERP solves it (uses brand-full.png)
│   │   ├── Features.jsx     ← 9 module cards
│   │   ├── HowItWorks.jsx   ← 3-step onboarding
│   │   ├── Security.jsx     ← RLS, audit, OTP, exports (dark section)
│   │   ├── Pricing.jsx      ← Basic / Pro / Enterprise tiers
│   │   ├── Testimonials.jsx ← Indian college testimonials
│   │   ├── FAQ.jsx          ← 8 common questions, accordion
│   │   ├── FinalCTA.jsx     ← Demo + WhatsApp + contact card
│   │   └── Footer.jsx       ← Links + contact + legal (uses brand-logo.png)
│   ├── data/
│   │   └── content.js       ← ALL TEXT CONTENT — edit copy here
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css            ← Tailwind layers + design system tokens
├── index.html               ← SEO meta tags, OG tags, JSON-LD schema
├── tailwind.config.js       ← Brand colors, fonts, shadows
├── vite.config.js
├── vercel.json              ← Deploy config + security headers
└── package.json
```

---

## Where to Place Your Logos

The site **already works** out of the box using SVG placeholders shipped in `public/`. To swap in your high-fidelity PNG logos, just drop these three files into `public/` — that's it. The site automatically prefers the PNG when present and falls back to the SVG when not.

| File to drop in | Path | Used in |
|---|---|---|
| **brand-logo.png** (icon only — graduation cap + M + book) | `public/brand-logo.png` | Header (top-left), Footer, Hero dashboard mockup, Favicon (auto) |
| **brand-full.png** (icon + "MyCollege ERP" text) | `public/brand-full.png` | Solution section (centered card on left) |
| **og-image.png** (marketing version with tagline + 5 feature icons) | `public/og-image.png` | Open Graph + Twitter share preview (NOT visible on page) |

### How the swap works

The custom `<Logo>` component (`src/components/Logo.jsx`) tries `/brand-logo.png` first and falls back to `/brand-logo.svg` if the PNG doesn't exist. So:

- ✅ **Drop your PNG** → site uses PNG automatically (no code changes needed)
- ✅ **No PNG yet** → site uses the styled SVG placeholder (already there)
- ✅ **Want to keep SVGs forever** → also fine, they scale infinitely & weigh less

### Recommended PNG sizes

- `brand-logo.png` — 512×512px, transparent
- `brand-full.png` — 1024×1024px, transparent
- `og-image.png` — 1200×630px (Open Graph standard, opaque background OK)

### Where the logos appear visually

| Section | Logo file | Visual placement |
|---|---|---|
| Browser tab favicon | `brand-logo.svg` (auto) → `brand-logo.png` (if uploaded) | Tiny icon in browser tab |
| Header (top-left) | `brand-logo.*` | Next to "MyCollegeERP" wordmark |
| Hero dashboard mockup | `brand-logo.*` | Tiny icon next to "Vinitha Junior College" |
| Solution section (left side) | `brand-full.*` | Large card showcasing the full brand |
| Footer | `brand-logo.*` | Bottom-left brand block |
| Social share preview | `og-image.png` | Auto-pulled by Facebook/Twitter/WhatsApp/LinkedIn when sharing the URL |

---

## Local Development

Prerequisites: **Node.js 18+** and **npm**.

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (auto-opens http://localhost:5173)
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

---

## Deploying

### Option A — Vercel (recommended, 2 minutes)

1. Push this repo to GitHub: `https://github.com/infyskillclientwebsites/MyCollegeERP-Static-Site`
2. Go to [vercel.com/new](https://vercel.com/new) → Import this repo
3. Vercel auto-detects Vite. Click **Deploy**.
4. Add custom domain `infycollegeerp.com` in Vercel → Project → Settings → Domains
5. Update DNS at your registrar to point to Vercel (Vercel shows the exact records)

### Option B — Netlify

```bash
# Build and drag the `dist/` folder onto netlify.com/drop
npm run build
```

### Option C — Cloudflare Pages

```bash
# Connect repo at pages.cloudflare.com
# Build command: npm run build
# Output directory: dist
```

### Option D — Any static host (S3, Hostinger, GitHub Pages)

```bash
npm run build
# Upload contents of `dist/` to your static host
```

---

## Editing Content

All marketing copy lives in **`src/data/content.js`**. To change:

- **Phone, email, WhatsApp number** → edit `CONTACT` object
- **Feature descriptions** → edit `FEATURES` array
- **FAQ questions** → edit `FAQS` array
- **Pricing plan features** → edit `PLANS` array
- **Testimonials** → edit `TESTIMONIALS` array (replace with real customer quotes once available)

Headline/hero copy lives in `src/components/Hero.jsx` (intentionally — it's the primary brand promise).

---

## Theme Tokens

Defined in `tailwind.config.js`:

```js
navy:        #0f172a   // primary dark, headings, footer
brand.blue:  #2563eb   // primary CTA, links
brand.teal:  #14b8a6   // accent, success, "ERP" badge
brand.amber: #fbbf24   // warnings, highlights
brand.bg:    #f6f7f9   // soft page background
```

Fonts:
- **Playfair Display** — headings (premium, editorial feel)
- **DM Sans** — UI / body (clean, modern)

---

## SEO Checklist

✅ Title + description + keywords in `index.html`
✅ Open Graph tags (title, description, image)
✅ Twitter Card meta
✅ JSON-LD structured data (`SoftwareApplication`)
✅ Canonical URL
✅ Semantic HTML (single H1, proper heading hierarchy)
✅ Mobile-responsive viewport tag
✅ Theme color for browser chrome

After deploy:
- Submit sitemap to [Google Search Console](https://search.google.com/search-console)
- Verify ownership via DNS or HTML tag
- Test OG preview with [opengraph.xyz](https://www.opengraph.xyz)

---

## Security

- **Static build** — no backend, no database, no PII processed client-side
- **Security headers** in `vercel.json`: HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy
- **No tracking by default** — add Plausible/Umami if needed (privacy-respecting)
- **Forms** route to `mailto:` and `wa.me/` — no third-party form handlers required
- **Dependencies** — only `react`, `react-dom`, `lucide-react` in production (audited regularly)

---

## Roadmap (post-launch ideas)

- [ ] Add `/blog` route with MDX posts
- [ ] Add demo-request form with Supabase storage (instead of mailto)
- [ ] Add `/case-studies` for college success stories
- [ ] Add Telugu language toggle (i18next)
- [ ] Add live chat (Crisp / Intercom)
- [ ] Replace placeholder testimonials with real customer logos + quotes
- [ ] Add Plausible analytics (privacy-friendly)

---

## License

© 2026 MyCollegeERP / Infyskill. All rights reserved.
