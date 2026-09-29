import { images } from '../data/startupData.js';
import SafeImage from './SafeImage.jsx';
import styles from './StoryImage.module.css';

// The one orchestrated moment (brief, 12.5): slides 2 and 3 share this layer,
// so advancing crossfades the grey scene into the warm one in the same frame.
export function StoryLayer({ activeIndex, problemIndex, solutionIndex }) {
  const visible = activeIndex === problemIndex || activeIndex === solutionIndex;
  const showSolution = activeIndex >= solutionIndex;
  return (
    <div className={`${styles.layer} ${visible ? styles.visible : ''}`} aria-hidden={!visible}>
      <SafeImage
        src={images.problem.src}
        alt={visible && !showSolution ? images.problem.alt : ''}
        eager
        className={`${styles.img} ${showSolution ? '' : styles.on}`}
        style={{ objectPosition: images.problem.position }}
      />
      <SafeImage
        src={images.solution.src}
        alt={visible && showSolution ? images.solution.alt : ''}
        eager
        className={`${styles.img} ${showSolution ? styles.on : ''}`}
        style={{ objectPosition: images.solution.position }}
      />
    </div>
  );
}

// Static version of the same frame for print, thumbnails and reading mode.
export default function StoryImage({ image }) {
  return (
    <div className={styles.inline}>
      <SafeImage
        src={image.src}
        alt={image.alt}
        eager
        className={`${styles.img} ${styles.on}`}
        style={{ objectPosition: image.position }}
      />
    </div>
  );
}
