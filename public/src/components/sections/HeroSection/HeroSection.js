import { HeroBanner } from '../../modules/HeroBanner/HeroBanner.js';

import { loadCSS } from '../../../utils/cssLoader.js';
loadCSS('./src/components/modules/HeroBanner/HeroBanner.css');
loadCSS('./src/components/sections/HeroSection/HeroSection.css');

export function HeroSection() {
  const section = document.createElement('div');
  section.classList.add('hero-section');
  section.appendChild(
    HeroBanner({
      title: 'Launch Your Project',
      subtitle: 'Fast, reliable, and framework‑free.',
      ctaText: 'Try It Now',
      onCtaClick: () => alert('Let’s get started!')
    })
  );
  return section;
}
