import { loadCSS } from '../../../utils/cssLoader.js';
loadCSS('./src/components/pages/LandingPage/LandingPage.css');

import { HeroSection } from '../../sections/HeroSection/HeroSection.js';

import { MainLayout } from '../../layouts/MainLayout/MainLayout.js';

export function LandingPage(container) {
  const hero = HeroSection();
  const layout = MainLayout({ content: hero });
  layout.classList.add('home-page');
  container.appendChild(layout);
}
