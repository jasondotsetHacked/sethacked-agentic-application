import { loadCSS } from '../../../utils/cssLoader.js';
loadCSS('./src/components/pages/LandingPage/LandingPage.css');

import { HeroSection } from '../../sections/HeroSection/HeroSection.js';
import { FooterSection } from '../../sections/FooterSection/FooterSection.js';

import { MainLayout } from '../../layouts/MainLayout/MainLayout.js';

export function LandingPage(container) {
  const hero = HeroSection();
  const footer = FooterSection();
  const layout = MainLayout({ content: hero, footer });
  layout.classList.add('landing-page');
  container.appendChild(layout);
}
