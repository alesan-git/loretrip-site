// dashboard.jsx — Realistic agency-context dashboard mockup for "Adriatic Sailing Co."
// Used in the brand book to show LoreTrip applied behind a real agency brand.
// The agency brand is the foreground; LoreTrip's presence is invisible UI craft.

function Dashboard({ tokens }) {
  const t = tokens;
  // Agency brand (NOT LoreTrip). The point: every agency has its own.
  const agency = {
    name: "Adriatic Sailing Co.",
    location: "Split, Croatia",
    accent: "#0F4C5C", // agency's own brand color, nothing to do with LoreTrip
    initials: "AS",
  };

  const inquiries = [
    { id: "TR-2841", traveler: "M. Hartmann", party: "2 adults", dest: "Hvar → Vis → Korčula", days: 7, status: "draft", time: "12 min ago" },
    { id: "TR-2840", traveler: "S. Kowalski", party: "Family of 4", dest: "Split → Brač → Šolta", days: 5, status: "review", time: "1h ago" },
    { id: "TR-2839", traveler: "J. Bertrand", party: "Couple", dest: "Dubrovnik → Mljet → Lastovo", days: 10, status: "sent", time: "Yesterday" },
    { id: "TR-2838", traveler: "P. Andersson", party: "6 friends", dest: "Trogir → Hvar → Pakleni", days: 4, status: "booked", time: "2d" },
  ];

  const stats = [
    { label: "Inquiries this week", value: "23", delta: "+18%" },
    { label: "Median response time", value: "14 min", delta: "−62%" },
    { label: "Conversion", value: "41%", delta: "+9 pts" },
    { label: "Affiliate revenue", value: "€4,820", delta: "+€1,210" },
  ];

  return (
    <div
      style={{
        background: t.surface,
        borderRadius: 14,
        overflow: "hidden",
        border: `1px solid ${t.border}`,
        boxShadow: "0 30px 80px -40px rgba(31,45,38,0.35), 0 8px 24px -12px rgba(31,45,38,0.18)",
        fontFamily: "Inter, system-ui, sans-serif",
        color: t.ink,
      }}
    >
      {/* Browser chrome — subtle, realistic */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", background: t.bgWarm, borderBottom: `1px solid ${t.border}` }}>
        <div style={{ display: "flex", gap: 6 }}>
          <div style={{ width: 10, height: 10, borderRadius: 999, background: "#E9C8C0" }} />
          <div style={{ width: 10, height: 10, borderRadius: 999, background: "#E8DCC0" }} />
          <div style={{ width: 10, height: 10, borderRadius: 999, background: "#C9D8C8" }} />
        </div>
        <div style={{ flex: 1, marginLeft: 16, fontSize: 11, color: t.muted, fontFamily: "'JetBrains Mono', monospace" }}>
          adriaticsailing.co/admin/inquiries
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "220px 1fr" }}>
        {/* Sidebar — fully agency-branded */}
        <aside style={{ background: t.bgWarm, borderRight: `1px solid ${t.border}`, padding: "20px 14px", minHeight: 540 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
            <div style={{
              width: 32, height: 32, borderRadius: 8,
              background: agency.accent, color: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "'Playfair Display', serif", fontSize: 14, fontWeight: 600,
            }}>{agency.initials}</div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: t.ink }}>{agency.name}</div>
              <div style={{ fontSize: 10, color: t.muted }}>{agency.location}</div>
            </div>
          </div>
          {[
            ["Inquiries", true, "23"],
            ["Itineraries", false, "—"],
            ["Travelers", false, "—"],
            ["Partners", false, "47"],
            ["Bookings", false, "—"],
            ["Analytics", false, "—"],
            ["Settings", false, "—"],
          ].map(([label, active, count]) => (
            <div
              key={label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "7px 10px",
                marginBottom: 2,
                borderRadius: 6,
                background: active ? "rgba(31,45,38,0.06)" : "transparent",
                fontSize: 12,
                color: active ? t.ink : t.muted,
                fontWeight: active ? 500 : 400,
              }}
            >
              <span>{label}</span>
              <span style={{ fontSize: 10, color: t.muted, fontVariantNumeric: "tabular-nums" }}>{count}</span>
            </div>
          ))}
        </aside>

        {/* Main content */}
        <main style={{ padding: "28px 32px", background: t.surface }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 24 }}>
            <div>
              <div style={{ fontSize: 11, color: t.muted, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 6 }}>
                Inquiries
              </div>
              <h1 style={{ margin: 0, fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 500, color: t.ink, letterSpacing: "-0.01em" }}>
                Awaiting your review
              </h1>
            </div>
            <button style={{
              background: agency.accent, color: "#fff",
              border: 0, borderRadius: 6,
              padding: "8px 14px", fontSize: 12, fontWeight: 500,
              fontFamily: "Inter, sans-serif",
              cursor: "default",
            }}>
              + New itinerary
            </button>
          </div>

          {/* Stat strip */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: t.border, border: `1px solid ${t.border}`, borderRadius: 8, marginBottom: 28 }}>
            {stats.map((s, i) => (
              <div key={i} style={{ background: t.surface, padding: "14px 16px" }}>
                <div style={{ fontSize: 10, color: t.muted, letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 6 }}>{s.label}</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 500, color: t.ink, letterSpacing: "-0.02em" }}>{s.value}</div>
                  <div style={{ fontSize: 10, color: t.terracotta, fontWeight: 500 }}>{s.delta}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Inquiry list */}
          <div style={{ border: `1px solid ${t.border}`, borderRadius: 8, overflow: "hidden" }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "100px 1fr 1.6fr 60px 90px 80px",
              padding: "10px 16px",
              background: t.bgWarm,
              borderBottom: `1px solid ${t.border}`,
              fontSize: 10,
              color: t.muted,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}>
              <span>ID</span>
              <span>Traveler</span>
              <span>Route</span>
              <span>Days</span>
              <span>Status</span>
              <span style={{ textAlign: "right" }}>Updated</span>
            </div>
            {inquiries.map((q, i) => (
              <div
                key={q.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "100px 1fr 1.6fr 60px 90px 80px",
                  padding: "12px 16px",
                  borderBottom: i < inquiries.length - 1 ? `1px solid ${t.border}` : "none",
                  fontSize: 12,
                  alignItems: "center",
                  background: i === 0 ? "rgba(204,122,92,0.04)" : "transparent",
                }}
              >
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: t.muted }}>{q.id}</span>
                <span style={{ color: t.ink }}>
                  {q.traveler}
                  <span style={{ display: "block", fontSize: 10, color: t.muted, marginTop: 2 }}>{q.party}</span>
                </span>
                <span style={{ color: t.ink }}>{q.dest}</span>
                <span style={{ color: t.ink, fontVariantNumeric: "tabular-nums" }}>{q.days}</span>
                <StatusPill status={q.status} t={t} />
                <span style={{ textAlign: "right", color: t.muted, fontSize: 11 }}>{q.time}</span>
              </div>
            ))}
          </div>

          {/* Subtle footer line — agency brand, not LoreTrip */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 18, fontSize: 10, color: t.muted }}>
            <span>Showing 4 of 23 · sorted by activity</span>
            <span style={{ fontFamily: "'JetBrains Mono', monospace" }}>v 2.4.1</span>
          </div>
        </main>
      </div>
    </div>
  );
}

function StatusPill({ status, t }) {
  const styles = {
    draft:   { bg: "rgba(204,122,92,0.12)",  fg: t.terracotta, label: "Draft"   },
    review:  { bg: "rgba(212,160,108,0.16)", fg: "#9C6B36",    label: "Review"  },
    sent:    { bg: "rgba(91,123,109,0.14)",  fg: "#3C5448",    label: "Sent"    },
    booked:  { bg: "rgba(31,45,38,0.08)",    fg: t.ink,        label: "Booked"  },
  };
  const s = styles[status];
  return (
    <span style={{
      display: "inline-flex",
      alignSelf: "flex-start",
      padding: "3px 8px",
      borderRadius: 4,
      background: s.bg,
      color: s.fg,
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: "0.02em",
    }}>{s.label}</span>
  );
}

// ── Partner badge — "Built on LoreTrip" ─────────────────────────────────────
function PartnerBadge({ variant = "serif", theme = "light", tokens }) {
  const dark = theme === "dark";
  const bg = dark ? tokens.ink : tokens.surface;
  const fg = dark ? tokens.surface : tokens.ink;
  const muted = dark ? "rgba(250,247,242,0.55)" : tokens.muted;
  const Mark =
    variant === "compass" ? window.MarkCompass :
    variant === "route"   ? window.MarkRoute   :
                            window.MarkSerif;
  return (
    <div style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: "10px 16px",
      background: bg,
      border: `1px solid ${dark ? "rgba(255,255,255,0.08)" : tokens.border}`,
      borderRadius: 8,
      fontFamily: "Inter, sans-serif",
      whiteSpace: "nowrap",
    }}>
      <Mark size={18} color={tokens.terracotta} strokeWidth={1.4} />
      <span style={{
        fontSize: 11,
        color: muted,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        fontWeight: 500,
      }}>Powered by</span>
      <span style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 16,
        fontWeight: 500,
        color: fg,
        letterSpacing: "-0.01em",
      }}>LoreTrip</span>
    </div>
  );
}

Object.assign(window, { Dashboard, PartnerBadge });
