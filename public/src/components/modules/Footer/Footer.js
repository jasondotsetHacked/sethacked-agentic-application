import { loadCSS } from '../../../utils/cssLoader.js';
loadCSS('./src/components/modules/Footer/Footer.css');

export function Footer({ text = '© 2024 My Company' } = {}) {
  const el = document.createElement('footer');
  el.classList.add('footer');
  el.textContent = text;
  return el;
}
