# LoreTrip — Brand Book

**Version 2.0 · Final**
The complete brand system. This document is the source of truth; the HTML reference at `reference/LoreTrip Brand Book.html` is its visual rendering.

---

## 01 — Positioning

### What LoreTrip is

LoreTrip is **white-label infrastructure for specialist travel agencies**. We provide the AI trip-planning engine, branded as the agency's own product, behind their domain.

### Who it's for

Small-to-mid-sized travel agencies — typically 2–25 employees — who specialize in a region, a style of travel, or a type of traveler. They have deep expertise and trusted client relationships, but they cannot afford to build software, and the platforms available to them are designed for OTAs, not for craft.

### What we believe

The future of travel isn't a single super-app. It's a thousand specialist agencies, each with software that fits the way they actually work. LoreTrip's job is to make that possible without making the agency dependent on us in ways their clients can see.

### The thesis in one sentence

> Specialist travel agencies have the relationships and the expertise. We give them the software, branded as theirs.

### What we are not

- We are not a B2C trip planner
- We are not a marketplace
- We are not a CRM
- We are not "AI for travel" — that framing is everywhere and means nothing

### Tagline (working)

**Trip planning, branded as yours.**

(Alternates explored: *The platform behind the platform.* / *Specialist travel, modern infrastructure.* / *Built so you stay the brand.*)

---

## 02 — Logo system

### The mark — Compass (final)

A compass abstracted to its essential geometry: an unclosed ring with an asymmetric cross inside, suggesting orientation without literal cardinal directions. The opening in the ring sits at roughly 2 o'clock — the canonical NE — giving the mark directional motion without arrow violence.

**Construction:**
- Outer ring: 78% of viewBox width, stroke 6/100 of viewBox
- Ring opening: 60° arc removed at NE (15° to 75° from vertical)
- Inner cross: asymmetric — vertical bar 60% of ring diameter, horizontal bar 50%
- Center dot: 6% of viewBox

**Minimum size:**
- Digital: 24px
- Print: 8mm

**Clear space:**
Equal to the height of the cap "L" in the wordmark, on all sides.

### The wordmark

**LoreTrip** in Playfair Display 500. The "o" in "Lore" is replaced with the compass mark, scaled to match the x-height of surrounding letters and aligned to the baseline (not the optical center).

The "™" symbol sits in Inter at ~18% of the wordmark font size, aligned to the cap height, with ~2% font-size of trailing kerning.

### Variants

| Variant | When to use |
|---|---|
| **Wordmark** (mark + "LoreTrip") | Default. Marketing site, partner badges, documentation, presentations. |
| **Mark only** | Favicon, app icon, social avatar, anywhere ≤32px |
| **Lockup vertical** (mark above wordmark) | Square-format placements only. Avoid otherwise. |
| **Wordmark only** (no compass replacement) | Last-resort; only when SVG isn't possible. Use Playfair Display 500 with normal lowercase "o". |

### Don'ts

- Do not rotate the mark
- Do not place the mark inside another shape (no badge containers, no roundels)
- Do not use the mark on a busy photographic background without a tint overlay
- Do not stroke the wordmark or add drop shadows
- Do not change the "o"-replacement scale; it's tuned to match the surrounding letterforms
- Do not pair the wordmark with a tagline lockup; tagline floats independently

---

## 03 — Color

### Primary palette

| Token | Hex | Use |
|---|---|---|
| Foundation | `#070D14` | Text, dark surfaces, the logo. The default ink. |
| Soft Ember | `#D17252` | Single signature accent. Highlights, one key CTA per view, the wordmark "o". |
| Linen | `#F2F0EC` | Page background. |
| Surface | `#FBFAF6` | Cards on Linen. |

### Secondary system

Use sparingly, only when the design genuinely needs more than two-color presence. Never combine all three on one screen.

| Token | Hex | Use |
|---|---|---|
| Slate | `#5B7B6D` | Cool sage-slate; secondary illustrative accent |
| Brass | `#B58F4A` | Partner badges, premium tier markers |
| Sage | `#9CB096` | Success states; nature-coded UI |

### The 60/30/10 rule

- **60% Linen** (background)
- **30% Foundation** (text + ink)
- **10% Soft Ember** (one accent, one place per screen — usually the primary CTA, or a single emphasis word in the headline)

If you find yourself adding a third color to make a layout work, the layout is wrong.

### Functional colors

| Token | Hex | Use |
|---|---|---|
| Success | `#5C8A6B` | Confirmations, positive trends |
| Warning | `#C99A4D` | Caution, soft negative |
| Error   | `#B45448` | Hard error, destructive action |
| Info    | `#5B7B96` | Neutral information |

---

## 04 — Typography

### Type stack

| Role | Family | Weights | Notes |
|---|---|---|---|
| Display | **Playfair Display** | 400, 500, italic 400 | Headlines, brand voice moments. Italic for emphasis. |
| Body / UI | **Inter** | 400, 500, 600 | All running text, UI, navigation. |
| Mono | **JetBrains Mono** | 400, 500 | Code, IDs, eyebrow labels in caps. |

Self-host all three via `next/font`. Do not use the Google Fonts CDN in production.

### Type scale (modular, ratio ~1.25)

| Token | Px | Use |
|---|---|---|
| `--text-6xl` | 88 | Hero display only |
| `--text-5xl` | 64 | Section display |
| `--text-4xl` | 48 | Page heads |
| `--text-3xl` | 36 | Subheads |
| `--text-2xl` | 28 | Section headers |
| `--text-xl` | 22 | Small headlines, lead body |
| `--text-lg` | 18 | Lead paragraphs |
| `--text-base` | 16 | Body |
| `--text-sm` | 14 | Secondary UI |
| `--text-xs` | 12 | Metadata, mono labels |

### Pairing rules

- Headlines: Playfair Display 500, tracking `-0.02em`, line-height `1.1`
- Italic emphasis allowed; bold emphasis discouraged in display
- Body: Inter 400, line-height `1.65` for long-form, `1.5` for UI
- Eyebrows: JetBrains Mono 500, uppercase, tracking `0.16em`, size 12px
- Never set Inter and Playfair at the same size in the same composition — there must always be hierarchy

---

## 05 — Voice & tone

See `BRAND_VOICE.md` for the complete voice guide. Summary:

LoreTrip is **the quiet expert in the back of the room.** Confident, plainspoken, comfortable with silence. We don't hype. We don't market with exclamation marks. We respect the reader's time.

**Three rules that override everything else:**
1. **No exclamation marks.**
2. **No emoji** in marketing copy or product UI.
3. **Avoid the slop list** (`unlock`, `seamless`, `revolutionary`, `journey`, `adventure`, `magic`, `transform`, `effortless`, `wanderlust`, `powered by AI`).

---

## 06 — Visual language

### Photography

LoreTrip's photography is **commissioned, never stock**. Style direction:

- Wide-format, low-saturation, ambient natural light
- Subjects are **places and objects**, not faces — partly to stay below the line of any specific agency's brand, partly because faces lock the brand to a single demographic
- Composition prefers off-center, single-point-of-interest framing
- Color grading: warm shadows, cool highlights, never crushed blacks

When commissioning is not yet possible, use **placeholder cards** with the label `[ PLACEHOLDER · COMMISSION ]` rather than substituting stock. The placeholder is honest; the stock photo is a lie.

### Illustration

Sparingly. When used, illustration is line-only, weight matched to the wordmark stroke, monochromatic in Foundation or Ember.

### Iconography

Use Lucide icons, set in `--lt-foundation-70` at 1.5px stroke. No filled icons.

---

## 07 — Application

### Primary placements

- **Marketing site** — `loretrip.com`. Full brand expression.
- **Partner badge** — "Powered by LoreTrip™" badge for agencies who choose to display attribution. Minimum 80px width. Light + dark variants.
- **Brand book** — `loretrip.com/brand`. This document, public.
- **Documentation** — `docs.loretrip.com`. Quieter, denser, more mono-forward.

### Agency-context dashboard

When LoreTrip's UI runs *inside* an agency's product, **the agency's brand is in the foreground, not LoreTrip's.** The dashboard mockup in the reference brand book shows this in practice — for "Adriatic Sailing Co.", the visible chrome is theirs (logo, color, navigation copy). LoreTrip appears only as a small "Powered by" badge in the footer, optionally suppressible by the agency.

This is not a humility flex. It's the product. The agency's clients should not feel like they're using a third-party tool.

---

## 08 — Recommendation summary (one page)

| | |
|---|---|
| Logo mark | Compass — abstracted, asymmetric cross in unclosed ring |
| Wordmark | "LoreTrip™", Playfair Display 500, "o" replaced with compass mark |
| Foundation | `#070D14` |
| Accent | `#D17252` (Soft Ember) |
| Page bg | `#F2F0EC` (Linen) |
| Display type | Playfair Display 400/500 |
| Body type | Inter 400/500/600 |
| Mono | JetBrains Mono 400/500 |
| Voice | Quiet expert; no exclamation, no emoji, no slop list |
| Color rule | 60/30/10 — Linen / Foundation / Ember |
| Photography | Commissioned, places & objects, ambient light |
