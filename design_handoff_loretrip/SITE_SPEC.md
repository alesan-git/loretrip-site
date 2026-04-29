# LoreTrip — Marketing Site Specification

Page-by-page spec for the production marketing site. Reference for layout, copy, and component composition. All copy below is final-approved unless marked `[DRAFT]`.

Build order suggestion:
1. `/brand` (we have the full reference HTML — fastest to port)
2. `/` marketing landing
3. PDF export script
4. Waitlist endpoint
5. 404 + legal pages

---

## Site map

```
/                           ← marketing landing
/brand                      ← public brand book
/brand/loretrip-brand.pdf   ← downloadable PDF (built at deploy time)
/waitlist/thanks            ← post-submission confirmation
/legal/terms
/legal/privacy
/404
```

No blog, no careers, no docs at launch. Add `/docs` (subdomain `docs.loretrip.com`) later when product launches publicly.

---

## Global elements

### Navigation

Sticky top bar, transparent over hero, gains `--lt-linen` background + 1px `--lt-rule` border on scroll.

```
[LoreTrip™ wordmark]                  Product   How it works   Pricing   Brand   [ Get access ]
```

- Logo: `Wordmark` component, height 24px
- Links: Inter 500, 14px, color `--lt-foundation-70`, hover `--lt-foundation`
- CTA: `Button variant="primary"`, "Get access" → opens waitlist modal

### Footer

Three-column layout on desktop, stacked on mobile. Background `--lt-foundation`, text `--lt-linen`.

```
Column 1: [Wordmark, inverted]
          Trip planning, branded as yours.

Column 2: Product             Column 3: Company
          How it works                 Brand
          Pricing                      Contact
          Changelog                    Privacy
                                       Terms

Bottom rule: © 2026 LoreTrip Inc.    [small compass mark]
```

---

## `/` — Marketing landing

### Section 1 — Hero

**Layout:** Full-viewport-height, asymmetric. Display headline left-aligned, taking ~70% of column width. Right side: a single ambient product screenshot (when available) or a placeholder card with the compass mark watermarked at 4% opacity.

**Copy:**

> [eyebrow] PLATFORM FOR SPECIALIST TRAVEL AGENCIES
>
> # Trip planning, *branded as yours*.
>
> LoreTrip is the AI trip-planning platform behind specialist travel agencies. We do the software. You stay the brand.
>
> [ Get access ]   [ See how it works → ]

- Eyebrow: `lt-eyebrow` style, mono, color `--lt-foundation-50`
- Headline: Playfair Display 500, `--text-6xl` desktop / `--text-4xl` mobile. The word "branded as yours" is in italic 400 (Playfair italic). The word "yours" can optionally be in `--lt-ember`.
- Lede: Inter 400, `--text-lg`, color `--lt-foundation-70`, max-width 56ch
- Primary CTA: Button primary, ember background, foundation text
- Secondary CTA: text link, with arrow

### Section 2 — How it works

**Layout:** Three rows, alternating image-left / image-right. Each row has a small mono-eyebrow ("01 / 02 / 03"), a Playfair subhead, and Inter body copy.

**Row 1 — The agency stays the brand**

> 01 — INVISIBLE BY DESIGN
>
> ## Your agency, your domain, your colors.
>
> LoreTrip runs under your domain. Your clients see your logo, your typography, your tone of voice. We don't even appear in the footer unless you turn the badge on.

[Image slot: agency dashboard mockup — replace with real screenshot from `/screenshots/dashboard.png`]

**Row 2 — The agency's network is the input**

> 02 — YOUR SUPPLIERS, NOT OURS
>
> ## Built around your network.
>
> Pull from the partners you already trust — hotels, ferries, guides, ground operators. LoreTrip uses your network as the source of truth, never substituting in generic vendors.

[Image slot: supplier-network UI — placeholder until product screenshot lands]

**Row 3 — The plans are logistically valid**

> 03 — REAL TRIPS, NOT PROSE
>
> ## Itineraries that survive contact with reality.
>
> Transit times, opening seasons, visa rules, currency hops. The model is tuned for logistics, not for adjective generation. A 12-day Adriatic itinerary in under five minutes — and every connection actually works.

[Image slot: itinerary view — placeholder]

### Section 3 — Features grid

**Layout:** 2×3 grid on desktop, single column on mobile. Each card has a small Lucide icon (1.5px stroke, `--lt-foundation-70`), an Inter 600 title, and short Inter 400 body.

| Title | Body |
|---|---|
| Branded client planner | Hand a polished planning experience to your clients under your own domain. |
| Supplier network sync | Connect your existing supplier list. We work with what you already use. |
| Itinerary engine | Logistically valid 7- to 21-day itineraries in minutes. |
| Operations layer | Contract templates, escrow, multi-currency invoicing. |
| Calendar + CRM sync | Two-way sync with Google, Outlook, HubSpot, Salesforce. |
| Audit trail | Every change to every itinerary, with timestamps and authorship. |

### Section 4 — Who it's for

**Layout:** Three columns, each a "use case" card with a Playfair subhead and Inter body. Background subtly shifted to `--lt-surface`.

| Heading | Body |
|---|---|
| Regional specialists | You know one region better than anyone. We give you the software to scale that knowledge without diluting it. |
| Style specialists | Small-ship sailing, photography expeditions, cycling tours, multi-generational trips. The platform adapts to the kind of trip you build. |
| Network operators | Multi-brand agencies, franchise groups, partner cooperatives. White-label per brand, central admin, single contract. |

### Section 5 — Pricing

Three pricing tiers, side-by-side cards. Use real numbers from `PITCH.md` (Free / Studio $499 / Network $1,499 / Enterprise custom — show first three; "Enterprise" as a fourth row link).

**Card structure:**
- Tier name (Inter 600, 14px, uppercase, color `--lt-foundation-70`)
- Price (Playfair 500, `--text-4xl`)
- "/ month" suffix (Inter 400, 14px, `--lt-foundation-50`)
- One-line tagline (Inter 400, 16px)
- 5–7 bullet feature list (Inter 400, 14px, with subtle `--lt-rule` divider above)
- CTA button

The middle tier (**Studio**) is recommended-by-default — give it a thin `--lt-ember` top border and a small "Most popular" mono-eyebrow.

### Section 6 — Closing CTA

Full-width band on `--lt-foundation` background.

> # Built so you stay the brand.
>
> Specialist travel agencies operate on trust. LoreTrip is built so the platform never gets in the way of yours.
>
> [ Get access ]

Headline Playfair Display 500 64px, copy Inter 400 18px `--lt-foundation-30`, CTA primary button.

---

## `/brand` — Brand book

Port the reference HTML at `reference/LoreTrip Brand Book.html` directly to a Next.js page. Suggested approach:

- Each section becomes a React component sourced from `reference/sections-1.jsx`, `sections-2.jsx`, `sections-3.jsx`
- Long-form copy moves into MDX so non-devs can edit
- Add a fixed top-right "Download PDF" button → `/brand/loretrip-brand.pdf`
- Keep the bookmarks rail (left side, fixed) — it's how partners navigate this page
- **Drop the Tweaks panel** — that's a design-tool harness, not a public feature

### PDF generation

At build time:

```ts
// scripts/build-brand-pdf.ts
import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto('http://localhost:3000/brand?print=1');
await page.pdf({
  path: 'public/brand/loretrip-brand.pdf',
  format: 'A4',
  printBackground: true,
  margin: { top: '20mm', bottom: '20mm', left: '20mm', right: '20mm' }
});
```

Wire to `npm run build` via `next.config.js` postbuild step or a Vercel build hook.

---

## Screenshots — what to slot where

The user will deliver app screenshots into `/screenshots/`. Place them as follows:

| Screenshot | Location |
|---|---|
| `dashboard.png` (agency admin dashboard) | Section 2, Row 1 (How it works) + brand book section 07 In Use |
| `planner.png` (trip planner / itinerary builder) | Section 2, Row 3 (How it works) |
| `supplier-network.png` | Section 2, Row 2 (How it works) |
| `client-view.png` (client-facing branded planner) | Hero right-side (replace ambient placeholder) |
| Any extras | Brand book section 06 Visual Language (replace `[ PLACEHOLDER · COMMISSION ]` cards) |

If a screenshot is missing at build time, leave the placeholder in. **Do not substitute stock imagery.**

---

## Form handling — waitlist

Modal triggered by every "Get access" CTA. Two fields:

- Email (required)
- Agency name (required)
- Region/specialty (optional, freeform)

POST to `/api/waitlist` → forwards to whichever provider the user chooses (Resend, ConvertKit, etc.). On success, redirect to `/waitlist/thanks`.

`/waitlist/thanks` copy:

> ## You're on the list.
>
> We'll be in touch as soon as access opens for your region. In the meantime, the brand book is here if you'd like to share it with partners: [Download PDF].

---

## Responsive behavior

- Single breakpoint at `768px` (mobile/desktop). Tablet falls into desktop layout.
- Hero headline drops from `88px` to `40px` on mobile.
- Two-column "How it works" rows stack with image first.
- Pricing tiers stack vertically on mobile.
- Footer collapses to single column.

---

## Accessibility

- Color contrast: foundation/linen passes AAA. Ember on linen is `4.6:1` — passes AA for body text 18px+, **does not** pass for body text 14px. Use foundation for small text; reserve ember for ≥18px or as background-with-foundation-text.
- Focus rings: 2px `--lt-ember` ring with 2px offset.
- All interactive elements reachable via keyboard.
- Skip-to-content link in nav.
- `prefers-reduced-motion` honored — disable all transitions if true.

---

## Analytics

User to choose: **Plausible** (recommended for brand fit — privacy-first, no cookie banner needed in EU) or **Vercel Analytics**.

If Plausible: drop the script tag in `app/layout.tsx`. No additional code.

---

## Performance budget

- LCP < 2.0s on 4G
- Total JS < 100KB gzipped on landing
- All images served as AVIF/WebP via `next/image`
- Fonts: subset to Latin, preload Playfair Display 500 + Inter 400/500 only
