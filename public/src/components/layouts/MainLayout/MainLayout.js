import { loadCSS } from '../../../utils/cssLoader.js';
loadCSS('./src/components/layouts/MainLayout/MainLayout.css');

export function MainLayout({ content }) {
  const root = document.createElement('div');
  root.classList.add('main-layout');

  const main = document.createElement('main');
  main.classList.add('main-layout__main');
  main.appendChild(content);

  root.appendChild(main);
  return root;
}
