import { Check, ShieldCheck, Languages, UserRound } from 'lucide-react';
import EvidenceTag from './EvidenceTag.jsx';
import styles from './PhoneScreen.module.css';

// Concept screens for slide 4 (brief, 12.6). Sample data only: no real
// airlines, people, ratings or logos.

function Chips() {
  return (
    <div className={styles.chips}>
      <span className={styles.chip} lang="hi">हिंदी <span lang="en">Hindi</span></span>
      <span className={styles.chip} lang="mr">मराठी <span lang="en">Marathi</span></span>
    </div>
  );
}

function Avatar() {
  return (
    <span className={styles.avatar} aria-hidden="true">
      <UserRound size={34} strokeWidth={2} />
    </span>
  );
}

function AddFlights() {
  return (
    <>
      <p className={styles.h}>Your mother’s trip</p>
      <div className={styles.flight}>DEL → YYZ, 14 Dec</div>
      <div className={styles.flight}>YYZ → YFC, 14 Dec</div>
      <p className={styles.label}>
        <Languages size={14} strokeWidth={2} aria-hidden="true" /> Language
      </p>
      <Chips />
      <div className={styles.toggleRow}>
        <span>Prefers a woman companion</span>
        <span className={styles.toggle} aria-hidden="true" />
      </div>
      <span className={styles.button}>Find a companion</span>
    </>
  );
}

function Checked() {
  const rows = ['ID and selfie: verified', 'Criminal record: clear', 'Indian police clearance: received'];
  return (
    <>
      <div className={styles.centre}>
        <Avatar />
        <p className={styles.h}>Companion</p>
      </div>
      <ul className={styles.checks}>
        {rows.map((r) => (
          <li key={r}>
            <span className={styles.tick} aria-hidden="true">
              <Check size={13} strokeWidth={3} />
            </span>
            {r}
          </li>
        ))}
      </ul>
    </>
  );
}

function Matched() {
  return (
    <>
      <div className={styles.route} aria-label="Route DEL to YYZ to YFC, both legs matched">
        <span className={styles.stop}>DEL</span>
        <span className={styles.leg} />
        <span className={styles.stop}>YYZ</span>
        <span className={styles.leg} />
        <span className={styles.stop}>YFC</span>
      </div>
      <p className={styles.h}>Same flights, both legs</p>
      <Chips />
      <p className={styles.line}>
        <ShieldCheck size={14} strokeWidth={2} aria-hidden="true" /> All checks complete
      </p>
      <p className={styles.line}>Trust record: first trip</p>
      <div className={styles.buttons}>
        <span className={styles.ghost}>Say hello</span>
        <span className={styles.button}>Confirm match</span>
      </div>
    </>
  );
}

function Together() {
  const events = [
    ['06:10', 'Departed Delhi'],
    ['12:05', 'Landed in Toronto'],
    ['13:20', 'Through immigration'],
    ['14:15', 'At the gate for Fredericton'],
  ];
  return (
    <>
      <div className={styles.planned}>
        <EvidenceTag kind="projection" text="Planned" className={styles.smallTag} />
      </div>
      <p className={styles.h}>Today’s trip</p>
      <ol className={styles.timeline}>
        {events.map(([t, e]) => (
          <li key={e}>
            <span className={styles.time}>{t}</span>
            <span>{e}</span>
          </li>
        ))}
      </ol>
    </>
  );
}

const SCREENS = [AddFlights, Checked, Matched, Together];

export default function PhoneScreen({ index }) {
  const Screen = SCREENS[index];
  return (
    <div className={styles.phone} aria-hidden="true" data-phone="">
      <div className={styles.content}>
        <Screen />
      </div>
      <p className={styles.sample}>Sample data</p>
    </div>
  );
}
