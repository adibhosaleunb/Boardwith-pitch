import { ShieldCheck } from 'lucide-react';
import { useDeck } from '../lib/DeckContext.js';
import styles from './CommunityLoop.module.css';

// Two nodes feeding one centre, with the repeat and referral arrows curving
// back. Families side teal, companion side orange (as in the logo).
export default function CommunityLoop({ loop }) {
  const { mode } = useDeck();
  const { families, students, match, arrows } = loop;

  return (
    <figure className={styles.loop}>
      {mode !== 'reading' && (
        <svg className={styles.svg} width="1000" height="260" viewBox="0 0 1000 260" aria-hidden="true">
          <defs>
            <marker id="bw-arrow-teal" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" fill="var(--bw-teal-700)" />
            </marker>
            <marker id="bw-arrow-ink" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" fill="var(--bw-teal-900)" />
            </marker>
          </defs>
          {/* feeding in */}
          <line x1="206" y1="176" x2="462" y2="176" stroke="var(--bw-teal-700)" strokeWidth="3" markerEnd="url(#bw-arrow-teal)" />
          <line x1="752" y1="176" x2="582" y2="176" stroke="var(--bw-teal-900)" strokeWidth="3" markerEnd="url(#bw-arrow-ink)" />
          {/* curving back */}
          <path d="M500 126 C 420 92, 110 92, 26 142" fill="none" stroke="var(--bw-teal-700)" strokeWidth="2.5" strokeDasharray="10 8" markerEnd="url(#bw-arrow-teal)" />
          <path d="M546 126 C 610 92, 720 92, 778 142" fill="none" stroke="var(--bw-teal-900)" strokeWidth="2.5" strokeDasharray="10 8" markerEnd="url(#bw-arrow-ink)" />
        </svg>
      )}

      <figcaption className={`${styles.arc} ${styles.arcLeft}`}>{arrows.repeat}</figcaption>
      <p className={`${styles.arc} ${styles.arcRight}`}>{arrows.escort}</p>

      <div className={`${styles.node} ${styles.families}`}>
        <p className={styles.title}>
          <span className={styles.dot} aria-hidden="true" />
          {families.title}
        </p>
        <p className={styles.text}>{families.text}</p>
        <p className={styles.refer}>
          <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
            <path d="M22 8 A10 10 0 1 0 25 16" fill="none" stroke="var(--bw-teal-700)" strokeWidth="2.5" />
            <path d="M18 3 L23 8 L17 11" fill="none" stroke="var(--bw-teal-700)" strokeWidth="2.5" />
          </svg>
          {arrows.refer}
        </p>
      </div>

      <div className={`${styles.node} ${styles.match}`}>
        <span className={styles.ring} aria-hidden="true">
          <ShieldCheck size={44} strokeWidth={2} />
        </span>
        <p className={styles.title}>{match.title}</p>
        <p className={styles.text}>{match.text}</p>
      </div>

      <div className={`${styles.node} ${styles.students}`}>
        <p className={styles.title}>
          <span className={`${styles.dot} ${styles.dotOrange}`} aria-hidden="true" />
          {students.title}
        </p>
        <p className={styles.text}>{students.text}</p>
      </div>
    </figure>
  );
}
