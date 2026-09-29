import { useEffect, useState } from 'react';

// Reading mode: under 600px wide, or a phone held in portrait.
const QUERY = '(max-width: 599px), (orientation: portrait) and (pointer: coarse) and (max-width: 767px)';

export default function useReadingMode() {
  const [reading, setReading] = useState(() => window.matchMedia(QUERY).matches);

  useEffect(() => {
    const mql = window.matchMedia(QUERY);
    const onChange = () => setReading(mql.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  return reading;
}
