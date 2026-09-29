import { useCallback, useEffect, useState } from 'react';
import { hashFor, indexFromHash } from '../slides/index.js';

// Current slide, kept in the URL hash so reloads and links keep their place.
export default function useDeckNavigation(count) {
  const [index, setIndex] = useState(() => indexFromHash(window.location.hash));

  useEffect(() => {
    const onHash = () => setIndex(indexFromHash(window.location.hash));
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    const hash = hashFor(index);
    if (window.location.hash !== hash) window.history.replaceState(null, '', hash);
  }, [index]);

  const goTo = useCallback((i) => setIndex(Math.max(0, Math.min(count - 1, i))), [count]);
  const next = useCallback(() => setIndex((i) => Math.min(count - 1, i + 1)), [count]);
  const prev = useCallback(() => setIndex((i) => Math.max(0, i - 1)), []);

  return { index, goTo, next, prev };
}
