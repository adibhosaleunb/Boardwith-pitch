import SafeImage from './SafeImage.jsx';
import styles from './WindowFrame.module.css';

// The aircraft-window frame from the logo icon: large on the cover (on teal),
// small around the team photos on slide 8 (on white).
export default function WindowFrame({ image, eager = true, size = 'cover', fallback }) {
  const small = size === 'small';
  return (
    <figure className={`${styles.frame} ${small ? styles.small : ''}`}>
      <div className={styles.inner}>
        <div className={styles.glass}>
          <SafeImage
            src={image.src}
            alt={image.alt}
            eager={eager}
            className={styles.photo}
            style={{ objectPosition: image.position }}
            fallback={fallback}
          />
          {!small && (
            <span className={styles.blind} aria-hidden="true">
              <span className={styles.tab} />
            </span>
          )}
        </div>
      </div>
    </figure>
  );
}
