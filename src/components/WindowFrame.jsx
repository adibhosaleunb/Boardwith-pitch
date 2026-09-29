import SafeImage from './SafeImage.jsx';
import styles from './WindowFrame.module.css';

// The aircraft-window frame from the logo icon, used on the cover only.
export default function WindowFrame({ image, eager = true }) {
  return (
    <figure className={styles.frame}>
      <div className={styles.inner}>
        <div className={styles.glass}>
          <SafeImage
            src={image.src}
            alt={image.alt}
            eager={eager}
            className={styles.photo}
            style={{ objectPosition: image.position }}
          />
          <span className={styles.blind} aria-hidden="true">
            <span className={styles.tab} />
          </span>
        </div>
      </div>
    </figure>
  );
}
