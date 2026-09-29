import { useEffect, useState } from 'react';
import { useDeck } from '../lib/DeckContext.js';
import styles from './ProjectionChart.module.css';


// Three bars only, drawn as projections (dashed outline, light hatch).
// Bars grow from the baseline once, on first visit.
export default function ProjectionChart({ years, title, showCompanions = true, barHeight = 300, active = true }) {
  const { mode } = useDeck();
  const [grown, setGrown] = useState(mode !== 'stage');

  useEffect(() => {
    if (active && !grown) {
      const id = requestAnimationFrame(() => setGrown(true));
      return () => cancelAnimationFrame(id);
    }
  }, [active, grown]);

  const max = Math.max(...years.map((y) => y.journeys));
  const maxBar = mode === 'reading' ? 140 : barHeight;

  return (
    <figure className={styles.chart}>
      {title ? <figcaption className={styles.title}>{title}</figcaption> : null}
      <div className={styles.plot}>
        {years.map((y, i) => {
          const h = Math.max(mode === 'reading' ? 6 : 10, (y.journeys / max) * maxBar);
          return (
            <div key={y.year} className={styles.col}>
              <p className={styles.value}>{y.display}</p>
              <div
                className={`${styles.bar} ${grown ? styles.grown : ''}`}
                style={{ height: h, transitionDelay: `${i * 100}ms` }}
                aria-hidden="true"
              />
            </div>
          );
        })}
      </div>
      <div className={styles.labels}>
        {years.map((y) => (
          <div key={y.year} className={styles.col}>
            <p className={styles.year}>{y.year}</p>
            <p className={styles.where}>{y.where}</p>
            <p className={styles.meta}>{y.revenue}</p>
            {showCompanions && y.companions ? <p className={styles.meta}>{y.companions}</p> : null}
          </div>
        ))}
      </div>
    </figure>
  );
}
