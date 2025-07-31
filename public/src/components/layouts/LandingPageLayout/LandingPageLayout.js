import { loadCSS } from '../../../utils/cssLoader.js';
loadCSS('./src/components/layouts/LandingPageLayout/LandingPageLayout.css');

export function LandingPageLayout({ content, footer } = {}) {
  const root = document.createElement('div');
  root.classList.add('landingPage-layout');

  const landingPage = document.createElement('landingPage');
  landingPage.classList.add('landingPage-layout__landingPage');
  landingPage.appendChild(content);

  root.appendChild(landingPage);

  if (footer) {
    root.appendChild(footer);
  }

  return root;
}
