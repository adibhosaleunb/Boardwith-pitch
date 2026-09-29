import { createContext, useContext } from 'react';

// mode: 'stage' (live 16:9 canvas) · 'reading' (phone, stacked) ·
//       'print' (?print, one slide per page) · 'thumb' (overview grid)
export const DeckContext = createContext({ mode: 'stage' });

export const useDeck = () => useContext(DeckContext);

// Stage and thumbnails share the fixed 1920 × 1080 canvas layout.
export const isCanvas = (mode) => mode !== 'reading';
