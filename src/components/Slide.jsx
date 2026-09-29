import { useDeck } from '../lib/DeckContext.js';
import styles from './Slide.module.css';

// Section wrapper: canvas geometry, a11y labelling and the crossfade.
export default function Slide({ slide, total = 10, active = true, theme, className = '', children }) {
  const { mode } = useDeck();
  const isBackup = typeof slide.number !== 'number';
  const label = isBackup ? `${slide.number}: ${slide.title}` : `${slide.number} of ${total}: ${slide.title}`;
  const hidden = mode === 'stage' && !active;

  return (
    <section
      className={[
        styles.slide,
        styles[mode],
        active ? styles.active : '',
        theme === 'teal' ? `${styles.teal} theme-teal` : '',
        className,
      ].join(' ')}
      aria-roledescription="slide"
      aria-label={label}
      aria-hidden={hidden || mode === 'thumb' ? true : undefined}
      inert={hidden || mode === 'thumb' ? true : undefined}
      data-slide={slide.id}
    >
      {children}
    </section>
  );
}
