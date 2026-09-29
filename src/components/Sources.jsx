import typo from '../styles/type.module.css';

export default function Sources({ items, className = '', label = 'Sources' }) {
  if (!items?.length) return null;
  return (
    <p className={`${typo.caption} ${className}`}>
      <span className={typo.name}>{label}:</span> {items.join(' ')}
    </p>
  );
}
