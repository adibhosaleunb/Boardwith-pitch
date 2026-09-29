import PhoneScreen from './PhoneScreen.jsx';
import EvidenceTag from './EvidenceTag.jsx';
import styles from './Journey.module.css';

// Four steps joined by a route line; the numbers belong here because this
// is a real sequence.
export default function Journey({ steps }) {
  return (
    <ol className={styles.journey}>
      {steps.map((step, i) => (
        <li key={step.title} className={styles.step}>
          <div className={styles.rail}>
            <span className={styles.num} aria-hidden="true">
              {i + 1}
            </span>
            <EvidenceTag kind="concept" />
          </div>
          <PhoneScreen index={i} />
          <p className={styles.title}>
            <span className="sr-only">Step {i + 1}: </span>
            {step.title}
          </p>
        </li>
      ))}
    </ol>
  );
}
