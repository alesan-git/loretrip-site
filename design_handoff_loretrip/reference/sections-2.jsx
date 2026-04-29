// sections-2.jsx — Color, Type, Voice, Application sections.

function ColorSection({ tweaks, setTweak }) {
  const ramp = [
    { name: "Ink 950", val: "#070D14", role: "Highest contrast text on light. Reserved." },
    { name: "Ink 900", val: tweaks.foundation, role: "Primary foundation. Brand voice color." },
    { name: "Ink 700", val: "#2A3A4D", role: "Secondary surfaces. Body of dense UI." },
    { name: "Ink 500", val: "#6A7787", role: "Body text muted. Captions." },
    { name: "Ink 300", val: "#A6AFBC", role: "Disabled. Tertiary." },
    { name: "Ink 200", val: "#D2D4D0", role: "Borders. Hairlines." },
    { name: "Ink 100", val: "#E2DED3", role: "Section dividers. Inputs at rest." },
    { name: "Linen",   val: "#F2F0EC", role: "Oat background. Quiet, slightly cooler than cream." },
    { name: "Surface", val: "#FBFAF6", role: "Highest surface. Cards, modals." },
  ];

  const terracottaShades = ["#C95F3D", "#A8492C", "#D17252", "#B05236"];

  return (
    <window.Section id="color" label="03 — Color" tone="warm"
      title="Terracotta in service of restraint."
      lede="The palette is built on a deep forest foundation and a warm paper neutral. Terracotta is the signature accent — used sparingly enough to remain distinctive. Aim for a 70 / 25 / 5 ratio: neutrals carry the brand, foundation grounds it, terracotta marks the moment.">

      {/* Three-color hero strip */}
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 16, marginBottom: 64 }}>
        <SwatchHero name="Foundation" sub="Deep navy" hex={tweaks.foundation} fg="#F2F0EC" tall />
        <SwatchHero name="Ember" sub="Signature accent" hex={tweaks.terracotta} fg="#F2F0EC" tall />
        <SwatchHero name="Linen" sub="Oat neutral" hex="#F2F0EC" fg="#0F1B2A" tall />
      </div>

      {/* Terracotta selector */}
      <div style={{ marginBottom: 24, fontSize: 11, color: "var(--muted)", letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" }}>
        Terracotta — pick the right warmth
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 64 }}>
        {terracottaShades.map(s => {
          const active = tweaks.terracotta.toLowerCase() === s.toLowerCase();
          return (
            <div
              key={s}
              onClick={() => setTweak("terracotta", s)}
              style={{
                cursor: "pointer",
                background: "var(--surface)",
                border: `1px solid ${active ? s : "var(--border)"}`,
                borderRadius: 10,
                padding: 16,
                outline: active ? `2px solid ${s}` : "none",
                outlineOffset: 2,
              }}
            >
              <div style={{ background: s, height: 80, borderRadius: 6, marginBottom: 12 }} />
              <div style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: "var(--ink)" }}>{s.toUpperCase()}</div>
              <div style={{ fontSize: 10, color: "var(--muted)", marginTop: 2 }}>
                {s === "#C95F3D" ? "Ember (selected)" : s === "#A8492C" ? "Burnt sienna" : s === "#D17252" ? "Soft ember" : "Deep brick"}
              </div>
            </div>
          );
        })}
      </div>

      {/* Neutral ramp */}
      <div style={{ marginBottom: 24, fontSize: 11, color: "var(--muted)", letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" }}>
        Neutral ramp
      </div>
      <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 10, overflow: "hidden", marginBottom: 56 }}>
        {ramp.map((c, i) => {
          const isLight = ["#F2F0EC", "#FBFAF6", "#E2DED3", "#D2D4D0"].includes(c.val);
          return (
            <div key={c.name} style={{
              display: "grid",
              gridTemplateColumns: "120px 100px 1fr 80px",
              alignItems: "center",
              padding: "14px 20px",
              borderTop: i === 0 ? "none" : "1px solid var(--border)",
              gap: 24,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 28, height: 28, borderRadius: 4, background: c.val, border: isLight ? "1px solid var(--border)" : "none" }} />
                <span style={{ fontSize: 13, fontWeight: 500, color: "var(--ink)" }}>{c.name}</span>
              </div>
              <span style={{ fontSize: 11.5, fontFamily: "'JetBrains Mono', monospace", color: "var(--ink-soft)" }}>{c.val.toUpperCase()}</span>
              <span style={{ fontSize: 13, color: "var(--ink-soft)" }}>{c.role}</span>
              <span style={{ fontSize: 10, color: "var(--muted)", textAlign: "right", fontFamily: "'JetBrains Mono', monospace" }}>
                {isLight ? "AA on Ink" : "AA on Paper"}
              </span>
            </div>
          );
        })}
      </div>

      {/* Secondary accents */}
      <div style={{ marginBottom: 24, fontSize: 11, color: "var(--muted)", letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" }}>
        Secondary system colors — quiet, complementary
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 64 }}>
        <SystemSwatch name="Slate" hex="#4A6378" role="Info, links, calm states" />
        <SystemSwatch name="Brass" hex="#B8865A" role="Warning, in-review" />
        <SystemSwatch name="Sage" hex="#6F8B72" role="Success, sent, booked" />
        <SystemSwatch name="Brick" hex="#8B3A2E" role="Destructive — used twice/year" />
      </div>

      {/* Usage ratio */}
      <div style={{ marginBottom: 24, fontSize: 11, color: "var(--muted)", letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" }}>
        Usage — 70 / 25 / 5
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "70fr 25fr 5fr", gap: 4, height: 120, borderRadius: 10, overflow: "hidden", marginBottom: 16 }}>
        <div style={{ background: "#F2F0EC", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 18, color: "#0F1B2A" }}>
          <div style={{ fontSize: 11, opacity: 0.55, fontFamily: "'JetBrains Mono', monospace" }}>70%</div>
          <div style={{ fontSize: 14, fontWeight: 500, marginTop: 2 }}>Linen & whites</div>
        </div>
        <div style={{ background: tweaks.foundation, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 18, color: "#F2F0EC" }}>
          <div style={{ fontSize: 11, opacity: 0.65, fontFamily: "'JetBrains Mono', monospace" }}>25%</div>
          <div style={{ fontSize: 14, fontWeight: 500, marginTop: 2 }}>Foundation</div>
        </div>
        <div style={{ background: tweaks.terracotta, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 18, color: "#F2F0EC" }}>
          <div style={{ fontSize: 11, opacity: 0.7, fontFamily: "'JetBrains Mono', monospace" }}>5%</div>
          <div style={{ fontSize: 14, fontWeight: 500, marginTop: 2 }}>Ember</div>
        </div>
      </div>
      <p style={{ fontSize: 14, color: "var(--muted)", margin: 0, maxWidth: 720 }}>
        Ember should feel like a held breath — present at every important moment, absent the rest of the time. If a screen is more than 10% ember, it's wrong.
      </p>
    </window.Section>
  );
}

function SwatchHero({ name, sub, hex, fg, tall }) {
  return (
    <div style={{
      background: hex, color: fg,
      borderRadius: 12,
      padding: "32px 28px",
      minHeight: tall ? 280 : 180,
      border: hex === "#F2F0EC" ? "1px solid var(--border)" : "none",
      display: "flex", flexDirection: "column", justifyContent: "space-between",
    }}>
      <div>
        <div style={{ fontSize: 11, opacity: 0.7, letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" }}>{sub}</div>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 38, fontWeight: 500, marginTop: 12, letterSpacing: "-0.02em" }}>{name}</div>
      </div>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, opacity: 0.85 }}>
        {hex.toUpperCase()}
      </div>
    </div>
  );
}

function SystemSwatch({ name, hex, role }) {
  return (
    <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 10, overflow: "hidden" }}>
      <div style={{ background: hex, height: 84 }} />
      <div style={{ padding: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
          <span style={{ fontSize: 13, fontWeight: 500 }}>{name}</span>
          <span style={{ fontSize: 10.5, fontFamily: "'JetBrains Mono', monospace", color: "var(--muted)" }}>{hex}</span>
        </div>
        <div style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.5 }}>{role}</div>
      </div>
    </div>
  );
}

// ─── 04 · TYPOGRAPHY ────────────────────────────────────────────────────────
function TypographySection() {
  const scale = [
    { name: "Display",  font: "'Playfair Display', serif", size: 88, weight: 400, lh: 0.95, ls: "-0.03em", sample: "Trust is the product." },
    { name: "Title 1",  font: "'Playfair Display', serif", size: 56, weight: 500, lh: 1.05, ls: "-0.02em", sample: "Built for specialist agencies." },
    { name: "Title 2",  font: "'Playfair Display', serif", size: 36, weight: 500, lh: 1.15, ls: "-0.015em", sample: "How LoreTrip works" },
    { name: "Title 3",  font: "Inter, sans-serif",         size: 22, weight: 600, lh: 1.3,  ls: "-0.01em",  sample: "AI as first draft" },
    { name: "Lede",     font: "Inter, sans-serif",         size: 19, weight: 400, lh: 1.55, ls: "0",        sample: "The AI generates structure in minutes; the specialist adds judgment." },
    { name: "Body",     font: "Inter, sans-serif",         size: 16, weight: 400, lh: 1.6,  ls: "0",        sample: "Every itinerary passes through a human before it reaches the traveler." },
    { name: "Small",    font: "Inter, sans-serif",         size: 13, weight: 400, lh: 1.5,  ls: "0",        sample: "Used for captions, metadata, and dense table rows." },
    { name: "Mono",     font: "'JetBrains Mono', monospace", size: 12, weight: 400, lh: 1.5, ls: "0",       sample: "v 2.4.1  ·  TR-2841  ·  api/itineraries/draft" },
    { name: "Eyebrow",  font: "'JetBrains Mono', monospace", size: 11, weight: 500, lh: 1, ls: "0.14em",   sample: "PARTNER NETWORK", upper: true },
  ];
  return (
    <window.Section id="type" label="04 — Typography"
      title={<>Playfair sets the voice. Inter does the work.</>}
      lede="Two type families do everything. Playfair Display brings editorial gravity to headlines and brand moments — but kept restrained, never decorative. Inter handles every line of UI, body, and dense information. JetBrains Mono appears for technical context: IDs, code, metadata.">

      {/* Pairing demo */}
      <div style={{ background: "var(--bg-warm)", border: "1px solid var(--border)", borderRadius: 12, padding: "64px 48px", marginBottom: 64 }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "var(--muted)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 24 }}>The pairing in use</div>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, fontSize: 64, lineHeight: 1.05, letterSpacing: "-0.025em", margin: "0 0 28px", color: "var(--ink)", maxWidth: 880 }}>
          The AI does the heavy lifting. <span style={{ fontStyle: "italic", color: "var(--terracotta)" }}>You add the soul.</span>
        </h3>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: 18, lineHeight: 1.6, color: "var(--ink-soft)", maxWidth: 680, margin: 0 }}>
          Playfair Display carries the editorial register of the brand — the moments where LoreTrip speaks. Inter carries everything else: the dashboard, the tooltip, the changelog entry, the legal page. Use them in this order. Don't reach for Playfair when Inter is enough.
        </p>
      </div>

      {/* Type scale */}
      <div style={{ marginBottom: 24, fontSize: 11, color: "var(--muted)", letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" }}>
        Type scale
      </div>
      <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 10, overflow: "hidden" }}>
        {scale.map((s, i) => (
          <div key={s.name} style={{
            display: "grid",
            gridTemplateColumns: "120px 1fr 200px",
            alignItems: "center",
            padding: "24px 28px",
            borderTop: i === 0 ? "none" : "1px solid var(--border)",
            gap: 24,
          }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 500, color: "var(--ink)" }}>{s.name}</div>
              <div style={{ fontSize: 10.5, color: "var(--muted)", marginTop: 4, fontFamily: "'JetBrains Mono', monospace" }}>{s.size}px / {s.weight}</div>
            </div>
            <div style={{
              fontFamily: s.font,
              fontSize: s.size,
              fontWeight: s.weight,
              lineHeight: s.lh,
              letterSpacing: s.ls,
              color: "var(--ink)",
              textTransform: s.upper ? "uppercase" : "none",
            }}>{s.sample}</div>
            <div style={{ fontSize: 10, color: "var(--muted)", fontFamily: "'JetBrains Mono', monospace", textAlign: "right", lineHeight: 1.6 }}>
              {s.font.split(",")[0].replace(/'/g, "")}<br />
              lh {s.lh} · ls {s.ls}
            </div>
          </div>
        ))}
      </div>

      {/* Pairing rules */}
      <div style={{ marginTop: 64, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        <div style={{ padding: 28, background: "rgba(31,45,38,0.04)", borderRadius: 10 }}>
          <div style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 12, fontFamily: "'JetBrains Mono', monospace" }}>Use Playfair when</div>
          <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14.5, lineHeight: 1.7, color: "var(--ink-soft)" }}>
            <li>The brand is speaking — homepage, marketing, decks.</li>
            <li>Display sizes (28px+) where letterforms can breathe.</li>
            <li>Pull-quotes, key statistics, section headers.</li>
            <li>One emphatic word in italic — sparingly.</li>
          </ul>
        </div>
        <div style={{ padding: 28, background: "rgba(31,45,38,0.04)", borderRadius: 10 }}>
          <div style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 12, fontFamily: "'JetBrains Mono', monospace" }}>Use Inter when</div>
          <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14.5, lineHeight: 1.7, color: "var(--ink-soft)" }}>
            <li>Anything inside the product — tables, forms, settings.</li>
            <li>Dense information or anything below 22px.</li>
            <li>Errors, tooltips, helper text, system messages.</li>
            <li>Documentation body and sidebar navigation.</li>
          </ul>
        </div>
      </div>
    </window.Section>
  );
}

// ─── 05 · VOICE ─────────────────────────────────────────────────────────────
function VoiceSection() {
  const principles = [
    { h: "Peer-to-peer, not vendor-to-customer", d: "We respect that the agency is the expert. We're the infrastructure they chose." },
    { h: "Confident, never boastful", d: "We do unglamorous work well. We don't celebrate that." },
    { h: "Technical without jargon", d: "Plain, precise. Define terms when needed; don't hide behind them." },
    { h: "Warm but restrained", d: "No exclamation marks, no hype, no emoji in marketing. Warmth comes from accuracy and care." },
    { h: "Honest about the AI / human split", d: "The model drafts. The specialist authors. We never imply otherwise." },
    { h: "Specific, not aspirational", d: "“Median response time fell from 3 hours to 14 minutes.” Not “unlock your potential.”" },
    { h: "Quiet over clever", d: "If a sentence is doing too much, cut it. The brand has nothing to prove." },
  ];
  const samples = [
    {
      label: "Homepage hero",
      content: (
        <>
          <h3 style={voiceHeadlineStyle}>Your expertise, AI speed.</h3>
          <p style={voiceBodyStyle}>The white-label trip planning platform for specialist travel agencies. The AI drafts the structure in minutes; you add the local knowledge that only you can provide. Your travelers never see us — that's the point.</p>
          <div style={{ marginTop: 16, display: "flex", gap: 12 }}>
            <span style={ctaPrimary}>Request access →</span>
            <span style={ctaGhost}>How it works</span>
          </div>
        </>
      ),
    },
    {
      label: "Feature description",
      content: (
        <>
          <div style={voiceEyebrowStyle}>Partner network</div>
          <h4 style={voiceSubheadStyle}>Your suppliers, surfaced first.</h4>
          <p style={voiceBodyStyle}>Configure which hotels, restaurants, and operators the AI reaches for first. Affiliate links and direct partnerships are built into every draft itinerary — the recommendations match the agency you've spent years building.</p>
        </>
      ),
    },
    {
      label: "Error message",
      content: (
        <div style={{ background: "rgba(204,122,92,0.06)", border: "1px solid rgba(204,122,92,0.25)", borderRadius: 6, padding: "14px 16px" }}>
          <div style={{ fontSize: 13, fontWeight: 500, color: "var(--terracotta)", marginBottom: 4 }}>This route can't be drafted yet.</div>
          <div style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.55 }}>We don't have enough partner coverage in Lastovo to produce a confident first draft. Try widening the route, or compose this leg manually for now.</div>
        </div>
      ),
    },
    {
      label: "Onboarding email",
      content: (
        <>
          <div style={voiceEyebrowStyle}>Subject — Welcome to LoreTrip</div>
          <p style={voiceBodyStyle}>Hi Marko,</p>
          <p style={voiceBodyStyle}>Your agency workspace is ready. A few notes before you start:</p>
          <p style={voiceBodyStyle}>The first thing to do is upload your existing supplier list. The AI's drafts are only as good as the partners it knows about. We'll match what we can to our database; anything we don't recognize stays in your private layer.</p>
          <p style={voiceBodyStyle}>The second thing — review three drafts before you let any go to a traveler. The model has habits. You'll see them quickly. Adjust your tone-of-voice in Settings → Drafts and the next draft will reflect it.</p>
          <p style={voiceBodyStyle}>Reply to this email if anything's unclear. A real person reads it.</p>
          <p style={{ ...voiceBodyStyle, marginTop: 18 }}>— The LoreTrip team</p>
        </>
      ),
    },
    {
      label: "Pricing page intro",
      content: (
        <>
          <h4 style={voiceSubheadStyle}>Priced for the agency, not the enterprise.</h4>
          <p style={voiceBodyStyle}>Three tiers. No per-seat math. No annual contract required. The lowest tier is built for a one-person agency to be profitable from week one; the highest tier is for teams of ten with multiple destinations and partner networks.</p>
        </>
      ),
    },
    {
      label: "Partner badge microcopy",
      content: (
        <>
          <div style={voiceEyebrowStyle}>Optional — agencies opt in</div>
          <p style={voiceBodyStyle}>"Built on LoreTrip." Nothing more. No tagline, no link out, no marketing surface in the agency's own product. Attribution is a quiet courtesy, not a billboard.</p>
        </>
      ),
    },
  ];
  return (
    <window.Section id="voice" label="05 — Voice & tone" tone="ink"
      title="We sound like infrastructure that respects the people running on it."
      lede="LoreTrip speaks to agency owners and specialists — never to end travelers. The voice is peer-to-peer, technical without jargon, warm without exclamation. We do the unglamorous work well; we don't celebrate that we did it.">

      {/* Principles */}
      <div style={{ marginBottom: 24, fontSize: 11, color: "rgba(250,247,242,0.55)", letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" }}>
        Seven principles
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
        {principles.map((p, i) => (
          <div key={i} style={{
            padding: "28px 28px 28px 0",
            paddingLeft: i % 2 === 1 ? 28 : 0,
            borderTop: i < 2 ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(255,255,255,0.08)",
            borderBottom: i >= principles.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
            borderLeft: i % 2 === 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
          }}>
            <div style={{ display: "flex", gap: 16, alignItems: "baseline", marginBottom: 8 }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "var(--terracotta)" }}>0{i + 1}</span>
              <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 500, color: "var(--surface)", margin: 0, letterSpacing: "-0.01em" }}>{p.h}</h4>
            </div>
            <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "rgba(250,247,242,0.7)", margin: "0 0 0 32px" }}>{p.d}</p>
          </div>
        ))}
      </div>

      {/* Sample copy */}
      <div style={{ marginTop: 80, marginBottom: 24, fontSize: 11, color: "rgba(250,247,242,0.55)", letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" }}>
        Sample copy in voice
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {samples.map((s, i) => (
          <div key={i} style={{
            background: "rgba(250,247,242,0.04)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 10,
            padding: 28,
          }}>
            <div style={{ fontSize: 10, color: "var(--terracotta)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 18, fontFamily: "'JetBrains Mono', monospace" }}>
              {s.label}
            </div>
            {s.content}
          </div>
        ))}
      </div>

      {/* Word lists */}
      <div style={{ marginTop: 80, marginBottom: 24, fontSize: 11, color: "rgba(250,247,242,0.55)", letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" }}>
        Lexicon
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div style={{ padding: "28px 32px", background: "rgba(126,155,111,0.08)", borderRadius: 10, borderLeft: "2px solid #7E9B6F" }}>
          <div style={{ fontSize: 11, color: "#A8C19A", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 14, fontFamily: "'JetBrains Mono', monospace" }}>Use</div>
          <div style={{ fontSize: 14.5, lineHeight: 2, color: "rgba(250,247,242,0.9)" }}>
            specialist · curate · draft · review · approve · partner · workspace · invisible · accurate · considered · quiet · honest · first draft
          </div>
        </div>
        <div style={{ padding: "28px 32px", background: "rgba(184,85,58,0.1)", borderRadius: 10, borderLeft: "2px solid var(--terracotta)" }}>
          <div style={{ fontSize: 11, color: "var(--terracotta)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 14, fontFamily: "'JetBrains Mono', monospace" }}>Avoid</div>
          <div style={{ fontSize: 14.5, lineHeight: 2, color: "rgba(250,247,242,0.9)", textDecoration: "line-through", textDecorationColor: "rgba(204,122,92,0.5)" }}>
            unlock · seamless · revolutionary · powered by AI · effortless · journey · adventure · wanderlust · magic · discover · transform · elevate · supercharge
          </div>
        </div>
      </div>
    </window.Section>
  );
}

const voiceHeadlineStyle = { fontFamily: "'Playfair Display', serif", fontWeight: 500, fontSize: 32, color: "var(--surface)", margin: "0 0 12px", letterSpacing: "-0.02em", lineHeight: 1.15 };
const voiceSubheadStyle = { fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 17, color: "var(--surface)", margin: "0 0 12px" };
const voiceBodyStyle = { fontSize: 14.5, lineHeight: 1.6, color: "rgba(250,247,242,0.78)", margin: "0 0 12px" };
const voiceEyebrowStyle = { fontSize: 10, color: "var(--terracotta)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 8, fontFamily: "'JetBrains Mono', monospace" };
const ctaPrimary = { display: "inline-block", padding: "10px 18px", background: "var(--terracotta)", color: "#fff", borderRadius: 4, fontSize: 13, fontWeight: 500 };
const ctaGhost = { display: "inline-block", padding: "10px 18px", border: "1px solid rgba(255,255,255,0.2)", color: "var(--surface)", borderRadius: 4, fontSize: 13, fontWeight: 500 };

Object.assign(window, { ColorSection, TypographySection, VoiceSection });
