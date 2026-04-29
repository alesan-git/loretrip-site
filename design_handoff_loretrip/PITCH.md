# LoreTrip — Pitch & Product Thesis

This is the long-form positioning doc. Use it to extract copy for the marketing site, investor decks, partner outreach, and case studies. Keep voice rules from `BRAND_VOICE.md` in mind whenever you adapt this material.

---

## The thesis

The travel industry has bifurcated. On one side: massive OTAs (Booking, Expedia, TripAdvisor) that compete on inventory and price. On the other: thousands of specialist travel agencies — operators who know one region, one style, one type of trip in extraordinary depth.

The OTAs have software. The specialists don't.

What the specialists have instead is **expertise and relationships**. They know which captain in Hvar still has availability the week after Ferragosto. They know which family-run agriturismo in Umbria will actually deliver a 14-person dinner without panicking. They know which Patagonia guide will turn back at the right moment.

This is a moat. It cannot be acquired by Booking. But the specialists are losing ground anyway, because the operating cost of running a travel agency in 2026 — itineraries, supplier coordination, client communications, payments, contracts — has not gotten cheaper, and the tools available to them are either built for OTAs or built for general SMB use.

**LoreTrip is the missing layer.** White-label AI trip-planning infrastructure that lets a specialist agency operate at the speed of an OTA without ever surrendering the relationship to one.

---

## Who we sell to

The ICP is narrower than "travel agencies" in general. We sell to:

- **2–25 employees**
- **Specialist focus**: a region (e.g., "the Dalmatian coast"), a style (e.g., "small-ship sailing"), or a type of traveler (e.g., "private clients planning multi-generational trips")
- **Mid-to-high price points** — average trip value $5K+ per traveler
- **Operating without dedicated software engineering** — they may have a website builder and a CRM, but they don't have a product team
- **Existing book of clients** they want to retain, not just new clients they want to acquire

We do **not** sell to:
- General-purpose travel agents booking discount packages
- Volume operators competing on price
- Pure online aggregators
- Solo travel agents under $300K annual revenue (the unit economics don't work for them or us)

---

## The product, in three layers

### 1. Trip planning engine

The agency's planners use LoreTrip to draft itineraries faster. Pull from the agency's own supplier network — hotels, ground operators, ferries, guides — and let the model assemble logistically valid 7- to 21-day plans in minutes instead of days.

Critically: **the agency's suppliers, not ours.** LoreTrip never substitutes a generic vendor for an agency's preferred partner. The agency's network is the moat.

### 2. Client-facing branded planner

The agency hands off a planner UI to clients — under the agency's domain, with the agency's logo and colors. Clients can review the draft itinerary, request changes, see real-time availability and pricing on the agency's terms.

LoreTrip is invisible. The client believes they are using the agency's product, because functionally, they are.

### 3. Operations layer

Contract templates, payment escrow, supplier comms, multi-currency invoicing, calendar sync. The boring parts of running a travel agency, automated to the standard the OTAs already enjoy.

---

## What's actually new

Plenty of "AI travel planners" exist. None of them solve the agency's problem. They're either:

- **Consumer apps** that bypass agencies (and produce mediocre itineraries because they don't know any actual suppliers)
- **OTA-internal tools** that lock agencies into the OTA's inventory
- **Generic SaaS** that wasn't designed for the way specialist trips are actually built

LoreTrip's wedge is three things at once:
1. **The agency's own supplier network** is a first-class input, not a cosmetic overlay
2. **White-label is the default**, not a paid upgrade. The agency stays the brand.
3. **The model is tuned for logistical validity** (transit times, supplier opening seasons, visa rules) — not for prose-quality itinerary descriptions

---

## Business model

- **SaaS subscription** per agency, tiered by trip volume
- **Free tier**: up to 10 trips/month for solo operators evaluating the platform
- **Studio tier**: $499/mo, up to 100 trips/month, 5 seats — typical SMB agency
- **Network tier**: $1,499/mo, unlimited trips, 25 seats, white-label client domain — typical mid-market agency
- **Enterprise**: custom — multi-brand agencies, networks, franchise groups

No transaction fee. No commission. No "powered by" tax beyond the optional badge.

---

## Why now

Three convergences:

1. **Frontier models** (2024–2026) are now good enough at multi-step logistical planning to handle real itinerary construction, not just paragraph generation.
2. **Specialist agency demand is rising** as travelers move away from cookie-cutter OTA packages — the past three years of post-COVID travel patterns are clear on this.
3. **Software TAM for travel SMBs is finally crossing the threshold** where vertical SaaS economics work, the same way it did for restaurants (Toast) and salons (Squire) a decade ago.

---

## What we're not building

- A B2C app
- A marketplace (we don't take a cut of bookings)
- A CRM (we integrate with the ones agencies already use)
- A booking engine (we generate the plan; the agency books)
- An "AI agent that replaces travel agents" — the agent is the agency's expertise; we are the software they run on

---

## Risks we acknowledge

- **OTAs offering free white-label** to lock agencies in. Our defense: agencies do not trust OTAs not to compete with them downstream.
- **Frontier-model commoditization** — the model is not the moat; the supplier-network integrations and the agency-trust positioning are.
- **Specialist agency consolidation** — if the segment shrinks, our TAM shrinks. We do not believe this; the data shows fragmentation increasing.

---

## What success looks like in 18 months

- 200+ specialist agencies actively using the platform
- $4M ARR
- One named flagship agency per major travel region (Mediterranean, Patagonia, East Africa, Southeast Asia, Iceland/Nordic)
- A partner program with two adjacent verticals (specialist guides, boutique hotel groups)
- Brand recognition inside the specialist-agency segment as **"the platform that lets you stay the brand"**
