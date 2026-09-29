import { ShieldCheck } from 'lucide-react';
import { useDeck } from '../lib/DeckContext.js';
import styles from './CommunityLoop.module.css';

// Two nodes feeding one centre, one curved arrow back. Families side teal,
// companion side orange (as in the logo). Channels feed the families node.
export default function CommunityLoop({ loop }) {
  const { mode } = useDeck();
  const { families, students, match, channels, arrow } = loop;

  return (
    <figure className={styles.loop}>
      {mode !== 'reading' && (
        <svg className={styles.svg} width="1080" height="560" viewBox="0 0 1080 560" aria-hidden="true">
          <defs>
            <marker id="bw-arrow-teal" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" fill="var(--bw-teal-700)" />
            </marker>
            <marker id="bw-arrow-ink" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" fill="var(--bw-teal-900)" />
            </marker>
          </defs>
          {/* feeding the centre */}
          <line x1="104" y1="206" x2="444" y2="206" stroke="var(--bw-teal-700)" strokeWidth="3" markerEnd="url(#bw-arrow-teal)" />
          <line x1="828" y1="206" x2="600" y2="206" stroke="var(--bw-teal-900)" strokeWidth="3" markerEnd="url(#bw-arrow-ink)" />
          {/* the one curved arrow back */}
          <path d="M500 136 C 420 60, 140 60, 52 148" fill="none" stroke="var(--bw-teal-700)" strokeWidth="3" strokeDasharray="12 9" markerEnd="url(#bw-arrow-teal)" />
          {/* channels feeding the families node */}
          <line x1="52" y1="468" x2="52" y2="360" stroke="var(--bw-teal-500)" strokeWidth="3" markerEnd="url(#bw-arrow-teal)" />
        </svg>
      )}

      <p className={styles.arrowLabel}>{arrow}</p>

      <div className={`${styles.node} ${styles.families}`}>
        <span className={styles.dot} aria-hidden="true" />
        <p className={styles.title}>{families.title}</p>
      </div>

      <div className={`${styles.node} ${styles.match}`}>
        <span className={styles.ring} aria-hidden="true">
          <ShieldCheck size={52} strokeWidth={2} />
        </span>
        <p className={styles.title}>{match.title}</p>
      </div>

      <div className={`${styles.node} ${styles.students}`}>
        <span className={`${styles.dot} ${styles.dotOrange}`} aria-hidden="true" />
        <p className={styles.title}>{students.title}</p>
      </div>

      <ul className={styles.channels} aria-label="Channels feeding the families node">
        {channels.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </figure>
  );
}
