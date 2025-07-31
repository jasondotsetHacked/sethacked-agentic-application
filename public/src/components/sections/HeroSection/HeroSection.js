import { loadCSS } from '../../../utils/cssLoader.js';
loadCSS('./src/components/sections/HeroSection/HeroSection.css');

import { HeroBanner } from '../../modules/HeroBanner/HeroBanner.js';

export function HeroSection() {
  const section = document.createElement('div');
  section.classList.add('hero-section');
  section.appendChild(
    HeroBanner({
      title: 'setHacked',
      subtitle: 'I\'m just here coding and stuff.',
      ctaText: 'Ya feel me?',
      onCtaClick: () => alert('Let’s get started!')
    })
  );
  return section;
}
