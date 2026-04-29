import Link from "next/link";
import { MarkCompass } from "@/components/Marks";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__copy">
            <p className="lt-eyebrow">Platform for specialist travel agencies</p>
            <h1 className="lt-display">
              Your local knowledge is the product.{" "}
              <span className="lt-display-italic">We built the AI that knows it.</span>
            </h1>
            <p className="lt-lede">
              LoreTrip lets specialist agencies feed their curated expertise — the restaurants
              they'd send their own family to, the trails only locals hike, the guesthouse that
              doesn't advertise — directly into an AI trip planner that prioritises what the
              agency knows is best. Not what has the most reviews.
            </p>
            <div className="hero__ctas">
              <Link href="/contact" className="btn btn--primary">
                Request Early Access
              </Link>
              <Link href="/demo" className="btn btn--ghost">
                See the demo <span className="arrow">→</span>
              </Link>
            </div>
          </div>

          <div className="hero__visual" aria-hidden="true">
            <div className="hero__visual-mark">
              <MarkCompass size={240} color="var(--lt-foundation)" strokeWidth={4} />
            </div>
            <div className="hero__visual-card">
              <span style={{ color: "var(--lt-ember-deep)" }}>Draft · 12-day coastal + highlands route</span>
              <strong>“Nature, food, something authentic — not too much driving.”</strong>
              <span>Routed · 4 regions · 11 partners · 6 min to first draft</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="rule container" style={{ width: "auto" }} />

      {/* Problem */}
      <section className="section section--tight">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <p className="lt-eyebrow">The problem</p>
            <h2 className="lt-h2">
              Your expertise is your advantage.{" "}
              <span className="lt-display-italic">Packaging it shouldn't take all day.</span>
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 56 + "ch" }}>
            <p className="lt-body">
              A strong travel advisor can build an exceptional proposal. But doing it repeatedly
              takes hours — the first draft, the itinerary structure, the destination copy, the
              daily flow, the revisions, the client-facing polish.
            </p>
            <p className="lt-body">
              Meanwhile, your clients expect speed and personalization. The more bespoke the trip,
              the more manual the work.
            </p>
            <p className="lt-body" style={{ color: "var(--lt-foundation)" }}>
              LoreTrip helps you respond faster while keeping the proposal thoughtful, specific,
              and yours.
            </p>
          </div>
        </div>
      </section>

      {/* The Real Gap in AI Travel */}
      <section className="section" style={{ background: "var(--lt-foundation)", color: "var(--lt-linen)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <p className="lt-eyebrow" style={{ color: "var(--lt-ember-soft)" }}>The real gap in AI travel</p>
            <h2 className="lt-h2" style={{ color: "var(--lt-linen)" }}>
              AI recommends what's popular.{" "}
              <span className="lt-display-italic">Agencies recommend what's good.</span>
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: "56ch" }}>
            <p className="lt-body" style={{ color: "var(--lt-foundation-30)" }}>
              Generic AI trip planners pull from the same pool: aggregated reviews, sponsored
              listings, SEO-optimised content. The result — every destination starts to look the
              same. The same 10 restaurants. The same "hidden gems" that 4 million people visited
              last year.
            </p>
            <p className="lt-body" style={{ color: "var(--lt-foundation-30)" }}>
              The agencies who actually live and breathe their destinations know better. They
              know the restaurant where the food is genuinely great — not the one with 4.8 stars
              because tourists don't know what else to compare it to. They know the bike rental
              that actually maintains its fleet. The viewpoint that isn't on Instagram yet.
            </p>
            <p className="lt-body" style={{ color: "var(--lt-foundation-30)" }}>
              That knowledge has always been locked in the advisor's head, delivered one email at
              a time.
            </p>
            <p className="lt-body" style={{ color: "var(--lt-linen)" }}>
              LoreTrip surfaces it. Agencies curate their trusted partners, places, and
              experiences in a dashboard. The AI prioritises those curated picks in every
              itinerary it generates — confidently, contextually, on-brand. The output is a trip
              plan that reflects what the agency genuinely believes is the best way to experience
              the destination.
            </p>
            <p className="lt-h3" style={{ color: "var(--lt-ember-soft)", fontStyle: "italic", marginTop: 6 }}>
              Not the most reviewed. Not the most affiliated. The most trusted.
            </p>
          </div>
        </div>
      </section>

      {/* Workflow — 7 steps */}
      <section className="section" style={{ background: "var(--lt-surface)", borderBottom: "1px solid var(--lt-rule)" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 760 }}>
            <p className="lt-eyebrow">From client brief to branded proposal</p>
            <h2 className="lt-h2">
              Seven steps. <span className="lt-display-italic">One workflow.</span>
            </h2>
            <p className="lt-lede">
              LoreTrip supports the workflow from curation to client handoff — without taking the
              advisor out of the loop.
            </p>
          </div>

          {/* Featured Curate step */}
          <div className="workflow__featured">
            <div className="workflow__featured-head">
              <span className="workflow__step workflow__step--accent">00 — Curate · Foundational</span>
              <h3 className="workflow__title" style={{ fontSize: "var(--text-2xl)" }}>
                Build your knowledge layer before any traveler asks a question.
              </h3>
            </div>
            <p className="lt-body" style={{ maxWidth: "62ch" }}>
              Mark your trusted partners — the family-run hotel by the lake, the wine bar your
              guide swears by, the kayak outfitter that's never late. Set priority levels. Add
              notes. Flag seasonal relevance. This curated layer becomes the AI's first
              preference. When a traveler asks for "a great lunch near the coast," the model
              doesn't search the internet. It reaches for what you've already approved.
            </p>
          </div>

          <div className="workflow">
            {[
              { step: "01", title: "Understand", body: "Capture traveler preferences, constraints, and intent from natural conversation." },
              { step: "02", title: "Structure", body: "Convert loose requests into a clear trip plan you can edit and refine." },
              { step: "03", title: "Draft", body: "Every AI suggestion draws from your curated pool first. You're refining from a strong base, not correcting from scratch." },
              { step: "04", title: "Refine", body: "Adjust, lock, remove, and reshape anything before the client sees it." },
              { step: "05", title: "Present", body: "Deliver a polished, branded proposal that reflects your agency — not a generic AI tool." },
              { step: "06", title: "Monetise", body: "Service fees, accommodation margin, activities, and supplier partnerships — built in." },
            ].map((s) => (
              <div key={s.step} className="workflow__card">
                <span className="workflow__step">{s.step}</span>
                <h3 className="workflow__title">{s.title}</h3>
                <p className="lt-body" style={{ fontSize: "var(--text-sm)" }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works (alternating rows) */}
      <section className="section">
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 720, marginBottom: 24 }}>
            <p className="lt-eyebrow">How it works</p>
            <h2 className="lt-h2">A real proposal, in minutes — not days.</h2>
          </div>

          <div className="how__row">
            <div className="how__copy">
              <p className="lt-eyebrow">01 — Client request</p>
              <h3 className="lt-h3">Start from how clients actually talk.</h3>
              <p className="lt-body">
                A client sends a brief: “We want 10 days, nature, food, something authentic, maybe
                the coast and the mountains, not too much driving.” LoreTrip turns that into a
                structured trip profile your advisors can shape.
              </p>
            </div>
            <div className="how__visual">
              <span>// CLIENT BRIEF</span>
              <div className="how__visual-bullet"><b /><span><strong style={{ color: "var(--lt-foundation)" }}>10 days</strong> · two travelers · slow pace</span></div>
              <div className="how__visual-bullet"><b /><span>Nature, regional food, low driving load</span></div>
              <div className="how__visual-bullet"><b /><span>Region: coast + highlands</span></div>
              <div className="how__visual-bullet"><b /><span>Budget tier: mid-to-upper, advisor-set</span></div>
            </div>
          </div>

          <div className="how__row how__row--reverse">
            <div className="how__copy">
              <p className="lt-eyebrow">02 — Advisor refinement</p>
              <h3 className="lt-h3">The AI drafts. You decide.</h3>
              <p className="lt-body">
                Every recommendation is editable, removable, and advisor-approved before it
                reaches the client. Lock the parts that work. Replace the parts that don't.
                Insert the supplier you actually trust.
              </p>
            </div>
            <div className="how__visual">
              <span>// ADVISOR EDITS</span>
              <div className="how__visual-bullet"><b /><span><strong style={{ color: "var(--lt-foundation)" }}>Locked:</strong> Day 3 · river valley walk + traditional lunch</span></div>
              <div className="how__visual-bullet"><b /><span><strong style={{ color: "var(--lt-foundation)" }}>Replaced:</strong> Generic hotel → partner guesthouse</span></div>
              <div className="how__visual-bullet"><b /><span><strong style={{ color: "var(--lt-foundation)" }}>Note:</strong> Ferry connection, Mon only</span></div>
            </div>
          </div>

          <div className="how__row">
            <div className="how__copy">
              <p className="lt-eyebrow">03 — Branded handoff</p>
              <h3 className="lt-h3">A proposal that looks like it came from your best advisor.</h3>
              <p className="lt-body">
                Clients receive a polished, professional itinerary on your domain, in your tone,
                with your logo. LoreTrip stays out of sight. The relationship stays yours.
              </p>
            </div>
            <div className="how__visual">
              <span>// CLIENT-FACING</span>
              <div className="how__visual-bullet"><b /><span>Domain: <strong style={{ color: "var(--lt-foundation)" }}>plan.youragency.com</strong></span></div>
              <div className="how__visual-bullet"><b /><span>Footer badge: optional · suppressible</span></div>
              <div className="how__visual-bullet"><b /><span>Export: web, PDF, email-ready</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* What the traveler gets */}
      <section className="section section--tight" style={{ background: "var(--lt-surface)", borderBlock: "1px solid var(--lt-rule)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <p className="lt-eyebrow">What the traveler gets</p>
            <h2 className="lt-h2">
              A trip that feels personally recommended,{" "}
              <span className="lt-display-italic">not algorithmically generated.</span>
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: "56ch" }}>
            <p className="lt-body">
              Travelers can browse ready-made packages or build from scratch. They can take a
              12-day itinerary and say "make it 9 days" or "swap the lake day for a wine region."
              The AI adjusts — but every swap still draws from the agency's curated knowledge.
              The human touch doesn't disappear when the traveler customises.
            </p>
            <p className="lt-body">
              Many travelers love a package but wish they could tweak it — an extra day here, a
              different activity there. With LoreTrip, that flexibility is built in. The 80%-right
              package becomes 100%-right, and every modification still respects the agency's
              curated quality.
            </p>
            <p className="lt-body" style={{ color: "var(--lt-foundation)" }}>
              The difference is subtle but powerful: the traveler feels like they're getting
              advice from someone who knows the country. Because they are. The AI is the delivery
              mechanism. The agency is the intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Restaurant example callout */}
      <section className="section section--tight">
        <div className="container">
          <div className="callout">
            <div className="callout__head">
              <p className="lt-eyebrow">Example · choosing a restaurant in the old town</p>
              <h2 className="lt-h2">
                Data-driven{" "}
                <span className="lt-display-italic">vs. knowledge-driven.</span>
              </h2>
            </div>
            <div className="callout__grid">
              <div className="callout__cell callout__cell--mute">
                <p className="lt-eyebrow" style={{ color: "var(--lt-foundation-50)" }}>Generic AI planner</p>
                <p className="lt-body" style={{ color: "var(--lt-foundation-70)" }}>
                  Recommends the restaurant with <strong>2,400 reviews and 4.6 stars</strong>.
                  It's fine. It's busy. It's optimised for tourists.
                </p>
              </div>
              <div className="callout__cell callout__cell--accent">
                <p className="lt-eyebrow" style={{ color: "var(--lt-ember-deep)" }}>LoreTrip-powered agency</p>
                <p className="lt-body" style={{ color: "var(--lt-foundation)" }}>
                  Recommends the restaurant with <strong>180 reviews</strong> their team has
                  eaten at 30 times — because the chef sources from local farms, the portions are
                  honest, and it's where they'd take their own visitors. Curated in the
                  dashboard, prioritised by the AI, served as a confident recommendation.
                </p>
              </div>
            </div>
            <p className="lt-meta" style={{ textAlign: "center", marginTop: 24 }}>
              That's the difference.
            </p>
          </div>
        </div>
      </section>

      {/* Differentiator */}
      <section className="section" style={{ background: "var(--lt-surface)", borderBlock: "1px solid var(--lt-rule)" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 720 }}>
            <p className="lt-eyebrow">Why it's different</p>
            <h2 className="lt-h2">
              Not another generic travel AI.{" "}
              <span className="lt-display-italic">Built around the agency.</span>
            </h2>
          </div>

          <div className="diff">
            {[
              { t: "Curated intelligence, not crowdsourced data", b: "Recommendations come from what your team has vetted, not from aggregated reviews. Priority goes to partners and places you've deliberately chosen." },
              { t: "Traveler flexibility, agency guardrails", b: "Clients can modify packages, extend trips, swap activities. Every adjustment still draws from your curated pool. Customisation without quality drift." },
              { t: "The agency is the brand, the brain, the beneficiary", b: "White-label means your name. Curation means your taste. Revenue architecture means your margin. LoreTrip is infrastructure, not a competitor." },
              { t: "Revenue-aware", b: "Proposals that support your commercial model — service fees, supplier margin, curated activities, insurance — not just inspiration." },
              { t: "Specialist-grade", b: "Strongest where travel requires taste, context, nuance, and pacing. Not a list of popular attractions." },
              { t: "Human-in-the-loop", b: "Your expertise shapes every plan. The model proposes; the advisor edits, locks, and signs off." },
            ].map((d) => (
              <div key={d.t} className="diff__cell">
                <h3>{d.t}</h3>
                <p className="lt-body" style={{ fontSize: "var(--text-sm)" }}>{d.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who this resonates with */}
      <section className="section section--tight">
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 720 }}>
            <p className="lt-eyebrow">Who this resonates with</p>
            <h2 className="lt-h2">
              Two kinds of agencies.{" "}
              <span className="lt-display-italic">One shared belief.</span>
            </h2>
          </div>

          <div className="resonates">
            <div className="resonates__card">
              <p className="lt-eyebrow">If you say:</p>
              <p className="resonates__quote">
                “I know my country better than any algorithm.”
              </p>
              <p className="lt-body">
                LoreTrip turns that conviction into a competitive advantage. Your knowledge
                becomes the AI's knowledge. You're not adopting a tool — you're amplifying what
                already makes you different.
              </p>
            </div>
            <div className="resonates__card">
              <p className="lt-eyebrow">If you say:</p>
              <p className="resonates__quote">
                “Show me the conversion numbers.”
              </p>
              <p className="lt-body">
                Curated, specific recommendations convert browsers into bookers at higher rates
                than generic suggestions. Differentiation isn't just philosophical. It's
                commercial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="section section--tight" style={{ background: "var(--lt-surface)", borderTop: "1px solid var(--lt-rule)" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 720 }}>
            <p className="lt-eyebrow">Who it's for</p>
            <h2 className="lt-h2">Built for travel sellers.</h2>
            <p className="lt-lede">
              Designed for the professionals who sell travel — small teams with deep expertise,
              loyal clients, and high standards.
            </p>
          </div>
          <div className="audience">
            {[
              "Boutique travel agencies",
              "Tailor-made specialists",
              "Luxury advisors",
              "Incoming DMCs",
              "Niche tour operators",
              "Family travel specialists",
              "Adventure & experiential brands",
              "Destination experts",
              "Agency groups & consortia",
            ].map((tag) => (
              <span key={tag} className="audience__tag">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Powered by Claude */}
      <section className="section section--tight">
        <div className="container">
          <div className="claude">
            <div className="claude__copy">
              <span className="claude__chip">
                <span className="claude__chip-dot" />
                Powered by Claude · Anthropic
              </span>
              <p className="lt-eyebrow" style={{ color: "var(--lt-ember-soft)" }}>The AI layer</p>
              <h2 className="lt-h2" style={{ color: "var(--lt-linen)" }}>
                Built on Claude. <span className="lt-display-italic">Tuned for travel.</span>
              </h2>
              <p className="lt-body" style={{ color: "var(--lt-foundation-30)", maxWidth: "56ch" }}>
                LoreTrip is built on Claude by Anthropic — known for nuanced reasoning, long-form
                coherence, and safety. Claude handles the heavy lifting: understanding traveler
                intent, drafting itineraries, adapting tone to your brand, and explaining why
                each recommendation fits.
              </p>
              <p className="lt-body" style={{ color: "var(--lt-foundation-30)", maxWidth: "56ch" }}>
                Claude's long-context reasoning and brand-tone adaptation make it uniquely suited
                for travel — a domain where nuance, pacing, and cultural sensitivity matter more
                than speed. LoreTrip is designed as a showcase of what Claude can do when paired
                with genuine human expertise.
              </p>
              <p className="lt-body" style={{ color: "var(--lt-foundation-30)", maxWidth: "56ch" }}>
                You handle what matters: supplier selection, pricing, feasibility, client
                relationships, and the taste that makes your agency different.
              </p>
            </div>
            <div className="claude__visual" aria-hidden="true">
              <span>// MODEL · CLAUDE</span>
              <div className="claude__visual-row"><b>Reasoning</b></div>
              <div className="claude__visual-row"><b>Long-form coherence</b></div>
              <div className="claude__visual-row"><b>Brand-tone adaptation</b></div>
              <div className="claude__visual-row"><b>Safety + reliability</b></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--tight">
        <div className="container">
          <div className="cta-band">
            <p className="lt-eyebrow">Your expertise, amplified</p>
            <h2 className="lt-h2">
              Travel is becoming AI-native.{" "}
              <span className="lt-display-italic">The agencies should still own it.</span>
            </h2>
            <p className="lt-body">
              LoreTrip is in private build with launch partners. If you run a specialist agency
              and want to see how this fits your workflow, get in touch.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
              <Link href="/contact" className="btn btn--primary">Request Early Access</Link>
              <Link href="/demo" className="btn btn--ghost">See the demo <span className="arrow">→</span></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
