import Rich from './Rich.jsx';
import { Tag } from './EvidenceTag.jsx';
import typo from '../styles/type.module.css';
import styles from './BigMetric.module.css';

// A big number with its label beside it (not under it), then its evidence tag.
export default function BigMetric({ value, label, tag, size = 'big', className = '' }) {
  return (
    <div className={`${styles.metric} ${styles[size]} ${className}`}>
      <span className={size === 'big' ? typo.bigNum : typo.medNum}>{value}</span>
      <p className={typo.body}>
        <Rich text={label} /> <Tag tag={tag} />
      </p>
    </div>
  );
}
