// marks.jsx — Three logo mark candidates for LoreTrip
// Each mark is designed to drop into the "o" of "Lore" in the wordmark.
// Marks are stroke-based so they scale; pass `color` and `size`.

// ── Mark A: Abstracted compass ────────────────────────────────────────────
// Reduced to a four-pointed asterisk inside an unclosed ring — reads as
// orientation/wayfinding without the literal compass-rose tropes.
function MarkCompass({ size = 32, color = "currentColor", strokeWidth = 1.5 }) {
  const s = size;
  const c = s / 2;
  const r = s * 0.42;
  return (
    <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} fill="none" aria-hidden="true">
      {/* unclosed ring — gap at top-right */}
      <path
        d={`M ${c + r * Math.cos(-Math.PI / 6)} ${c + r * Math.sin(-Math.PI / 6)}
            A ${r} ${r} 0 1 0 ${c + r * Math.cos(-Math.PI / 3)} ${c + r * Math.sin(-Math.PI / 3)}`}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* asymmetric cross — N tick longer than others */}
      <line x1={c} y1={c - r * 0.95} x2={c} y2={c + r * 0.55} stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1={c - r * 0.65} y1={c} x2={c + r * 0.65} y2={c} stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* center dot */}
      <circle cx={c} cy={c} r={strokeWidth * 0.9} fill={color} />
    </svg>
  );
}

// ── Mark B: Route-pin / waypoint ──────────────────────────────────────────
// Two waypoints connected by a curved path — implies a curated route, not a
// pin-on-a-map. The curve is the storytelling.
function MarkRoute({ size = 32, color = "currentColor", strokeWidth = 1.5 }) {
  const s = size;
  return (
    <svg width={s} height={s} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      {/* curved path between waypoints */}
      <path
        d="M 8 10 Q 20 10 20 16 Q 20 22 14 22"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="none"
      />
      {/* waypoint A — outline */}
      <circle cx="8" cy="10" r="2.4" stroke={color} strokeWidth={strokeWidth} fill="none" />
      {/* waypoint B — filled */}
      <circle cx="14" cy="22" r="2.4" fill={color} />
    </svg>
  );
}

// ── Mark C: Typographic / serif "o" with a horizontal bar ────────────────
// The "o" reimagined: a serif circle bisected by a single fine bar — the
// horizon line, the line of a written page, the rule of an editor. Nods to
// "lore" (story, knowledge) more than "trip."
function MarkSerif({ size = 32, color = "currentColor", strokeWidth = 2 }) {
  const s = size;
  const c = s / 2;
  return (
    <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} fill="none" aria-hidden="true">
      {/* outer ring with serif-weight stroke */}
      <ellipse cx={c} cy={c} rx={s * 0.38} ry={s * 0.42} stroke={color} strokeWidth={strokeWidth} fill="none" />
      {/* the bar — slightly extending beyond the ring */}
      <line x1={c - s * 0.46} y1={c} x2={c + s * 0.46} y2={c} stroke={color} strokeWidth={strokeWidth * 0.55} strokeLinecap="square" />
    </svg>
  );
}

// ── Wordmark: "LoreTrip" with the chosen mark replacing the "o" in Lore ──
// Renders Playfair Display "L", custom mark, "reTrip". The mark sits on the
// x-height of the lowercase letters.
function Wordmark({
  variant = "serif",       // 'compass' | 'route' | 'serif'
  size = 56,               // total height in px (drives type size)
  color = "currentColor",
  markColor = null,        // defaults to color; pass terracotta for accent
}) {
  const Mark =
    variant === "compass" ? MarkCompass :
    variant === "route"   ? MarkRoute   :
                            MarkSerif;
  // The mark sits inside the wordmark; its visual height should match the
  // x-height of the lowercase letters (~ 0.50 of cap height for Playfair).
  const fontPx = size;
  const markPx = Math.round(fontPx * 0.52);
  const mc = markColor || color;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "baseline",
        fontFamily: "'Playfair Display', Georgia, serif",
        fontWeight: 500,
        fontSize: fontPx,
        lineHeight: 1,
        letterSpacing: "-0.01em",
        color,
        whiteSpace: "nowrap",
      }}
    >
      <span>L</span>
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: markPx * 1.05,
          height: markPx,
          // align the mark roughly with the x-height of "ore"
          transform: `translateY(${-markPx * 0.02}px)`,
          margin: `0 ${fontPx * 0.015}px`,
        }}
      >
        <Mark size={markPx} color={mc} strokeWidth={Math.max(1.25, markPx * 0.06)} />
      </span>
      <span>reTrip</span>
      <sup
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: Math.max(8, fontPx * 0.18),
          fontWeight: 500,
          letterSpacing: "0.02em",
          marginLeft: fontPx * 0.04,
          color: mc,
          alignSelf: "flex-start",
          // sit just above the cap height
          transform: `translateY(${-fontPx * 0.05}px)`,
          lineHeight: 1,
        }}
      >TM</sup>
    </span>
  );
}

// ── Monogram (icon mark in isolation) — square padded container ──────────
function Monogram({ variant = "serif", size = 64, color = "#fff", bg = "#1F2D26", radius = 12 }) {
  const Mark =
    variant === "compass" ? MarkCompass :
    variant === "route"   ? MarkRoute   :
                            MarkSerif;
  return (
    <div
      style={{
        width: size,
        height: size,
        background: bg,
        borderRadius: radius,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <Mark size={size * 0.56} color={color} strokeWidth={Math.max(1.4, size * 0.035)} />
    </div>
  );
}

Object.assign(window, { MarkCompass, MarkRoute, MarkSerif, Wordmark, Monogram });
