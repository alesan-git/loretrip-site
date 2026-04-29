# CLAUDE.md — LoreTrip Landing Website

## What this project is

A simple, branded landing website for **LoreTrip** — an AI-powered B2B platform for specialist travel agencies. The site's primary purpose is to support an application to Anthropic's Claude Partner Network and serve as a public-facing product page.

This is NOT a complex app. It is a static or near-static multi-tab landing site. Keep it simple. Deploy to Vercel.

---

## Project structure to scan

Before doing anything, read these files in order:

1. `design_handoff_loretrip/BRAND_BOOK.md` — visual identity, colors, typography, logo usage
2. `design_handoff_loretrip/BRAND_VOICE.md` — tone, language rules, messaging principles
3. `design_handoff_loretrip/SITE_SPEC.md` — layout spec, sections, structure guidance
4. `design_handoff_loretrip/INDEX.md` — homepage content if present
5. `design_handoff_loretrip/PITCH.md` — product pitch content
6. `design_handoff_loretrip/README.md` — any setup or build notes
7. `design_handoff_loretrip/vercel.json` — deployment config
8. `design_handoff_loretrip/tokens/` — design tokens (colors, spacing, type scale)
9. `design_handoff_loretrip/components/` — any pre-built component specs
10. `design_handoff_loretrip/reference/` — reference designs or inspiration
11. `LoreTrip_Website.md` — website copy (content source, at project root)
12. `design_handoff_loretrip/screenshots/` — all screenshot images (demo app flow)

---

## What to build

A branded website with **2-3 tabs/pages**:

### Tab 1: Home / Product Page
- Hero section + core value proposition
- What LoreTrip does (workflow: intake → structure → draft → refine → present → monetize)
- Who it's for (specialist agencies, DMCs, boutique operators)
- Why it's different (human-in-the-loop, white-label, revenue-aware, brand-controlled)
- "Powered by Claude" section (mention Anthropic explicitly)
- CTA: "Request Early Access" (can be a mailto or simple form)
- **Content source:** Use `LoreTrip_Website.md` (project root) as the primary content. Cross-check with `design_handoff_loretrip/PITCH.md` and `design_handoff_loretrip/INDEX.md` — if those contain important points not in LoreTrip_Website.md, incorporate them. LoreTrip_Website.md takes priority for structure and messaging.

### Tab 2: Demo / Product Preview
- Static showcase of the app flow using screenshots from `design_handoff_loretrip/screenshots/`
- **Important context:** The screenshots show a white-label deployment built for our first agency client, mijnslovenie.com (a specialist Slovenian travel agency). The demo app is branded to match mijnslovenie.com's brand identity — this is intentional and demonstrates LoreTrip's white-label capability.
- Layout: 
  - Start with the Agency Branding screenshot (show how the app matches the agency's brand)
  - Then show screenshots in logical order: User Flow 1 → 2 → 3 → 4 → 5 → 6 → 7
  - Then Admin screenshots: Login → Dashboard → Curated Venues → Chips/Controls
  - Add brief captions explaining what each screenshot shows (1-2 sentences max)
- Add a note at the top: "Live demo built for mijnslovenie.com — LoreTrip adapts to each agency's brand identity"
- Rename images during build to clean filenames if needed

### Tab 3 (optional): Contact / Apply
- Simple contact section or redirect
- Can be a footer CTA instead of a separate tab if cleaner

---

## Branding rules

- Follow `BRAND_BOOK.md` and `tokens/` for all visual decisions (colors, fonts, spacing)
- Follow `BRAND_VOICE.md` for tone
- The LoreTrip brand is DIFFERENT from the mijnslovenie.com brand shown in screenshots — make this distinction clear visually
- LoreTrip = the platform brand (what the website uses)
- mijnslovenie.com = a client agency brand (what the demo screenshots show)

---

## Technical constraints

- Keep it simple: static site, single-page with anchor navigation or minimal routing
- Use whatever framework the design handoff specifies. If none specified, use Next.js (already has vercel.json) or plain HTML
- Optimize images from screenshots folder (they may be large PNGs)
- Must be deployable to Vercel in one command (`vercel` or `vercel --prod`)
- No database, no auth, no backend logic needed
- Mobile responsive

---

## What NOT to do

- Do not overcomplicate. This is a landing page, not a web app.
- Do not invent new branding. Use what's in the design handoff.
- Do not add features, animations, or interactions beyond what's needed to present the content clearly.
- Do not create a blog, pricing page, or documentation section.
- Do not spend tokens on anything that doesn't directly serve: "explain what LoreTrip is" + "show the demo" + "look professional and branded"

---

## Success criteria

A visitor (specifically: someone reviewing an Anthropic Partner Network application) lands on loretrip.com and within 30 seconds understands:
1. LoreTrip is a real product being built
2. It uses Claude as its core AI layer
3. It serves specialist travel agencies
4. There is a working white-label demo for a real agency
5. The team is serious and the branding is professional
