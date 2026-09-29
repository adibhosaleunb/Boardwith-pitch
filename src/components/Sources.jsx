import { useDeck } from '../lib/DeckContext.js';
import typo from '../styles/type.module.css';

// Sources live in the notes panel, the print version and reading mode, never
// on the live stage (brief, section 0).
export default function Sources({ items, className = '', label = 'Sources' }) {
  const { mode } = useDeck();
  if (!items?.length || mode === 'stage' || mode === 'thumb') return null;
  return (
    <p className={`${typo.caption} ${className}`} data-sources="">
      <span className={typo.name}>{label}:</span> {items.join(' ')}
    </p>
  );
}
