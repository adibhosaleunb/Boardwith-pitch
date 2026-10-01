import { useEffect, useState } from 'react';
import { useDeck } from '../lib/DeckContext.js';
import styles from './ProjectionChart.module.css';


// Three bars only, drawn as projections (dashed outline, light hatch). Each
// bar stacks parents (base, standard hatch) and students (top, lighter and
// sparser hatch); the two segments are named on the last bar only.
// Bars grow from the baseline once, on first visit.
export default function ProjectionChart({ years, title, segmentLabels, showCompanions = true, barHeight = 300, active = true }) {
  const { mode } = useDeck();
  const [grown, setGrown] = useState(mode !== 'stage');

  useEffect(() => {
    if (active && !grown) {
      const id = requestAnimationFrame(() => setGrown(true));
      return () => cancelAnimationFrame(id);
    }
  }, [active, grown]);

  const total = (y) => y.parents + y.students;
  const max = Math.max(...years.map(total));
  const maxBar = mode === 'reading' ? 140 : barHeight;
  const last = years.length - 1;

  return (
    <figure className={styles.chart}>
      {title ? <figcaption className={styles.title}>{title}</figcaption> : null}
      <div className={styles.plot}>
        {years.map((y, i) => {
          const h = Math.max(mode === 'reading' ? 6 : 10, (total(y) / max) * maxBar);
          const studentShare = y.students / total(y);
          const named = i === last && segmentLabels;
          return (
            <div key={y.year} className={styles.col}>
              <p className={styles.value}>{y.display}</p>
              <div
                className={`${styles.bar} ${grown ? styles.grown : ''}`}
                style={{ height: h, transitionDelay: `${i * 100}ms` }}
                aria-hidden={named ? undefined : 'true'}
              >
                <div className={`${styles.segment} ${styles.students}`} style={{ flexBasis: `${studentShare * 100}%` }}>
                  {named ? <span className={styles.segLabel}>{segmentLabels.students}</span> : null}
                </div>
                <div className={`${styles.segment} ${styles.parents}`}>
                  {named ? <span className={styles.segLabel}>{segmentLabels.parents}</span> : null}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.labels}>
        {years.map((y) => (
          <div key={y.year} className={styles.col}>
            <p className={styles.year}>{y.year}</p>
            <p className={styles.where}>{y.where}</p>
            <p className="sr-only">
              {y.parents.toLocaleString('en-CA')} parent and {y.students.toLocaleString('en-CA')} student journeys
            </p>
            {y.pace ? <p className={styles.meta}>{y.pace}</p> : null}
            <p className={styles.meta}>{y.revenue}</p>
            {showCompanions && y.companions ? <p className={styles.meta}>{y.companions}</p> : null}
          </div>
        ))}
      </div>
    </figure>
  );
}
