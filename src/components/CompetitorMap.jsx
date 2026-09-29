import { useDeck } from '../lib/DeckContext.js';
import styles from './CompetitorMap.module.css';

const W = 1180;
const H = 640;
// plot area inside the figure (room for axis labels)
const PLOT = { left: 40, right: 1160, top: 56, bottom: 580 };

const px = (x) => PLOT.left + x * (PLOT.right - PLOT.left);
const py = (y) => PLOT.bottom - y * (PLOT.bottom - PLOT.top);

// 2 × 2: x = how long help stays, y = who's with them. Boardwith's marker is
// dashed and hollow because it is planned, not proven.
export default function CompetitorMap({ axes, options, boardwith }) {
  const { mode } = useDeck();

  if (mode === 'reading') {
    return (
      <ul className={styles.list}>
        {options.map((o) => (
          <li key={o.name}>
            <strong>{o.name}</strong> {o.text}
          </li>
        ))}
        <li className={styles.listBw}>
          <strong>{boardwith.name}</strong> {boardwith.text}
        </li>
      </ul>
    );
  }

  return (
    <figure className={styles.map} style={{ width: W, height: H }}>
      <svg className={styles.svg} width={W} height={H} viewBox={`0 0 ${W} ${H}`} aria-hidden="true">
        <defs>
          <marker id="bw-axis" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0,0 L10,5 L0,10 z" fill="var(--bw-grey-600)" />
          </marker>
        </defs>
        {/* quadrant dividers */}
        <line x1={px(0.5)} y1={PLOT.top} x2={px(0.5)} y2={PLOT.bottom} stroke="var(--bw-grey-300)" strokeWidth="1.5" strokeDasharray="6 8" />
        <line x1={PLOT.left} y1={py(0.5)} x2={PLOT.right} y2={py(0.5)} stroke="var(--bw-grey-300)" strokeWidth="1.5" strokeDasharray="6 8" />
        {/* axes */}
        <line x1={PLOT.left} y1={PLOT.bottom} x2={PLOT.right + 8} y2={PLOT.bottom} stroke="var(--bw-grey-600)" strokeWidth="2" markerEnd="url(#bw-axis)" />
        <line x1={PLOT.left} y1={PLOT.bottom} x2={PLOT.left} y2={PLOT.top - 20} stroke="var(--bw-grey-600)" strokeWidth="2" markerEnd="url(#bw-axis)" />
        {options.map((o) => (
          <circle key={o.name} cx={px(o.x)} cy={py(o.y)} r="12" fill="var(--bw-teal-700)" />
        ))}
        <circle cx={px(boardwith.x)} cy={py(boardwith.y)} r="16" fill="var(--bw-paper)" stroke="var(--bw-orange-400)" strokeWidth="5" strokeDasharray="7 5" />
      </svg>

      <p className={styles.yTitle}>
        <strong>{axes.y.title}</strong> {axes.y.to}
      </p>
      <p className={styles.yFrom}>{axes.y.from}</p>
      <p className={styles.xFrom}>
        <strong>{axes.x.title}</strong> {axes.x.from}
      </p>
      <p className={styles.xTo}>{axes.x.to}</p>

      {options.map((o) => (
        <DotLabel key={o.name} item={o} />
      ))}
      <DotLabel item={{ ...boardwith, align: 'right' }} boardwith />

      <figcaption className="sr-only">
        {options.map((o) => `${o.name}: ${o.text}`).join(' ')} {boardwith.name}: {boardwith.text}
      </figcaption>
    </figure>
  );
}

function DotLabel({ item, boardwith = false }) {
  const right = item.align === 'right';
  const style = right
    ? { right: W - px(item.x) + 28, top: py(item.y) - (boardwith ? 21 : 19) }
    : { left: px(item.x) + 28, top: py(item.y) - 19 };
  return (
    <div className={`${styles.label} ${right ? styles.alignRight : ''}`} style={style} aria-hidden="true">
      <p className={boardwith ? styles.bwName : styles.name}>{item.name}</p>
      <p className={styles.text}>{item.text}</p>
    </div>
  );
}
