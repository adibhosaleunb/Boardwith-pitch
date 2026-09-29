// A small route drawing: origin and destination as filled dots, each
// connection as a hollow dot on the line (slide 5's price tiers).
export default function RouteGlyph({ stops = 0, width = 104, className = '' }) {
  const h = 24;
  const a = 8;
  const b = width - 8;
  const mids = Array.from({ length: stops }, (_, i) => a + ((i + 1) * (b - a)) / (stops + 1));
  return (
    <svg className={className} width={width} height={h} viewBox={`0 0 ${width} ${h}`} aria-hidden="true">
      <line x1={a} y1={h / 2} x2={b} y2={h / 2} stroke="var(--bw-teal-500)" strokeWidth="3" strokeLinecap="round" />
      <circle cx={a} cy={h / 2} r="6" fill="var(--bw-teal-700)" />
      <circle cx={b} cy={h / 2} r="6" fill="var(--bw-teal-700)" />
      {mids.map((x) => (
        <circle key={x} cx={x} cy={h / 2} r="6" fill="var(--bw-paper)" stroke="var(--bw-teal-700)" strokeWidth="3" />
      ))}
    </svg>
  );
}
