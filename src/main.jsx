import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Self-hosted through Fontsource (brief, 11.3): Anek Latin with width and
// weight axes, Mukta with Devanagari for the language chips.
import '@fontsource-variable/anek-latin/standard.css';
import '@fontsource/mukta/400.css';
import '@fontsource/mukta/500.css';
import '@fontsource/mukta/600.css';
import '@fontsource/mukta/700.css';
import './styles/tokens.css';
import './styles/base.css';
import './styles/print.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
