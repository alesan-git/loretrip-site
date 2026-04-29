# LoreTrip — Landing Site

Branded landing site for **LoreTrip**, an AI-powered B2B platform for specialist travel agencies. Three tabs: Product, Demo, Contact.

Built on **Next.js 14 (App Router)** + TypeScript. Deploys to Vercel.

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Build

```bash
npm run build
npm run start
```

## Deploy

```bash
vercel --prod
```

Custom domain (`loretrip.com`) is configured in the Vercel dashboard.

## Structure

- `app/page.tsx` — Home / product page (content from `LoreTrip_Website.md`)
- `app/demo/page.tsx` — White-label demo built for `mijnslovenie.com`
- `app/contact/page.tsx` — Early access / contact
- `app/globals.css` — brand tokens + global styles
- `components/` — `Marks` (Wordmark + compass), `Nav`, `Footer`
- `public/screenshots/` — demo screenshots, renamed for clean URLs
- `design_handoff_loretrip/` — original brand handoff (kept for reference)
