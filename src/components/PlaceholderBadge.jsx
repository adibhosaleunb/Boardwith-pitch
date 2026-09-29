import { useEffect, useMemo } from 'react';
import { findPlaceholders } from '../lib/placeholders.js';
import styles from './PlaceholderBadge.module.css';

// Development builds only: log every unresolved [FOUNDER INPUT: …] and show
// the count in the corner. Production keeps them visible on the slides.
export default function PlaceholderBadge() {
  const found = useMemo(() => (import.meta.env.DEV ? findPlaceholders() : []), []);

  useEffect(() => {
    if (!found.length) return;
    console.groupCollapsed(`[Boardwith] ${found.length} unresolved founder inputs`);
    found.forEach((p) => console.warn(`${p.where}: ${p.text}`));
    console.groupEnd();
  }, [found]);

  if (!found.length) return null;
  return (
    <p className={styles.badge} title="Unresolved [FOUNDER INPUT] placeholders (dev only)">
      {found.length} founder inputs
    </p>
  );
}
