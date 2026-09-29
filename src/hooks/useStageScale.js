import { useLayoutEffect, useState } from 'react';

export const STAGE_W = 1920;
export const STAGE_H = 1080;

// s = min(width / 1920, height / 1080) of the available area, on every resize.
export default function useStageScale(ref) {
  const [scale, setScale] = useState(0.5);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const measure = () => {
      const { width, height } = el.getBoundingClientRect();
      setScale(Math.min(width / STAGE_W, height / STAGE_H));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [ref]);

  return scale;
}
