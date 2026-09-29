import { company, slides } from '../data/startupData.js';

const PATTERN = /\[FOUNDER INPUT[^\]]*\]/g;

function walk(value, where, found) {
  if (typeof value === 'string') {
    for (const match of value.match(PATTERN) ?? []) found.push({ where, text: match });
  } else if (Array.isArray(value)) {
    value.forEach((v) => walk(v, where, found));
  } else if (value && typeof value === 'object') {
    Object.values(value).forEach((v) => walk(v, where, found));
  }
}

// Every unresolved [FOUNDER INPUT: …] in the deck data, slides and notes.
export function findPlaceholders() {
  const found = [];
  walk(company, 'company', found);
  slides.forEach((s) => walk(s, `slide ${s.number}`, found));
  return found;
}
