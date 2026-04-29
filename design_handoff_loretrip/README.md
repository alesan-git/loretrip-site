# LoreTrip — Brand & Site Handoff

This bundle contains everything needed to build the **LoreTrip** marketing site and brand book in a real codebase, ready for Vercel deployment.

---

## What this is

A complete brand identity and design reference for **LoreTrip** — a B2B white-label AI trip planning platform for SMB specialist travel agencies.

The bundled HTML/JSX files are **design references**, not production code. Your job is to recreate them in a clean Next.js (or framework of your choice) project, wire in the user's app screenshots, and prepare for Vercel deployment.

---

## What to build

A Vercel-deployable site with **two surfaces**:

### 1. Marketing landing — `/`
The public-facing pitch for agency owners considering LoreTrip. Hero + how it works + features + pricing + waitlist. Uses placeholder slots that will be replaced with real product screenshots from the user.

### 2. Brand book — `/brand`
The full brand guidelines (logo, color, type, voice, application). Quiet badge of seriousness for partners, press, internal team. The reference HTML at `reference/LoreTrip Brand Book.html` is the source of truth — recreate it as a clean React/Next.js page.

### 3. Downloadable brand book PDF — `/brand/loretrip-brand.pdf`
Generated at build time from the `/brand` page (use `puppeteer` or `playwright` in a build script). The `/brand` page should have a "Download PDF" button.

---

## Recommended stack

- **Next.js 14 (App Router)** + TypeScript
- **CSS variables** for design tokens (already authored in `tokens/colors.css` etc.) — no Tailwind config needed unless you prefer it
- **Self-hosted fonts** via `next/font/google` (Playfair Display, Inter, JetBrains Mono)
- **MDX** for the brand book content (so it stays editable without code changes)
- **Vercel** for hosting; `vercel.json` included

If the user prefers a different stack, mirror the structure but keep tokens and content separate from layout code.

---

## Folder layout in this bundle

```
design_handoff_loretrip/
├── README.md                          ← you are here
├── BRAND_BOOK.md                      ← full brand guidelines as Markdown
├── BRAND_VOICE.md                     ← voice, tone, lexicon — copywriting bible
├── PITCH.md                           ← the LoreTrip thesis & feature deep-dives
├── SITE_SPEC.md                       ← page-by-page specification for the marketing site
├── tokens/
│   ├── colors.css                     ← CSS custom properties (paste into globals.css)
│   ├── typography.css                 ← type scale + font imports
│   └── design-tokens.json             ← machine-readable tokens (Style Dictionary compatible)
├── components/
│   ├── marks.jsx                      ← three logo-mark SVG components + Wordmark + Monogram
│   ├── dashboard.jsx                  ← agency-context dashboard mockup component
│   └── partner-badge.jsx              ← "Powered by LoreTrip" badge (light/dark)
├── reference/
│   ├── LoreTrip Brand Book.html       ← the live brand book — open in browser to see exactly how it looks
│   ├── tweaks-panel.jsx               ← (ignore: editor harness, not for production)
│   └── sections-*.jsx                 ← reference React sections from the brand book
├── screenshots/
│   └── README.md                      ← drop the user's app screenshots in this folder
└── vercel.json                        ← deployment config
```

---

## Final brand decisions (locked)

| | Value | Notes |
|---|---|---|
| **Logo mark** | Compass (abstracted) | Asymmetric cross inside an unclosed ring. See `components/marks.jsx` → `MarkCompass`. |
| **Wordmark** | "LoreTrip™" — Playfair Display 500, "o" in "Lore" replaced with the compass mark | TM in Inter superscript at ~18% of font size, sat above cap height |
| **Foundation color** | `#070D14` — near-black ink with cool/blue undertone | |
| **Signature accent** | `#D17252` — soft ember | Warmer/redder than terracotta — distinct from Anthropic's accent |
| **Neutral background** | `#F2F0EC` — linen / oat | Slightly cooler than cream, still warm-adjacent |
| **Surface (cards)** | `#FBFAF6` | |
| **Type display** | Playfair Display 400/500, italic for emphasis | |
| **Type body / UI** | Inter 400/500/600 | |
| **Type mono** | JetBrains Mono 400/500 | For IDs, code, metadata |

---

## What the user is sending separately

The user (LoreTrip team) will provide **app screenshots** from their in-development product:

- Trip planner / agency admin views
- Itinerary view
- Possibly: traveler-facing branded planner, partner network UI

When those land in `/screenshots/`, replace the photography placeholders in section 06 (Visual Language) of the brand book and use them in the marketing landing's "Product" section. See `SITE_SPEC.md` for exact slots.

---

## Build steps (suggested)

1. **Scaffold Next.js project** — `npx create-next-app@latest loretrip-site --typescript --app`
2. **Paste tokens** — copy `tokens/colors.css` and `tokens/typography.css` into `app/globals.css`
3. **Wire fonts** — use `next/font/google` for Playfair Display, Inter, JetBrains Mono
4. **Port logo components** — copy `components/marks.jsx`, convert to TypeScript (`.tsx`), make sure `Wordmark` and `MarkCompass` are usable everywhere
5. **Build `/brand` page** — recreate the brand book sections from `reference/sections-*.jsx`. Source content from `BRAND_BOOK.md` so non-devs can edit
6. **Build `/` marketing landing** — follow `SITE_SPEC.md`. Wait for user screenshots before finalizing the product section
7. **Add waitlist form** — Resend or Formspree integration; the user will provide endpoint
8. **PDF export** — at build time, render `/brand` to PDF via Playwright; output to `public/loretrip-brand.pdf`. Add download button on `/brand`
9. **Vercel** — deploy from the repo. Custom domain config goes in Vercel dashboard, not in code

---

## Voice rules (do not skip)

The brand voice is the most distinctive part of LoreTrip. Read `BRAND_VOICE.md` before writing **any** copy. Critical rules:

- **No exclamation marks. Ever.**
- **No emoji** in marketing copy
- **Avoid:** unlock, seamless, revolutionary, journey, adventure, magic, transform, supercharge, powered by AI, effortless, wanderlust
- LoreTrip speaks **to agency owners**, not to travelers — never to travelers
- The brand is **invisible by design**; copy should reinforce that LoreTrip sits behind the agency, not in front of it

---

## Questions to ask the user before starting

1. Final domain (`loretrip.com`? something else?)
2. Waitlist provider preference (Resend / Mailchimp / ConvertKit / Formspree)?
3. Analytics? (Plausible / Vercel Analytics / none)
4. Are they providing copy for pricing tiers, or should you draft per `BRAND_VOICE.md`?
5. Is there a Stripe account ready, or is pricing presentation only?

---

## License & ownership

All brand assets, copy, and tokens in this bundle are property of LoreTrip. Implement them; don't republish.
