// public/src/components/modules/HeroBanner/HeroBanner.js
import { Heading } from '../../primitives/Heading/Heading.js';
import { Text } from '../../primitives/Text/Text.js';
import { Button } from '../../primitives/Button/Button.js';

import { loadCSS } from '../../../utils/cssLoader.js';
loadCSS('./src/components/primitives/Heading/Heading.css');
loadCSS('./src/components/primitives/Text/Text.css');
loadCSS('./src/components/primitives/Button/Button.css');
loadCSS('./src/components/modules/HeroBanner/HeroBanner.css');

export function HeroBanner({
  title = 'Welcome to Our App',
  subtitle = 'Build once, run everywhere',
  ctaText = 'Get Started',
  onCtaClick = () => {}
}) {
  const container = document.createElement('section');
  container.classList.add('hero-banner');

  const titleEl = Heading({ level: 1, text: title, className: 'hero-banner__title' });
  const subtitleEl = Text({ tag: 'p', text: subtitle, className: 'hero-banner__subtitle' });
  const ctaButton = Button({ text: ctaText, onClick: onCtaClick });
  ctaButton.classList.add('hero-banner__cta');

  container.append(titleEl, subtitleEl, ctaButton);
  return container;
}
