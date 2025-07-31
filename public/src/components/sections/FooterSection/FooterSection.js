import { loadCSS } from '../../../utils/cssLoader.js';
loadCSS('./src/components/sections/FooterSection/FooterSection.css');

import { Footer } from '../../modules/Footer/Footer.js';

export function FooterSection() {
  const section = document.createElement('div');
  section.classList.add('footer-section');
  section.appendChild(
    Footer({
      text: '© 2024 setHacked',
    })
  );
  return section;
}
