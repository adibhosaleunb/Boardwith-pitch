import { useEffect, useRef, useState } from 'react';
import { images } from '../data/startupData.js';
import SafeImage from './SafeImage.jsx';
import styles from './StoryImage.module.css';

// The one orchestrated moment (brief, 12.5): slides 2 and 3 share this layer,
// so advancing crossfades the grey scene into the warm one in the same frame.
// The warm scene then fills with colour; the class drops whenever slide 3 is
// left, so the reveal replays on every visit.
export function StoryLayer({ activeIndex, problemIndex, solutionIndex }) {
  const visible = activeIndex === problemIndex || activeIndex === solutionIndex;
  const showSolution = activeIndex >= solutionIndex;
  const revealing = activeIndex === solutionIndex;
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
        className={`${styles.img} ${styles.warm} ${showSolution ? styles.on : ''} ${revealing ? styles.revealing : ''}`}
        style={{ objectPosition: images.solution.position }}
      />
    </div>
  );
}

// Static version of the same frame for print, thumbnails and reading mode.
// `reveal` (reading mode) holds the scene black and white until half of it
// has scrolled into view, then fills it with colour once.
export default function StoryImage({ image, reveal = false }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!reveal) return undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio < 0.5) return;
        setInView(true);
        io.disconnect();
      },
      { threshold: 0.5 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [reveal]);

  const warm = reveal ? `${styles.warm} ${inView ? styles.revealing : styles.waiting}` : '';
  return (
    <div ref={ref} className={styles.inline}>
      <SafeImage
        src={image.src}
        alt={image.alt}
        eager
        className={`${styles.img} ${styles.on} ${warm}`}
        style={{ objectPosition: image.position }}
      />
    </div>
  );
}
