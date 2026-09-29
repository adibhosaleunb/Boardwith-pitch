import styles from './Placeholder.module.css';

// Wraps [FOUNDER INPUT: …] text so it can never slip into a live pitch unnoticed.
export default function Placeholder({ children }) {
  return (
    <span className={styles.placeholder} data-placeholder="">
      {children}
    </span>
  );
}
