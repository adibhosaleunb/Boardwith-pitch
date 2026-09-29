import { useState } from 'react';
import styles from './SafeImage.module.css';

// An <img> that shows a clearly marked gap (never a broken icon) when a
// manifest file hasn't been added yet. See source-images/README.md.
export default function SafeImage({ src, alt, className = '', style, eager = false, fallback }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    if (fallback) return fallback;
    return (
      <div className={`${styles.missing} ${className}`} style={style} role="img" aria-label={alt}>
        <span>
          Image missing: <strong>{src.split('/').pop()}</strong>
          <br />
          Add it with <code>npm run images</code>
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
