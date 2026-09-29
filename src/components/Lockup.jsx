import { images, company } from '../data/startupData.js';
import SafeImage from './SafeImage.jsx';
import styles from './Lockup.module.css';

// Logo lockup: teal backgrounds only (the wordmark is white).
export default function Lockup({ width = 440, eager = true }) {
  const height = Math.round((width * images.lockup.height) / images.lockup.width);
  return (
    <SafeImage
      src={images.lockup.src}
      alt={images.lockup.alt}
      eager={eager}
      className={styles.lockup}
      style={{ width, height }}
      fallback={
        <span className={styles.wordmark} style={{ fontSize: height * 0.62, height }} role="img" aria-label={company.name}>
          {company.name}
        </span>
      }
    />
  );
}
