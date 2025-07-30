import { loadCSS } from '../../../utils/cssLoader.js';
loadCSS('./src/components/layouts/MainLayout/MainLayout.css');

export function MainLayout({ content, footer } = {}) {
  const root = document.createElement('div');
  root.classList.add('main-layout');

  const main = document.createElement('main');
  main.classList.add('main-layout__main');
  main.appendChild(content);

  root.appendChild(main);

  if (footer) {
    root.appendChild(footer);
  }

  return root;
}
