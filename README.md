# MyCollegeERP — Official Marketing Website (v2)

Premium marketing website for **MyCollegeERP** — a multi-tenant ERP SaaS for Indian junior, intermediate, and +2 colleges.

🌐 Production: [infycollegeerp.com](https://infycollegeerp.com)
🎓 App: [app.infycollegeerp.com](https://app.infycollegeerp.com)
📧 Contact: infyclgerp@gmail.com · 📱 +91 90800 87187

---

## What's New in v2

| Upgrade | What you get |
|---|---|
| **Bigger, bolder typography** | Hero headlines now scale up to 6.75rem (108px) — fluid `clamp()` sizing for desktop / tablet / mobile. Section headings up to 3.75rem. |
| **Animated counters** | Every stat number counts up from 0 as it scrolls into view (uses `requestAnimationFrame` + ease-out cubic). Visible in Hero, Live Stats, Dashboard, Floating accent cards. |
| **Scroll-triggered reveals** | Every section fades up smoothly as the user scrolls (IntersectionObserver-based). Honors `prefers-reduced-motion`. |
| **Live data showcase** | New **DashboardShowcase** section with 4 interactive tabs (Students / Fees / Exams / Audit Log) — each showing realistic Indian college sample data. |
| **Comparison table** | New **Excel vs MyCollegeERP** side-by-side breakdown of 8 common workflows. |
| **Logo marquee** | Infinite-scrolling strip of college names ("Trusted by colleges across India"). |
| **Live Stats section** | Big animated counters with gradient accents — "12,500+ Students managed", "₹84+ Cr Fees collected", etc. |
| **Floating UI elements** | Hero dashboard has floating "Fees today: +₹84,200" and "New admits: +12 this week" cards with subtle float animation. |
| **Interactive Pricing** | Monthly / Annual billing toggle with "Save 17%" badge on annual. |
| **Carousel Testimonials** | Auto-rotating every 6s, manual prev/next controls, animated dot indicator. |
| **Background patterns** | Grid + dot patterns add depth without distraction. |

---

## Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Vite 7+ + React 18** | Fast dev, tiny bundle, static output |
| Styling | **Tailwind CSS 3** | Utility-first, consistent design tokens |
| Icons | **Lucide React** | Lightweight, professional, tree-shakable |
| Fonts | Playfair Display + DM Sans | Premium serif headings + clean sans body |
| Animations | **CSS + IntersectionObserver** | No heavy JS animation lib — ~0KB cost |
| Hosting | **Vercel** (recommended) | Static deploy, auto HTTPS, CDN, security headers |

**Bundle size:** ~75 KB gzipped total (HTML + CSS + JS).

---

## Project Structure (Section-wise)

```
MyCollegeERP Official Site/
├── public/
│   ├── brand-logo.svg         ← SVG fallback (replace with PNG anytime)
│   ├── brand-full.svg         ← SVG fallback (replace with PNG anytime)
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── App.jsx                ← Section composition (the main "table of contents")
│   ├── main.jsx
│   ├── index.css              ← Tailwind layers + animation keyframes
│   │
│   ├── components/
│   │   ├── Logo.jsx           ← Smart PNG-first / SVG-fallback img wrapper
│   │   │
│   │   ├── layout/            ← Site chrome
│   │   │   ├── Header.jsx     ← Sticky nav with scroll-aware blur
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── sections/          ← All page sections (one file each — section-wise)
│   │   │   ├── Hero.jsx                ← Massive headline + animated dashboard mockup
│   │   │   ├── LogoMarquee.jsx         ← Infinite scrolling college names
│   │   │   ├── TrustStrip.jsx          ← 4 trust pillars
│   │   │   ├── LiveStats.jsx           ← 4 big animated counters
│   │   │   ├── Problem.jsx             ← Pain points cards
│   │   │   ├── Solution.jsx            ← How MyCollegeERP solves it
│   │   │   ├── Features.jsx            ← 9 module cards with hover effects
│   │   │   ├── DashboardShowcase.jsx   ← 4-tab live data preview ⭐ NEW
│   │   │   ├── HowItWorks.jsx          ← 3-step onboarding
│   │   │   ├── ComparisonTable.jsx     ← Excel vs MyCollegeERP ⭐ NEW
│   │   │   ├── Security.jsx            ← Dark section with 4 security pillars
│   │   │   ├── Pricing.jsx             ← 3 tiers + monthly/annual toggle
│   │   │   ├── Testimonials.jsx        ← Auto-rotating carousel
│   │   │   ├── FAQ.jsx                 ← 8 questions, accordion
│   │   │   └── FinalCTA.jsx            ← Demo + WhatsApp + contact card
│   │   │
│   │   └── ui/                ← Reusable UI primitives
│   │       ├── Counter.jsx             ← Animated number that counts up on scroll
│   │       ├── ScrollReveal.jsx        ← Fade-in wrapper (up/right/left/scale/fade)
│   │       ├── Marquee.jsx             ← Infinite horizontal scroll
│   │       └── SectionHeading.jsx      ← Standard tag → title → lead block
│   │
│   ├── hooks/
│   │   ├── useInView.js                ← IntersectionObserver hook
│   │   └── useCountUp.js               ← rAF-based number animation hook
│   │
│   └── data/
│       ├── content.js                  ← Marketing copy (FAQs, plans, testimonials, etc.)
│       └── sampleData.js               ← Indian college sample data ⭐ NEW
│
├── index.html                 ← SEO meta + Open Graph + JSON-LD schema
├── tailwind.config.js         ← Brand tokens + bigger font sizes + animations
├── vite.config.js
├── vercel.json                ← Security headers + caching rules
├── .npmrc                     ← Predictable npm behavior
└── package.json
```

**Why this structure?** The `sections/` folder gives you a 1:1 mapping between site section and file. To reorder the page, just rearrange imports in `App.jsx`. To remove a section, delete its line. To add one, drop a new file in `sections/` and import it.

---

## Page Sections (Top to Bottom)

| # | Section | What it shows |
|---|---|---|
| 1 | **Hero** | Massive 4-line headline · Animated dashboard mockup with sample students · 4 inline animated stat counters · 2 floating accent cards |
| 2 | **LogoMarquee** | Infinite-scrolling row of 12 Indian college names |
| 3 | **TrustStrip** | 4 trust pillars (multi-tenant, secure, mobile, made for India) |
| 4 | **LiveStats** | 4 huge animated counters: 12,500+ Students · ₹84+ Cr Fees · 1,840+ Exams · 99.98% Uptime |
| 5 | **Problem** | 5 pain-point cards + dark "good news" callout |
| 6 | **Solution** | "Bring it all into one ERP" — large brand image + 5 highlight bullets |
| 7 | **Features** | 9 module cards with icon, hover lift, gradient corner glow |
| 8 | **DashboardShowcase** | Interactive **4-tab** live preview: Students table · Fees breakdown · Exam scorecards · Audit log — with realistic Indian sample data |
| 9 | **HowItWorks** | 3 big numbered steps (in gradient text) |
| 10 | **ComparisonTable** | 8 side-by-side rows: Excel chaos vs MyCollegeERP clarity |
| 11 | **Security** | Dark section · 4 security feature cards on a glowing background |
| 12 | **Pricing** | 3 tiers · Monthly/Annual toggle · "Most Popular" highlight on Pro |
| 13 | **Testimonials** | Auto-rotating carousel · 5-star rating · Indian college roles |
| 14 | **FAQ** | 8 expandable questions |
| 15 | **FinalCTA** | Big "Ready to retire spreadsheets?" + contact card |

---

## Sample Data (in `src/data/sampleData.js`)

All shown live on the page — no Lorem Ipsum:

- **5 sample students** — Aarav Reddy, Priya Sharma, Karthik Naidu, Sneha Lakshmi, Vikram Singh (with VJC2025xxx roll numbers, MPC/BiPC/CEC streams, Paid/Partial/Pending status)
- **5 fee types** — Tuition (₹45,000), Hostel (₹38,000), Transport, Lab, Exam
- **5 exam subjects** — Maths, Physics, Chemistry, English, Sanskrit (with grades)
- **4 audit log entries** — CREATED / UPDATED / EXPORTED / LOGIN with timestamps + IPs
- **12 college names** — Vinitha JC, Sri Chaitanya, Narayana, Andhra Loyola, Kalams JC, etc.

To swap with your actual data once live, edit just this one file.

---

## Where to Place Your Logos

Drop these into `public/` — components automatically prefer PNG when present:

| File | Used in |
|---|---|
| `public/brand-logo.png` (icon, ~512×512) | Header · Hero mockup · Footer · Favicon |
| `public/brand-full.png` (icon + text, ~1024×1024) | Solution section card |
| `public/og-image.png` (1200×630) | Social share preview (Facebook/Twitter/WhatsApp/LinkedIn) |

Site already renders perfectly with the SVG placeholders shipped in `public/` — drop PNGs in to upgrade.

---

## Local Development

```bash
# Get fresh deps (important if you previously had vite 8 installed)
rm -rf node_modules package-lock.json
npm install

# Start dev server (auto-opens http://localhost:5173)
npm run dev

# Production build
npm run build

# Preview production locally
npm run preview
```

> **If you see a "Cannot find package esbuild" error on local build:** your `node_modules` has the old Vite 8 installed but the package.json now pins Vite 7. Run the reinstall above.

---

## Deploying

### Vercel (recommended)

```bash
git add .
git commit -m "v2: bigger fonts, animated counters, dashboard showcase, comparison table"
git push
```

Vercel auto-deploys on push. Custom domain config: Vercel → Project → Settings → Domains → add `infycollegeerp.com`.

---

## Editing Content

| What | Where |
|---|---|
| Hero headline | `src/components/sections/Hero.jsx` |
| Marketing copy (FAQs, pricing features, testimonials) | `src/data/content.js` |
| Sample students/fees/exams shown in dashboard | `src/data/sampleData.js` |
| Brand colors / fonts | `tailwind.config.js` |
| Page section order | `src/App.jsx` |
| SEO meta tags | `index.html` |
| Contact info (email, phone, WhatsApp) | `src/data/content.js` → `CONTACT` |

---

## Customization Recipes

### Add a new section
1. Create `src/components/sections/MySection.jsx`:
   ```jsx
   import ScrollReveal from '../ui/ScrollReveal.jsx';
   export default function MySection() {
     return (
       <section className="section bg-white">
         <div className="container-page">
           <ScrollReveal variant="up">
             <h2 className="heading-section">Hello world</h2>
           </ScrollReveal>
         </div>
       </section>
     );
   }
   ```
2. Import + render it in `src/App.jsx` where you want it on the page.

### Add an animated counter anywhere
```jsx
import Counter from './components/ui/Counter.jsx';
<Counter end={1234} prefix="₹" suffix="+" />
```

### Wrap any element in scroll fade-in
```jsx
import ScrollReveal from './components/ui/ScrollReveal.jsx';
<ScrollReveal variant="up" delay={150}>
  <div>...</div>
</ScrollReveal>
```

---

## Theme Tokens (`tailwind.config.js`)

```js
navy:        #0f172a   // primary dark, headings, footer
brand.blue:  #2563eb   // primary CTA, links
brand.teal:  #14b8a6   // accent, success, "ERP" badge
brand.amber: #fbbf24   // warnings, highlights
brand.bg:    #f6f7f9   // soft page background
```

Custom utility classes:
- `.heading-hero` — fluid 2.75–6.75rem with negative letter-spacing
- `.heading-section` — fluid 2.25–3.75rem
- `.heading-card` — fluid 1.5–2rem
- `.lead` / `.lead-lg` — fluid body text
- `.text-gradient` — animated blue→teal→blue gradient text
- `.section-tag` — pill-style section labels
- `.btn-accent`, `.btn-primary`, `.btn-outline`, `.btn-whatsapp` — buttons
- `.grid-bg`, `.dot-bg` — background patterns

---

## SEO Checklist

✅ Title + description + keywords in `index.html`
✅ Open Graph + Twitter card meta
✅ JSON-LD structured data (`SoftwareApplication`)
✅ Canonical URL
✅ `robots.txt` + `sitemap.xml`
✅ Single H1, semantic heading hierarchy
✅ Mobile viewport, theme-color
✅ Preloaded Google Fonts

---

## Security

- Static build — zero server attack surface
- Security headers in `vercel.json` (HSTS, X-Frame-Options, Permissions-Policy, Referrer-Policy)
- `prefers-reduced-motion` honored automatically
- No third-party tracking by default
- Forms use `mailto:` and `wa.me/` — no third-party form handlers needed

---

## License

© 2026 MyCollegeERP / Infyskill. All rights reserved.
