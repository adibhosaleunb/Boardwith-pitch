import { ShieldCheck } from 'lucide-react';
import { useDeck } from '../lib/DeckContext.js';
import { Tag } from './EvidenceTag.jsx';
import { FamilyFigure, StudentFigure } from './People.jsx';
import styles from './CommunityLoop.module.css';

// Travellers (teal) and students flying home (orange, as in the logo) both
// feed the match;
// a dashed arrow curves back to each side for the repeat business. Channels
// sit in one line under the loop.
export default function CommunityLoop({ loop }) {
  const { mode } = useDeck();
  const { families, students, match, arrows, channels, studentChannels } = loop;
  const reading = mode === 'reading';

  return (
    <figure className={styles.loop}>
      {!reading && (
        <svg className={styles.svg} width="1100" height="320" viewBox="0 0 1100 320" aria-hidden="true">
          <defs>
            <marker id="bw-arrow-teal" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" fill="var(--bw-teal-700)" />
            </marker>
            <marker id="bw-arrow-ink" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" fill="var(--bw-teal-900)" />
            </marker>
          </defs>
          {/* both sides feed the match */}
          <line x1="244" y1="194" x2="478" y2="194" stroke="var(--bw-teal-700)" strokeWidth="3" markerEnd="url(#bw-arrow-teal)" />
          <line x1="856" y1="194" x2="622" y2="194" stroke="var(--bw-teal-900)" strokeWidth="3" markerEnd="url(#bw-arrow-ink)" />
          {/* and each comes back */}
          <path d="M520 134 C 450 76, 250 70, 158 100" fill="none" stroke="var(--bw-teal-700)" strokeWidth="3" strokeDasharray="12 9" markerEnd="url(#bw-arrow-teal)" />
          <path d="M580 134 C 650 76, 850 70, 942 100" fill="none" stroke="var(--bw-teal-900)" strokeWidth="3" strokeDasharray="12 9" markerEnd="url(#bw-arrow-ink)" />
        </svg>
      )}

      <p className={`${styles.arc} ${styles.arcLeft}`}>{arrows.families}</p>
      <p className={`${styles.arc} ${styles.arcRight}`}>{arrows.students}</p>

      {!reading && <FamilyFigure size={220} className={`${styles.figure} ${styles.figLeft}`} />}
      {!reading && <StudentFigure size={220} className={`${styles.figure} ${styles.figRight}`} />}

      <div className={`${styles.node} ${styles.families}`}>
        <p className={styles.title}>
          {reading && <span className={styles.dot} aria-hidden="true" />}
          {families.title}
        </p>
        <p className={styles.text}>{families.text}</p>
      </div>

      <div className={`${styles.node} ${styles.match}`}>
        <span className={styles.ring} aria-hidden="true">
          <ShieldCheck size={52} strokeWidth={2} />
        </span>
        <p className={styles.title}>{match.title}</p>
        <p className={styles.text}>{match.text}</p>
      </div>

      <div className={`${styles.node} ${styles.students}`}>
        <p className={styles.title}>
          {reading && <span className={`${styles.dot} ${styles.dotOrange}`} aria-hidden="true" />}
          {students.title}
        </p>
        <p className={styles.text}>{students.text}</p>
      </div>

      <p className={styles.channels}>
        <span className={styles.channelsLabel}>Channels:</span> {channels.join(' · ')}
        {studentChannels ? (
          <>
            {' · '}
            <span className={styles.channelsLabel}>{studentChannels.label}</span> {studentChannels.text} <Tag tag={studentChannels.tag} />
          </>
        ) : null}
      </p>
    </figure>
  );
}
