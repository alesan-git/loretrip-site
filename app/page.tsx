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
              The AI layer for{" "}
              <span className="lt-display-italic">human travel agencies.</span>
            </h1>
            <p className="lt-lede">
              LoreTrip helps specialist travel agencies turn client intent into beautiful,
              branded, advisor-approved itineraries — faster, without losing the human touch.
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
              <span style={{ color: "var(--lt-ember-deep)" }}>Draft · 12-day Slovenia + Istria</span>
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
              <span className="lt-display-italic">Packaging it shouldn’t take all day.</span>
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

      {/* Workflow */}
      <section className="section" style={{ background: "var(--lt-surface)", borderBlock: "1px solid var(--lt-rule)" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 720 }}>
            <p className="lt-eyebrow">From client brief to branded proposal</p>
            <h2 className="lt-h2">
              Six steps. <span className="lt-display-italic">One workflow.</span>
            </h2>
            <p className="lt-lede">
              LoreTrip supports the workflow from client request to bookable trip — without
              taking the advisor out of the loop.
            </p>
          </div>

          <div className="workflow">
            {[
              { step: "01", title: "Understand", body: "Capture traveler preferences, constraints, and intent from natural conversation." },
              { step: "02", title: "Structure", body: "Convert loose requests into a clear trip plan you can edit and refine." },
              { step: "03", title: "Draft", body: "Generate coherent itineraries with day-by-day plans and destination narrative." },
              { step: "04", title: "Refine", body: "Adjust, lock, remove, and reshape anything before the client sees it." },
              { step: "05", title: "Present", body: "Deliver a polished, branded proposal that reflects your agency — not a generic AI tool." },
              { step: "06", title: "Monetize", body: "Service fees, accommodation margin, activities, and supplier partnerships — built in." },
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
                Slovenia or Croatia, not too much driving.” LoreTrip turns that into a structured
                trip profile your advisors can shape.
              </p>
            </div>
            <div className="how__visual">
              <span>// CLIENT BRIEF</span>
              <div className="how__visual-bullet"><b /><span><strong style={{ color: "var(--lt-foundation)" }}>10 days</strong> · two travelers · slow pace</span></div>
              <div className="how__visual-bullet"><b /><span>Nature, regional food, low driving load</span></div>
              <div className="how__visual-bullet"><b /><span>Region: Slovenia + Istria coast</span></div>
              <div className="how__visual-bullet"><b /><span>Budget tier: mid-to-upper, advisor-set</span></div>
            </div>
          </div>

          <div className="how__row how__row--reverse">
            <div className="how__copy">
              <p className="lt-eyebrow">02 — Advisor refinement</p>
              <h3 className="lt-h3">The AI drafts. You decide.</h3>
              <p className="lt-body">
                Every recommendation is editable, removable, and advisor-approved before it
                reaches the client. Lock the parts that work. Replace the parts that don’t.
                Insert the supplier you actually trust in Hvar.
              </p>
            </div>
            <div className="how__visual">
              <span>// ADVISOR EDITS</span>
              <div className="how__visual-bullet"><b /><span><strong style={{ color: "var(--lt-foundation)" }}>Locked:</strong> Day 3 · Soča valley walk + Kobariški kotlič</span></div>
              <div className="how__visual-bullet"><b /><span><strong style={{ color: "var(--lt-foundation)" }}>Replaced:</strong> Generic hotel → Hiša Franko</span></div>
              <div className="how__visual-bullet"><b /><span><strong style={{ color: "var(--lt-foundation)" }}>Note:</strong> Ferry Pula → Cres, Mon only</span></div>
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

      {/* Differentiator */}
      <section className="section" style={{ background: "var(--lt-surface)", borderBlock: "1px solid var(--lt-rule)" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 720 }}>
            <p className="lt-eyebrow">Why it’s different</p>
            <h2 className="lt-h2">
              Not another generic travel AI.{" "}
              <span className="lt-display-italic">Built around the agency.</span>
            </h2>
          </div>

          <div className="diff">
            {[
              { t: "Built around the agency", b: "Designed for how specialist travel is really sold — through trust, taste, and human expertise. Not a consumer chatbot wearing a business skin." },
              { t: "You stay in control", b: "The AI drafts. You decide. Every recommendation is editable, removable, and advisor-approved before it reaches the client." },
              { t: "Your brand, not ours", b: "White-label ready. Your clients see your name, your style, your expertise. The platform stays behind the curtain." },
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

      {/* Audience */}
      <section className="section section--tight">
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 720 }}>
            <p className="lt-eyebrow">Who it’s for</p>
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
                intent, drafting itineraries, adapting tone to your brand, and explaining why each
                recommendation fits.
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
