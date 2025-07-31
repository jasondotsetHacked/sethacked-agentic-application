import { loadCSS } from '../../../utils/cssLoader.js';
loadCSS('./src/components/primitives/Text/Text.css');

export function Text({ tag = 'p', text, className = '' }) {
  const el = document.createElement(tag);
  el.textContent = text;
  el.classList.add('text', className);
  return el;
}