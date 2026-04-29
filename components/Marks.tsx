type MarkProps = {
  size?: number;
  color?: string;
  strokeWidth?: number;
};

export function MarkCompass({ size = 32, color = "currentColor", strokeWidth = 1.5 }: MarkProps) {
  const c = size / 2;
  const r = size * 0.42;
  const start = {
    x: c + r * Math.cos(-Math.PI / 6),
    y: c + r * Math.sin(-Math.PI / 6),
  };
  const end = {
    x: c + r * Math.cos(-Math.PI / 3),
    y: c + r * Math.sin(-Math.PI / 3),
  };
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" aria-hidden="true">
      <path
        d={`M ${start.x} ${start.y} A ${r} ${r} 0 1 0 ${end.x} ${end.y}`}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <line x1={c} y1={c - r * 0.95} x2={c} y2={c + r * 0.55} stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1={c - r * 0.65} y1={c} x2={c + r * 0.65} y2={c} stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <circle cx={c} cy={c} r={strokeWidth * 0.9} fill={color} />
    </svg>
  );
}

type WordmarkProps = {
  size?: number;
  color?: string;
  markColor?: string;
  showTM?: boolean;
};

export function Wordmark({
  size = 28,
  color = "currentColor",
  markColor,
  showTM = true,
}: WordmarkProps) {
  const fontPx = size;
  const markPx = Math.round(fontPx * 0.62);
  const mc = markColor || color;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "baseline",
        fontFamily: "var(--font-display), Georgia, serif",
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
          width: markPx,
          height: markPx,
          margin: `0 ${fontPx * 0.02}px`,
          transform: `translateY(${-markPx * 0.04}px)`,
        }}
      >
        <MarkCompass size={markPx} color={mc} strokeWidth={Math.max(1.25, markPx * 0.08)} />
      </span>
      <span>reTrip</span>
      {showTM && (
        <sup
          style={{
            fontFamily: "var(--font-body), Inter, sans-serif",
            fontSize: Math.max(8, fontPx * 0.22),
            fontWeight: 500,
            letterSpacing: "0.02em",
            marginLeft: fontPx * 0.04,
            color: mc,
            alignSelf: "flex-start",
            transform: `translateY(${-fontPx * 0.04}px)`,
            lineHeight: 1,
          }}
        >TM</sup>
      )}
    </span>
  );
}
