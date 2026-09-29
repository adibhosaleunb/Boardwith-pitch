import styles from './EvidenceTag.module.css';

const LABELS = {
  evidence: 'Evidence',
  estimate: 'Estimate',
  assumption: 'Assumption',
  projection: 'Projection',
  concept: 'Concept',
  plan: 'Plan',
};

// Small pill that labels the number before it (brief, section 11.7).
export default function EvidenceTag({ kind, qualifier, text, className = '' }) {
  const label = text ?? LABELS[kind];
  return (
    <span className={`${styles.tag} ${styles[kind]} ${className}`}>
      {label}
      {qualifier && !text ? <span className={styles.qualifier}>: {qualifier}</span> : null}
    </span>
  );
}

// Convenience for data objects shaped { kind, qualifier, text }.
export function Tag({ tag, className }) {
  if (!tag) return null;
  return <EvidenceTag {...tag} className={className} />;
}
