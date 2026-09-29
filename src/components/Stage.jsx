import { forwardRef } from 'react';
import { STAGE_H, STAGE_W } from '../hooks/useStageScale.js';
import styles from './Stage.module.css';

// The fixed 1920 × 1080 canvas, scaled to fit and centred in a mist letterbox.
const Stage = forwardRef(function Stage({ scale, fade, children, ...handlers }, ref) {
  return (
    <main ref={ref} className={styles.area} {...handlers}>
      <div
        className={styles.stage}
        style={{
          width: STAGE_W,
          height: STAGE_H,
          transform: `translate(-50%, -50%) scale(${scale})`,
          '--fade-text': `${fade}ms`,
        }}
      >
        {children}
      </div>
    </main>
  );
});

export default Stage;
