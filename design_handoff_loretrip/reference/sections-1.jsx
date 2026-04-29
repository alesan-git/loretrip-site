// sections.jsx — Brand book sections.
// Each section is a self-contained, full-width block. Composed in index.html.

// ─── Layout primitives ──────────────────────────────────────────────────────
function Section({ id, label, title, lede, children, tone = "paper", style = {} }) {
  const bg = tone === "ink" ? "var(--ink)" : tone === "warm" ? "var(--bg-warm)" : "var(--surface)";
  const fg = tone === "ink" ? "var(--surface)" : "var(--ink)";
  const muted = tone === "ink" ? "rgba(250,247,242,0.55)" : "var(--muted)";
  const border = tone === "ink" ? "rgba(255,255,255,0.08)" : "var(--border)";
  return (
    <section
      id={id}
      style={{
        background: bg,
        color: fg,
        padding: "120px 0 100px",
        borderTop: `1px solid ${border}`,
        ...style,
      }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 48px" }}>
        {label && (
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28, fontSize: 12, color: muted, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 500 }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>{label}</span>
            <span style={{ flex: 1, height: 1, background: border }} />
          </div>
        )}
        {title && (
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 500,
            fontSize: 56,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            margin: "0 0 24px",
            maxWidth: 880,
            color: fg,
          }}>{title}</h2>
        )}
        {lede && (
          <p style={{
            fontSize: 19,
            lineHeight: 1.55,
            color: tone === "ink" ? "rgba(250,247,242,0.78)" : "var(--ink-soft)",
            maxWidth: 720,
            margin: "0 0 56px",
          }}>{lede}</p>
        )}
        {children}
      </div>
    </section>
  );
}

function Grid({ cols = 2, gap = 32, children, style = {} }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gap, ...style }}>
      {children}
    </div>
  );
}

function Card({ children, style = {}, padded = true }) {
  return (
    <div style={{
      background: "var(--surface)",
      border: "1px solid var(--border)",
      borderRadius: 10,
      padding: padded ? 28 : 0,
      ...style,
    }}>{children}</div>
  );
}

// ─── HERO ───────────────────────────────────────────────────────────────────
function Hero({ tweaks }) {
  const Wordmark = window.Wordmark;
  return (
    <section style={{
      background: "var(--ink)",
      color: "var(--surface)",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Top bar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "32px 48px", maxWidth: 1320, margin: "0 auto", width: "100%", boxSizing: "border-box" }}>
        <Wordmark variant={tweaks.markVariant} size={28} color="var(--surface)" markColor="var(--terracotta)" />
        <div style={{ display: "flex", gap: 28, fontSize: 12, color: "rgba(250,247,242,0.6)", letterSpacing: "0.04em", fontFamily: "'JetBrains Mono', monospace" }}>
          <span>Brand Book</span>
          <span>v 1.0</span>
          <span>April 2026</span>
        </div>
      </div>

      {/* Centered content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: 1120, margin: "0 auto", padding: "0 48px", width: "100%", boxSizing: "border-box" }}>
        <div style={{ fontSize: 12, color: "rgba(250,247,242,0.5)", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 36, fontFamily: "'JetBrains Mono', monospace" }}>
          ◦ &nbsp;Identity, voice, and application
        </div>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 400,
          fontSize: "clamp(72px, 11vw, 168px)",
          lineHeight: 0.95,
          letterSpacing: "-0.03em",
          margin: 0,
          color: "var(--surface)",
        }}>
          The Lore<span style={{ color: "var(--terracotta)", fontStyle: "italic" }}>Trip</span><br />
          Brand Book
        </h1>
        <p style={{
          fontSize: 22,
          lineHeight: 1.5,
          color: "rgba(250,247,242,0.72)",
          maxWidth: 640,
          margin: "44px 0 0",
        }}>
          A B2B infrastructure brand for specialist travel agencies.<br />
          Calm. Confident. <span style={{ fontStyle: "italic", fontFamily: "'Playfair Display', serif" }}>Invisible by design.</span>
        </p>
      </div>

      {/* Bottom rail */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", padding: "32px 48px", maxWidth: 1320, margin: "0 auto", width: "100%", boxSizing: "border-box", fontSize: 11, color: "rgba(250,247,242,0.45)", letterSpacing: "0.08em", fontFamily: "'JetBrains Mono', monospace" }}>
          <div style={{ display: "flex", gap: 32 }}>
            <span>01 — Positioning</span>
            <span>02 — Logo</span>
            <span>03 — Color</span>
            <span>04 — Type</span>
            <span>05 — Voice</span>
            <span>06 — In&nbsp;Use</span>
          </div>
          <span>↓ &nbsp;Scroll</span>
      </div>
    </section>
  );
}

// ─── 01 · POSITIONING (the pitch in brand voice) ───────────────────────────
function Positioning() {
  return (
    <Section id="positioning" label="01 — Positioning" tone="warm"
      title={<>The travel industry's AI moment is arriving wrong.</>}
      lede="Every major trip planner — TripCreator, Nezasa, Layla, Wonderplan — targets the same customer: the traveler directly, or the enterprise-scale tour operator. Meanwhile, the segment that knows destinations best is being left behind entirely.">
      <Grid cols={2} gap={48}>
        <div>
          <h3 style={pulloutH}>SMB specialist agencies</h3>
          <p style={pulloutP}>
            One-to-ten person operations. A Slovenian hiking specialist in Utrecht. A Croatian sailing expert in Amsterdam. A Dolomites cycling guide in Munich. They have what no algorithm can replicate — <em>deep local knowledge and the trust of their clients.</em>
          </p>
          <p style={pulloutP}>
            What they don't have is time.
          </p>
        </div>
        <div>
          <h3 style={pulloutH}>The market gap</h3>
          <p style={pulloutP}>
            Big platforms ignore them — deal size too small. Generic AI planners compete with them instead of empowering them. €500–2,000/month tools serve only the largest operators.
          </p>
          <p style={pulloutP}>
            <strong style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 500, fontSize: 22, color: "var(--ink)" }}>
              Nobody is building for them. LoreTrip is.
            </strong>
          </p>
        </div>
      </Grid>

      <div style={{ marginTop: 80, padding: "48px 56px", background: "var(--ink)", color: "var(--surface)", borderRadius: 12 }}>
        <div style={{ fontSize: 11, color: "rgba(250,247,242,0.55)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 20, fontFamily: "'JetBrains Mono', monospace" }}>
          Core thesis
        </div>
        <p style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 38,
          lineHeight: 1.25,
          fontWeight: 400,
          letterSpacing: "-0.01em",
          margin: 0,
          maxWidth: 880,
        }}>
          In travel, trust is the product. AI should amplify human expertise, not replace it. The AI generates; the specialist <span style={{ fontStyle: "italic", color: "var(--terracotta)" }}>curates, prioritizes, and approves.</span>
        </p>
      </div>

      <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
        {[
          ["Invisible to travelers", "LoreTrip never appears in the consumer flow. Each agency runs what feels like their own proprietary platform."],
          ["AI as first draft", "The model produces structure in minutes. The specialist adds judgment, local secrets, the ‘go here instead.’"],
          ["The agency owns the customer", "Bookings, affiliate revenue, partner prioritization, brand — all flow back to the agency. We charge a subscription."],
        ].map(([h, p]) => (
          <div key={h} style={{ paddingTop: 24, borderTop: "1px solid var(--border)" }}>
            <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 500, margin: "0 0 12px", color: "var(--ink)", letterSpacing: "-0.01em" }}>{h}</h4>
            <p style={{ fontSize: 15, lineHeight: 1.55, color: "var(--ink-soft)", margin: 0 }}>{p}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

const pulloutH = { fontFamily: "Inter, sans-serif", fontSize: 12, color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 500, margin: "0 0 16px" };
const pulloutP = { fontSize: 17, lineHeight: 1.6, color: "var(--ink-soft)", margin: "0 0 16px" };

// ─── 02 · LOGO ──────────────────────────────────────────────────────────────
function LogoSection({ tweaks, setTweak }) {
  const { Wordmark, Monogram } = window;
  const variants = ["compass", "route", "serif"];
  const variantMeta = {
    compass: {
      title: "A. Abstracted compass",
      desc: "An asymmetric four-tick rule inside an unclosed ring. Reduced enough to escape the compass-rose cliché — reads as orientation, not as travel-brochure decoration.",
      verdict: "Risk: still legible as a compass. Tested at favicon size, the cross dominates and pulls the brand toward wayfinding tropes. Pass.",
    },
    route: {
      title: "B. Route / waypoints",
      desc: "Two waypoints joined by a curved path — one outlined, one solid. Implies a curated sequence rather than a pin dropped on a map.",
      verdict: "Risk: still spatial. Strong at large sizes; gets fussy under 16px. Better as a secondary mark than the primary.",
    },
    serif: {
      title: "C. Typographic ‘o’ (recommended)",
      desc: "The ‘o’ reimagined as a serif ellipse bisected by a single fine bar. The bar is the horizon, the line of a written page, the editor's rule. Nods to lore — story, knowledge — not to trip.",
      verdict: "Strongest. It reads as a piece of typography first and a logo second, which is exactly the editorial register we want. Holds at favicon size.",
    },
  };
  return (
    <Section id="logo" label="02 — Logo system"
      title="The wordmark is the brand."
      lede="LoreTrip is set in Playfair Display, with the ‘o’ in ‘Lore’ replaced by a custom mark. The wordmark should feel editorial and considered — like the masthead of a quarterly, not the sticker on a suitcase.">

      {/* Hero wordmark */}
      <div style={{ background: "var(--bg-warm)", border: "1px solid var(--border)", borderRadius: 12, padding: "80px 56px", marginBottom: 24, textAlign: "center" }}>
        <Wordmark variant={tweaks.markVariant} size={120} color="var(--ink)" markColor="var(--terracotta)" />
        <div style={{ marginTop: 28, fontSize: 11, color: "var(--muted)", letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" }}>
          Primary wordmark · {variantMeta[tweaks.markVariant].title.split(". ")[1]}
        </div>
      </div>

      {/* Three explorations side by side */}
      <div style={{ marginTop: 64, marginBottom: 24, fontSize: 11, color: "var(--muted)", letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" }}>
        Three directions
      </div>
      <Grid cols={3} gap={20}>
        {variants.map(v => {
          const active = tweaks.markVariant === v;
          return (
            <div
              key={v}
              onClick={() => setTweak("markVariant", v)}
              style={{
                background: active ? "var(--ink)" : "var(--surface)",
                color: active ? "var(--surface)" : "var(--ink)",
                border: `1px solid ${active ? "var(--ink)" : "var(--border)"}`,
                borderRadius: 12,
                padding: 32,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              <div style={{ display: "flex", justifyContent: "center", padding: "32px 0", marginBottom: 24, background: active ? "rgba(250,247,242,0.04)" : "var(--bg-warm)", borderRadius: 8 }}>
                <Wordmark variant={v} size={48} color={active ? "var(--surface)" : "var(--ink)"} markColor="var(--terracotta)" />
              </div>
              <div style={{ fontSize: 11, color: active ? "var(--terracotta)" : "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8, fontFamily: "'JetBrains Mono', monospace" }}>
                {variantMeta[v].title.split(". ")[0]} {v === "serif" && "· recommended"}
              </div>
              <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 500, margin: "0 0 12px", letterSpacing: "-0.01em" }}>
                {variantMeta[v].title.split(". ")[1]}
              </h4>
              <p style={{ fontSize: 13.5, lineHeight: 1.55, color: active ? "rgba(250,247,242,0.72)" : "var(--ink-soft)", margin: "0 0 16px" }}>
                {variantMeta[v].desc}
              </p>
              <p style={{ fontSize: 12, lineHeight: 1.55, color: active ? "rgba(250,247,242,0.55)" : "var(--muted)", margin: 0, fontStyle: "italic" }}>
                {variantMeta[v].verdict}
              </p>
            </div>
          );
        })}
      </Grid>

      {/* Recommendation callout */}
      <div style={{ marginTop: 32, padding: "24px 28px", background: "rgba(204,122,92,0.08)", borderLeft: "2px solid var(--terracotta)", borderRadius: 4 }}>
        <div style={{ fontSize: 11, color: "var(--terracotta)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 8, fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}>
          Recommendation
        </div>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--ink)", margin: 0, maxWidth: 820 }}>
          <strong style={{ fontWeight: 500 }}>Direction C — the typographic ‘o’.</strong> The other two require defending; this one doesn't. It reads as a piece of considered typography. Use the toggle above to compare; switching also updates every wordmark in this document.
        </p>
      </div>

      {/* Lockups */}
      <div style={{ marginTop: 96, marginBottom: 24, fontSize: 11, color: "var(--muted)", letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" }}>
        Lockups
      </div>
      <Grid cols={4} gap={16}>
        {/* Horizontal */}
        <Card style={{ background: "var(--bg-warm)", textAlign: "center", padding: "44px 16px" }}>
          <Wordmark variant={tweaks.markVariant} size={28} color="var(--ink)" markColor="var(--terracotta)" />
          <div style={lockupLabel}>Horizontal · primary</div>
        </Card>
        {/* Stacked with tagline */}
        <Card style={{ background: "var(--bg-warm)", textAlign: "center", padding: "30px 16px" }}>
          <Wordmark variant={tweaks.markVariant} size={26} color="var(--ink)" markColor="var(--terracotta)" />
          <div style={{ fontSize: 9.5, color: "var(--muted)", letterSpacing: "0.14em", textTransform: "uppercase", marginTop: 8, fontFamily: "Inter, sans-serif" }}>
            For specialist agencies
          </div>
          <div style={lockupLabel}>Stacked with descriptor</div>
        </Card>
        {/* Monogram */}
        <Card style={{ background: "var(--bg-warm)", textAlign: "center", padding: "30px 16px" }}>
          <Monogram variant={tweaks.markVariant} size={48} color="var(--surface)" bg="var(--ink)" radius={10} />
          <div style={lockupLabel}>App icon</div>
        </Card>
        {/* Reversed */}
        <Card style={{ background: "var(--ink)", textAlign: "center", padding: "44px 16px", border: "1px solid var(--ink)" }}>
          <Wordmark variant={tweaks.markVariant} size={28} color="var(--surface)" markColor="var(--terracotta)" />
          <div style={{ ...lockupLabel, color: "rgba(250,247,242,0.5)" }}>Reversed</div>
        </Card>
      </Grid>

      {/* Mark in isolation, sizes */}
      <div style={{ marginTop: 64, marginBottom: 24, fontSize: 11, color: "var(--muted)", letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" }}>
        Mark in isolation — favicon to billboard
      </div>
      <Card padded={false} style={{ background: "var(--bg-warm)", padding: "48px 32px", display: "flex", alignItems: "flex-end", justifyContent: "space-around", gap: 32 }}>
        {[16, 24, 40, 64, 96, 144].map(s => (
          <div key={s} style={{ textAlign: "center" }}>
            <Monogram variant={tweaks.markVariant} size={s} color="var(--surface)" bg="var(--ink)" radius={Math.max(3, s * 0.16)} />
            <div style={{ marginTop: 12, fontSize: 10, color: "var(--muted)", fontFamily: "'JetBrains Mono', monospace" }}>{s}px</div>
          </div>
        ))}
      </Card>

      {/* Partner badge */}
      <div style={{ marginTop: 64, marginBottom: 24, fontSize: 11, color: "var(--muted)", letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" }}>
        Partner badge — for agencies who opt in to attribution
      </div>
      <Grid cols={2} gap={16}>
        <Card style={{ background: "var(--bg-warm)", padding: "44px 32px", display: "flex", justifyContent: "center" }}>
          <window.PartnerBadge variant={tweaks.markVariant} theme="light" tokens={window.__tokens} />
        </Card>
        <Card style={{ background: "var(--ink)", padding: "44px 32px", display: "flex", justifyContent: "center", border: "1px solid var(--ink)" }}>
          <window.PartnerBadge variant={tweaks.markVariant} theme="dark" tokens={window.__tokens} />
        </Card>
      </Grid>

      {/* Don'ts */}
      <div style={{ marginTop: 80, marginBottom: 24, fontSize: 11, color: "var(--muted)", letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" }}>
        Don't
      </div>
      <Grid cols={4} gap={16}>
        {[
          { label: "Don't stretch", render: () => <div style={{ transform: "scaleX(1.4)" }}><Wordmark variant={tweaks.markVariant} size={24} color="var(--ink)" markColor="var(--terracotta)" /></div> },
          { label: "Don't recolor the wordmark", render: () => <Wordmark variant={tweaks.markVariant} size={24} color="var(--terracotta)" markColor="var(--terracotta)" /> },
          { label: "Don't add effects", render: () => <div style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.4))" }}><Wordmark variant={tweaks.markVariant} size={24} color="var(--ink)" markColor="var(--terracotta)" /></div> },
          { label: "Don't tagline-lockup small", render: () => <div><Wordmark variant={tweaks.markVariant} size={14} color="var(--ink)" markColor="var(--terracotta)" /><div style={{ fontSize: 6, color: "var(--muted)", marginTop: 2 }}>Your expertise, AI speed</div></div> },
        ].map((d, i) => (
          <div key={i} style={{ background: "var(--bg-warm)", border: "1px solid var(--border)", borderRadius: 10, padding: "44px 16px", textAlign: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 12, right: 12, width: 16, height: 16, borderRadius: 999, background: "var(--terracotta)", color: "#fff", fontSize: 11, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Inter" }}>×</div>
            <div style={{ height: 48, display: "flex", alignItems: "center", justifyContent: "center" }}>{d.render()}</div>
            <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 16, fontFamily: "Inter, sans-serif" }}>{d.label}</div>
          </div>
        ))}
      </Grid>

      {/* Clear space + min size — technical block */}
      <div style={{ marginTop: 64, padding: "32px 36px", background: "var(--bg-warm)", border: "1px solid var(--border)", borderRadius: 10, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 12, fontFamily: "'JetBrains Mono', monospace" }}>Clear space</div>
          <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--ink-soft)", margin: 0 }}>
            Maintain clear space around the wordmark equal to the height of the mark itself (the bisected ‘o’). Never crowd it with chrome, photography, or competing type.
          </p>
        </div>
        <div style={{ position: "relative", padding: 32, background: "var(--surface)", borderRadius: 8, display: "flex", justifyContent: "center" }}>
          <div style={{ position: "absolute", inset: 16, border: "1px dashed var(--terracotta)", borderRadius: 4, opacity: 0.5 }} />
          <Wordmark variant={tweaks.markVariant} size={36} color="var(--ink)" markColor="var(--terracotta)" />
        </div>
      </div>
    </Section>
  );
}

const lockupLabel = { marginTop: 20, fontSize: 10, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" };

Object.assign(window, { Section, Grid, Card, Hero, Positioning, LogoSection });
