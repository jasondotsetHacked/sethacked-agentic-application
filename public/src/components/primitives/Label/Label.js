import { loadCSS } from '../../../utils/cssLoader.js';
loadCSS('./src/components/primitives/Label/Label.css');

export function Label({ htmlFor, text }) {
  const label = document.createElement('label');
  label.htmlFor = htmlFor;
  label.textContent = text;
  label.classList.add('label');
  return label;
}
