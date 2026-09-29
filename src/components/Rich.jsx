import { Fragment } from 'react';
import Placeholder from './Placeholder.jsx';

// Renders **bold**, *italic* and [FOUNDER INPUT: …] inside deck copy.
const TOKEN = /(\[FOUNDER INPUT[^\]]*\]|\*\*[^*]+\*\*|\*[^*]+\*)/g;

export default function Rich({ text }) {
  if (text == null) return null;
  const parts = String(text).split(TOKEN).filter(Boolean);
  return parts.map((part, i) => {
    if (part.startsWith('[FOUNDER INPUT')) return <Placeholder key={i}>{part}</Placeholder>;
    if (part.startsWith('**')) return <strong key={i}>{part.slice(2, -2)}</strong>;
    if (part.startsWith('*')) return <em key={i}>{part.slice(1, -1)}</em>;
    return <Fragment key={i}>{part}</Fragment>;
  });
}
