# Bundle contents — quick index

```
design_handoff_loretrip/
├── README.md              ← START HERE. Build instructions for Claude Code.
├── BRAND_BOOK.md          ← Full brand guidelines (color, type, logo, voice, application).
├── BRAND_VOICE.md         ← Voice rules + slop list. Read before writing any copy.
├── PITCH.md               ← Long-form thesis; source of marketing copy.
├── SITE_SPEC.md           ← Page-by-page spec for the marketing site.
├── INDEX.md               ← This file.
│
├── tokens/
│   ├── colors.css         ← Drop into globals.css.
│   ├── typography.css     ← Type scale + font notes.
│   └── design-tokens.json ← Style Dictionary–compatible token JSON.
│
├── components/
│   ├── marks.jsx          ← MarkCompass + MarkRoute + MarkSerif + Wordmark + Monogram.
│   ├── dashboard.jsx      ← Agency-context dashboard reference.
│   └── partner-badge.jsx  ← "Powered by LoreTrip" badge (light/dark).
│
├── reference/
│   ├── LoreTrip Brand Book.html  ← Live brand book — open in browser to see exact rendering.
│   ├── sections-1.jsx
│   ├── sections-2.jsx
│   ├── sections-3.jsx
│   └── tweaks-panel.jsx          ← Editor harness; do NOT ship to production.
│
├── screenshots/
│   └── README.md          ← Drop user-supplied app screenshots here. Filenames matter.
│
└── vercel.json            ← Deploy config with PDF caching headers.
```

## Reading order for a developer

1. `README.md` — what you're building and how
2. `BRAND_BOOK.md` — what the brand is
3. `BRAND_VOICE.md` — how to write any copy
4. Open `reference/LoreTrip Brand Book.html` in a browser — see the target rendering
5. `SITE_SPEC.md` — page-by-page build instructions
6. `tokens/colors.css` + `tokens/typography.css` — paste into your project
7. Port `components/marks.jsx` to TSX, ship
8. Build `/brand` page from the reference HTML
9. Build `/` landing per `SITE_SPEC.md`
10. Wait for screenshots, slot per the table in `SITE_SPEC.md`
11. Wire PDF export, waitlist, deploy to Vercel

`PITCH.md` is reference — pull copy from it as needed, don't ship it as a page.
