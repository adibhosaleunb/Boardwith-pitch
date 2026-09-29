import { useDeck } from '../lib/DeckContext.js';
import styles from './PriceBar.module.css';

const WIDTH = 1680;
// label anchors (x) for the two cost labels, which sit right-aligned in a row
const CARD_ANCHOR = 1550;
const CHECKS_ANCHOR = 1300;

// One horizontal stacked bar with direct labels. Companion teal-500, costs
// grey-300, Boardwith's share orange-400 (the slide's one orange element).
export default function PriceBar({ total, segments, caption }) {
  const { mode } = useDeck();

  if (mode === 'reading') {
    return (
      <div className={styles.list}>
        <p className={styles.listCaption}>{caption}</p>
        <ul>
          {segments.map((seg) => (
            <li key={seg.key}>
              <span className={`${styles.swatch} ${styles[seg.tone]}`} aria-hidden="true" />
              <span>
                {seg.label} <strong>{seg.display}</strong>
                {seg.note ? <span className={styles.note}> ({seg.note})</span> : null}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  let x = 0;
  const placed = segments.map((seg) => {
    const w = (seg.value / total) * WIDTH;
    const item = { ...seg, x, w, mid: x + w / 2 };
    x += w;
    return item;
  });
  const [companion, checks, card, kept] = placed;

  return (
    <figure className={styles.figure}>
      <figcaption className={styles.caption}>{caption}</figcaption>
      <div className={styles.above} aria-hidden="true">
        <span className={styles.label} style={{ left: 0 }}>
          {companion.label} <strong className="num">{companion.display}</strong>
        </span>
        <span className={`${styles.label} ${styles.right}`} style={{ right: 0 }}>
          {kept.label} <strong className="num">{kept.display}</strong>
        </span>
      </div>
      <div className={styles.bar} role="img" aria-label={segments.map((seg) => `${seg.label} ${seg.display}`).join(', ')}>
        {placed.map((seg) => (
          <span key={seg.key} className={`${styles.seg} ${styles[seg.tone]}`} style={{ width: seg.w }} />
        ))}
      </div>
      <div className={styles.below} aria-hidden="true">
        {/* leader lines from each cost segment to its label below */}
        <svg className={styles.leaders} width={WIDTH} height="26" viewBox={`0 0 ${WIDTH} 26`}>
          <polyline points={`${checks.mid},0 ${checks.mid},8 ${CHECKS_ANCHOR},24`} />
          <polyline points={`${card.mid},0 ${card.mid},8 ${CARD_ANCHOR},24`} />
        </svg>
        <div className={styles.costs}>
          {[checks, card].map((seg) => (
            <span key={seg.key} className={styles.costItem}>
              {seg.label} <strong className="num">{seg.display}</strong>
              {seg.note ? <span className={styles.note}>{seg.note}</span> : null}
            </span>
          ))}
        </div>
      </div>
    </figure>
  );
}
