import { loadCSS } from '../../../utils/cssLoader.js';
loadCSS('./src/components/pages/LandingPage/LandingPage.css');

import { HeroSection } from '../../sections/HeroSection/HeroSection.js';
import { FooterSection } from '../../sections/FooterSection/FooterSection.js';

import { LandingPageLayout } from '../../layouts/LandingPageLayout/LandingPageLayout.js';

export function LandingPage(container) {
  const hero = HeroSection();
  const footer = FooterSection();
  const layout = LandingPageLayout({ content: hero, footer });
  layout.classList.add('landing-page');
  container.appendChild(layout);
}
