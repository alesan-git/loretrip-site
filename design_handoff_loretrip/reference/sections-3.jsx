// sections-3.jsx — Visual language, application (dashboard, landing, badge), closer.

function VisualLanguageSection() {
  return (
    <window.Section id="visual" label="06 — Visual language" tone="warm"
      title="No sunsets. No suitcases. No pins on maps."
      lede="The visual system avoids every travel-brand cliché. Imagery is editorial and structural — diagrams, schematics, considered cartography used as design rather than decoration, and behind-the-scenes photography of specialists at work. Never destination glamour shots.">

      {/* What we use, what we don't */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 64 }}>
        <div style={{ padding: 28, background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 10 }}>
          <div style={{ fontSize: 11, color: "#7E9B6F", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 16, fontFamily: "'JetBrains Mono', monospace" }}>Use</div>
          <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14.5, lineHeight: 1.8, color: "var(--ink-soft)" }}>
            <li>Editorial diagrams of the draft → curate → send loop</li>
            <li>Schematic illustrations — line art, generous spacing</li>
            <li>Abstract cartographic structures: contours, route lines, waypoints as design elements</li>
            <li>Typographic moments — headlines doing visual work</li>
            <li>Product screenshots set inside agency-branded contexts</li>
            <li>Behind-the-scenes editorial photography of specialists at their desks, with maps, with clients</li>
          </ul>
        </div>
        <div style={{ padding: 28, background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 10 }}>
          <div style={{ fontSize: 11, color: "var(--terracotta)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 16, fontFamily: "'JetBrains Mono', monospace" }}>Avoid</div>
          <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14.5, lineHeight: 1.8, color: "var(--ink-soft)", textDecoration: "line-through", textDecorationColor: "rgba(204,122,92,0.4)" }}>
            <li>Stock travel photography of any kind</li>
            <li>Sunsets, mountains, beaches, planes, suitcases, globes</li>
            <li>Pins-on-a-map used decoratively</li>
            <li>Gradient mesh backgrounds and AI-sparkle aesthetics</li>
            <li>Paper-airplane and compass illustrations</li>
            <li>Anything that suggests wanderlust or adventure</li>
          </ul>
        </div>
      </div>

      {/* The flow diagram — schematic */}
      <div style={{ marginBottom: 24, fontSize: 11, color: "var(--muted)", letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" }}>
        Schematic — the loop
      </div>
      <FlowDiagram />

      {/* Cartographic motif */}
      <div style={{ marginTop: 64, marginBottom: 24, fontSize: 11, color: "var(--muted)", letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" }}>
        Cartographic motif — abstract, never literal
      </div>
      <CartographicMotif />

      {/* Iconography */}
      <div style={{ marginTop: 64, marginBottom: 24, fontSize: 11, color: "var(--muted)", letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" }}>
        Iconography — outlined, considered, 1.5px stroke at 20px
      </div>
      <IconStrip />

      {/* Photography placeholder */}
      <div style={{ marginTop: 64, marginBottom: 24, fontSize: 11, color: "var(--muted)", letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" }}>
        Photography — behind-the-scenes only
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
        {[
          ["Specialist at desk", "Hands, maps, a notebook. Natural light. The work itself."],
          ["Client meeting", "Two people, a table, a printed itinerary. Eye contact, not landscape."],
          ["The route, sketched", "A pen on paper, hand-drawn route in the agency's notebook. Process visible."],
        ].map(([h, d]) => (
          <div key={h} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 10, overflow: "hidden" }}>
            <div style={{ aspectRatio: "4 / 3", background: "linear-gradient(135deg, #2A2A2A 0%, #4A4A4A 50%, #6A6A6A 100%)", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ position: "absolute", inset: 0, background: "rgba(31,45,38,0.55)" }} />
              <div style={{ position: "relative", color: "rgba(250,247,242,0.7)", fontSize: 11, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.1em" }}>[ PLACEHOLDER · COMMISSION ]</div>
            </div>
            <div style={{ padding: 16 }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: "var(--ink)", marginBottom: 4 }}>{h}</div>
              <div style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.5 }}>{d}</div>
            </div>
          </div>
        ))}
      </div>
    </window.Section>
  );
}

function FlowDiagram() {
  const stages = [
    { n: "01", h: "Inquiry", d: "Traveler interacts with the agency's branded planner." },
    { n: "02", h: "Draft", d: "The model produces a structural first pass. Minutes." },
    { n: "03", h: "Curate", d: "The specialist edits, prioritizes partners, adds local depth." },
    { n: "04", h: "Approve", d: "The agency sends the proposal. Their brand. Their voice." },
    { n: "05", h: "Travel", d: "Offline-ready content. The agency, in the traveler's pocket." },
  ];
  return (
    <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, padding: "56px 40px", position: "relative" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 0, position: "relative" }}>
        {/* connecting line */}
        <div style={{ position: "absolute", top: 16, left: "10%", right: "10%", height: 1, background: "var(--terracotta)", opacity: 0.4 }} />
        {stages.map((s, i) => (
          <div key={s.n} style={{ textAlign: "center", padding: "0 8px", position: "relative" }}>
            <div style={{
              width: 32, height: 32, borderRadius: 999,
              background: "var(--surface)", border: `1.5px solid ${i === 2 ? "var(--terracotta)" : "var(--ink)"}`,
              margin: "0 auto 24px", display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 11, fontFamily: "'JetBrains Mono', monospace",
              color: i === 2 ? "var(--terracotta)" : "var(--ink)",
              fontWeight: 500,
              position: "relative", zIndex: 1,
            }}>{s.n}</div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 500, color: "var(--ink)", marginBottom: 8, letterSpacing: "-0.01em" }}>{s.h}</div>
            <div style={{ fontSize: 12.5, lineHeight: 1.55, color: "var(--ink-soft)" }}>{s.d}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 40, paddingTop: 20, borderTop: "1px solid var(--border)", textAlign: "center", fontSize: 11, color: "var(--muted)", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.06em" }}>
        Stage 03 is the product. The other four are infrastructure.
      </div>
    </div>
  );
}

function CartographicMotif() {
  return (
    <div style={{ background: "var(--ink)", borderRadius: 12, height: 280, position: "relative", overflow: "hidden" }}>
      <svg viewBox="0 0 1000 280" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        {/* contour lines */}
        {[40, 80, 120, 160, 200, 240].map((y, i) => (
          <path
            key={y}
            d={`M -50 ${y} Q 200 ${y - 30 + i * 4} 500 ${y + 10 - i * 2} T 1050 ${y - 5}`}
            stroke="rgba(250,247,242,0.08)"
            strokeWidth="1"
            fill="none"
          />
        ))}
        {/* route */}
        <path d="M 120 220 Q 280 180 380 200 T 600 140 Q 720 110 840 80" stroke="var(--terracotta)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        {/* waypoints */}
        {[[120, 220], [380, 200], [600, 140], [840, 80]].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="4" fill={i === 0 || i === 3 ? "var(--terracotta)" : "var(--ink)"} stroke="var(--terracotta)" strokeWidth="1.5" />
            {i === 0 && <text x={x} y={y + 22} fill="rgba(250,247,242,0.6)" fontFamily="JetBrains Mono" fontSize="10" textAnchor="middle">Split</text>}
            {i === 3 && <text x={x} y={y - 12} fill="rgba(250,247,242,0.6)" fontFamily="JetBrains Mono" fontSize="10" textAnchor="middle">Korčula</text>}
          </g>
        ))}
        {/* coordinate ticks */}
        {[100, 300, 500, 700, 900].map(x => (
          <g key={x}>
            <line x1={x} y1={260} x2={x} y2={266} stroke="rgba(250,247,242,0.15)" strokeWidth="0.5" />
            <text x={x} y={276} fill="rgba(250,247,242,0.25)" fontFamily="JetBrains Mono" fontSize="8" textAnchor="middle">{42 + x / 200}°N</text>
          </g>
        ))}
      </svg>
      <div style={{ position: "absolute", top: 24, left: 28, color: "rgba(250,247,242,0.7)" }}>
        <div style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace", color: "var(--terracotta)", marginBottom: 8 }}>Motif · route as design</div>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 500, color: "var(--surface)", letterSpacing: "-0.01em", maxWidth: 360, lineHeight: 1.2 }}>
          Lines as structure, not as scenery.
        </div>
      </div>
    </div>
  );
}

function IconStrip() {
  const icons = [
    { name: "Inquiry",  svg: <><path d="M3 6h14v9H7l-4 3z" /><line x1="6" y1="9" x2="14" y2="9" /><line x1="6" y1="12" x2="11" y2="12" /></> },
    { name: "Draft",    svg: <><path d="M4 4h12v12H4z" /><line x1="7" y1="8" x2="13" y2="8" /><line x1="7" y1="11" x2="13" y2="11" /><line x1="7" y1="14" x2="11" y2="14" /></> },
    { name: "Specialist", svg: <><circle cx="10" cy="7" r="3" /><path d="M4 17c0-3 3-5 6-5s6 2 6 5" /></> },
    { name: "Partner",  svg: <><circle cx="7" cy="10" r="3" /><circle cx="13" cy="10" r="3" /></> },
    { name: "Route",    svg: <><circle cx="5" cy="6" r="1.5" /><circle cx="15" cy="14" r="1.5" /><path d="M5 6 Q 10 6 10 10 Q 10 14 15 14" /></> },
    { name: "Map",      svg: <><path d="M3 5l5-2 4 2 5-2v12l-5 2-4-2-5 2z" /><line x1="8" y1="3" x2="8" y2="15" /><line x1="12" y1="5" x2="12" y2="17" /></> },
    { name: "Booking",  svg: <><rect x="3" y="5" width="14" height="11" rx="1" /><line x1="3" y1="9" x2="17" y2="9" /><line x1="7" y1="3" x2="7" y2="6" /><line x1="13" y1="3" x2="13" y2="6" /></> },
    { name: "Analytics", svg: <><line x1="3" y1="17" x2="17" y2="17" /><rect x="5" y="11" width="2" height="5" /><rect x="9" y="7" width="2" height="9" /><rect x="13" y="13" width="2" height="3" /></> },
  ];
  return (
    <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, padding: "32px 24px", display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: 8 }}>
      {icons.map(ic => (
        <div key={ic.name} style={{ textAlign: "center", padding: "16px 8px", borderRight: "1px solid var(--border)", borderRightWidth: 0 }}>
          <svg width="40" height="40" viewBox="0 0 20 20" fill="none" stroke="var(--ink)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ margin: "0 auto" }}>
            {ic.svg}
          </svg>
          <div style={{ fontSize: 10.5, color: "var(--muted)", marginTop: 10, fontFamily: "Inter, sans-serif" }}>{ic.name}</div>
        </div>
      ))}
    </div>
  );
}

// ─── 07 · IN USE ────────────────────────────────────────────────────────────
function ApplicationSection({ tweaks }) {
  return (
    <window.Section id="application" label="07 — In use"
      title="Behind the agency's brand. Not next to it."
      lede="LoreTrip lives inside the agency's product, not on top of it. Here's how the brand applies — to the dashboard the specialist sees, to the partner badge the agency may opt into, and to the marketing surfaces that face other agencies considering the platform.">

      {/* Dashboard mockup */}
      <div style={{ marginBottom: 24, fontSize: 11, color: "var(--muted)", letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" }}>
        Agency admin — fully white-labeled
      </div>
      <window.Dashboard tokens={window.__tokens} />
      <p style={{ fontSize: 13, color: "var(--muted)", margin: "16px 4px 0", maxWidth: 720, lineHeight: 1.55 }}>
        Note the agency's own brand color (deep teal) and serif initials carry the surface; LoreTrip's typography system is doing the structural work invisibly. Only the specialist sees this view.
      </p>

      {/* Marketing landing hero */}
      <div style={{ marginTop: 96, marginBottom: 24, fontSize: 11, color: "var(--muted)", letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" }}>
        Marketing landing — for agencies considering the platform
      </div>
      <LandingHero tweaks={tweaks} />

      {/* Documentation page */}
      <div style={{ marginTop: 96, marginBottom: 24, fontSize: 11, color: "var(--muted)", letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" }}>
        Documentation
      </div>
      <DocsPage tweaks={tweaks} />

      {/* Favicon strip */}
      <div style={{ marginTop: 96, marginBottom: 24, fontSize: 11, color: "var(--muted)", letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" }}>
        Favicon, app icon, OG card
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 2fr", gap: 16 }}>
        <div style={{ background: "var(--bg-warm)", border: "1px solid var(--border)", borderRadius: 10, padding: 24, textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "center", gap: 12, alignItems: "flex-end", marginBottom: 14 }}>
            <window.Monogram variant={tweaks.markVariant} size={16} color="var(--surface)" bg="var(--ink)" radius={3} />
            <window.Monogram variant={tweaks.markVariant} size={32} color="var(--surface)" bg="var(--ink)" radius={6} />
          </div>
          <div style={{ fontSize: 10.5, color: "var(--muted)", fontFamily: "'JetBrains Mono', monospace" }}>Favicon · 16 / 32px</div>
        </div>
        <div style={{ background: "var(--bg-warm)", border: "1px solid var(--border)", borderRadius: 10, padding: 24, textAlign: "center" }}>
          <window.Monogram variant={tweaks.markVariant} size={88} color="var(--surface)" bg="var(--ink)" radius={20} />
          <div style={{ fontSize: 10.5, color: "var(--muted)", fontFamily: "'JetBrains Mono', monospace", marginTop: 14 }}>App icon · 88px+</div>
        </div>
        <div style={{ background: tweaks.foundation, borderRadius: 10, padding: "32px 36px", color: "var(--surface)", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 180 }}>
          <window.Wordmark variant={tweaks.markVariant} size={24} color="var(--surface)" markColor={tweaks.terracotta} />
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 500, lineHeight: 1.15, letterSpacing: "-0.015em", color: "var(--surface)", maxWidth: 400 }}>
              Your expertise, AI speed.
            </div>
            <div style={{ fontSize: 11, color: "rgba(250,247,242,0.5)", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 12, fontFamily: "'JetBrains Mono', monospace" }}>
              loretrip.com  ·  Open Graph 1200×630
            </div>
          </div>
        </div>
      </div>
    </window.Section>
  );
}

function LandingHero({ tweaks }) {
  return (
    <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid var(--border)" }}>
      {/* nav */}
      <div style={{ background: "var(--bg-warm)", padding: "20px 36px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--border)" }}>
        <window.Wordmark variant={tweaks.markVariant} size={22} color="var(--ink)" markColor={tweaks.terracotta} />
        <div style={{ display: "flex", gap: 28, fontSize: 13, color: "var(--ink-soft)", fontFamily: "Inter" }}>
          <span>Platform</span>
          <span>For agencies</span>
          <span>Pricing</span>
          <span>Docs</span>
          <span style={{ padding: "6px 14px", background: "var(--ink)", color: "var(--surface)", borderRadius: 4, fontSize: 12 }}>Request access</span>
        </div>
      </div>
      {/* hero */}
      <div style={{ padding: "96px 64px 80px", background: "var(--bg-warm)", display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 48, alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 11, color: tweaks.terracotta, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 24, fontFamily: "'JetBrains Mono', monospace" }}>
            For specialist travel agencies
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, fontSize: 64, lineHeight: 1, letterSpacing: "-0.025em", color: "var(--ink)", margin: "0 0 28px", maxWidth: 560 }}>
            Your expertise,<br /><span style={{ fontStyle: "italic", color: tweaks.terracotta }}>AI speed.</span>
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.55, color: "var(--ink-soft)", maxWidth: 480, margin: "0 0 32px" }}>
            The white-label trip planning platform built for one-to-ten person agencies. The AI drafts in minutes; you add the local knowledge that only you can provide.
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            <span style={{ padding: "12px 20px", background: tweaks.foundation, color: "var(--surface)", borderRadius: 4, fontSize: 14, fontWeight: 500 }}>Request access →</span>
            <span style={{ padding: "12px 20px", border: "1px solid var(--border)", color: "var(--ink)", borderRadius: 4, fontSize: 14, fontWeight: 500, background: "var(--surface)" }}>How it works</span>
          </div>
        </div>
        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 10, padding: 24, fontFamily: "Inter" }}>
          <div style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16, fontFamily: "'JetBrains Mono', monospace" }}>
            From a real agency
          </div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, lineHeight: 1.4, fontWeight: 400, fontStyle: "italic", color: "var(--ink)", marginBottom: 20, letterSpacing: "-0.01em" }}>
            "We respond in fifteen minutes now. The drafts get the structure right. I add the parts only I know — and I still sleep at night."
          </div>
          <div style={{ fontSize: 12, color: "var(--ink-soft)" }}>
            <strong>Marko Petrović</strong><br />
            <span style={{ color: "var(--muted)" }}>Adriatic Sailing Co. · Split</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function DocsPage({ tweaks }) {
  return (
    <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden", display: "grid", gridTemplateColumns: "220px 1fr 200px", minHeight: 480 }}>
      <aside style={{ background: "var(--bg-warm)", borderRight: "1px solid var(--border)", padding: "32px 20px", fontFamily: "Inter", fontSize: 13 }}>
        <window.Wordmark variant={tweaks.markVariant} size={18} color="var(--ink)" markColor={tweaks.terracotta} />
        <div style={{ marginTop: 28 }}>
          {[
            ["Getting started", false],
            ["Workspace setup", false],
            ["Drafts API", true],
            ["Partner network", false],
            ["Affiliate links", false],
            ["Webhooks", false],
            ["Rate limits", false],
          ].map(([l, a]) => (
            <div key={l} style={{ padding: "7px 10px", borderRadius: 4, color: a ? "var(--ink)" : "var(--ink-soft)", fontWeight: a ? 500 : 400, background: a ? "rgba(204,122,92,0.1)" : "transparent", borderLeft: a ? `2px solid ${tweaks.terracotta}` : "2px solid transparent", marginBottom: 2 }}>{l}</div>
          ))}
        </div>
      </aside>
      <main style={{ padding: "48px 56px", fontFamily: "Inter" }}>
        <div style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14, fontFamily: "'JetBrains Mono', monospace" }}>Drafts API</div>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 38, fontWeight: 500, color: "var(--ink)", margin: "0 0 20px", letterSpacing: "-0.02em", lineHeight: 1.1 }}>Generating a first draft</h3>
        <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--ink-soft)", margin: "0 0 24px", maxWidth: 560 }}>
          Drafts are produced from a request payload describing the traveler, the rough route, and the agency's partner preferences. The model returns a day-by-day structure ready for the specialist to review.
        </p>
        <div style={{ background: "#10180F", borderRadius: 8, padding: "20px 24px", fontFamily: "'JetBrains Mono', monospace", fontSize: 12.5, color: "rgba(250,247,242,0.85)", lineHeight: 1.7, marginBottom: 24 }}>
          <span style={{ color: "rgba(250,247,242,0.4)" }}># Create a draft</span><br />
          <span style={{ color: tweaks.terracotta }}>POST</span> /v1/drafts<br />
          <span style={{ color: "#A8C19A" }}>{"{"}</span><br />
          &nbsp;&nbsp;<span style={{ color: "#D4A06C" }}>"traveler"</span>: {"{ \"party_size\": 2, \"preferences\": [\"slow\", \"local\"] }"},<br />
          &nbsp;&nbsp;<span style={{ color: "#D4A06C" }}>"route"</span>: [<span style={{ color: "#A8C19A" }}>"split"</span>, <span style={{ color: "#A8C19A" }}>"hvar"</span>, <span style={{ color: "#A8C19A" }}>"korcula"</span>],<br />
          &nbsp;&nbsp;<span style={{ color: "#D4A06C" }}>"days"</span>: 7,<br />
          &nbsp;&nbsp;<span style={{ color: "#D4A06C" }}>"partner_priority"</span>: <span style={{ color: "#A8C19A" }}>"strict"</span><br />
          <span style={{ color: "#A8C19A" }}>{"}"}</span>
        </div>
        <p style={{ fontSize: 13, color: "var(--muted)", margin: 0, fontStyle: "italic" }}>
          The draft is yours to edit. We never send anything to the traveler — that's your job.
        </p>
      </main>
      <aside style={{ borderLeft: "1px solid var(--border)", padding: "48px 20px", fontFamily: "Inter", fontSize: 11.5, color: "var(--muted)" }}>
        <div style={{ letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12, fontFamily: "'JetBrains Mono', monospace" }}>On this page</div>
        <div style={{ paddingLeft: 8, lineHeight: 2 }}>
          <div style={{ color: "var(--ink)", borderLeft: `1px solid ${tweaks.terracotta}`, paddingLeft: 8, marginLeft: -8 }}>Overview</div>
          <div>Request shape</div>
          <div>Response</div>
          <div>Partner priority</div>
          <div>Errors</div>
        </div>
      </aside>
    </div>
  );
}

// ─── CLOSER ─────────────────────────────────────────────────────────────────
function Closer({ tweaks }) {
  return (
    <section style={{ background: tweaks.foundation, color: "var(--surface)", padding: "140px 0 100px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 48px" }}>
        <div style={{ fontSize: 11, color: "rgba(250,247,242,0.5)", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 32, fontFamily: "'JetBrains Mono', monospace" }}>
          ◦ &nbsp;End of brand book v 1.0
        </div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, fontSize: 88, lineHeight: 0.98, letterSpacing: "-0.025em", margin: "0 0 56px", maxWidth: 960 }}>
          The brand a specialist agency would be <span style={{ fontStyle: "italic", color: tweaks.terracotta }}>proud to have powering their business.</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32, marginTop: 80, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          {[
            ["Maintained by", "LoreTrip Brand"],
            ["Version", "1.0 — April 2026"],
            ["Next review", "Q3 2026"],
          ].map(([l, v]) => (
            <div key={l}>
              <div style={{ fontSize: 11, color: "rgba(250,247,242,0.45)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 8, fontFamily: "'JetBrains Mono', monospace" }}>{l}</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: "var(--surface)", letterSpacing: "-0.01em" }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { VisualLanguageSection, ApplicationSection, Closer });
