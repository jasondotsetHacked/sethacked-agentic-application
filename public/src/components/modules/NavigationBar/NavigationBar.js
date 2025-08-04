import { loadCSS } from '../../../utils/cssLoader.js';
loadCSS('./src/components/modules/NavigationBar/NavigationBar.css');

import { Heading } from '../../primitives/Heading/Heading.js';
import { Link } from '../../primitives/Link/Link.js';
import { Button } from '../../primitives/Button/Button.js';

export function NavigationBar({
  brand = 'Brand',
  links = []
} = {}) {
  const nav = document.createElement('nav');
  nav.classList.add('navigation-bar');
  nav.setAttribute('role', 'navigation');
  nav.setAttribute('aria-label', 'Main navigation');

  const brandEl = Heading({ level: 1, text: brand, className: 'navigation-bar__brand' });

  const menu = document.createElement('ul');
  menu.classList.add('navigation-bar__menu');
  menu.id = 'navigation-bar-menu';

  links.forEach(({ href, text }) => {
    const li = document.createElement('li');
    const link = Link({ href, text });
    li.append(link);
    menu.append(li);
  });

  const toggleButton = Button({ text: 'Menu', onClick: toggleMenu });
  toggleButton.classList.add('navigation-bar__toggle');
  toggleButton.setAttribute('aria-label', 'Toggle navigation');
  toggleButton.setAttribute('aria-controls', 'navigation-bar-menu');
  toggleButton.setAttribute('aria-expanded', 'false');

  function toggleMenu() {
    const expanded = toggleButton.getAttribute('aria-expanded') === 'true';
    toggleButton.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('navigation-bar__menu--open');
  }

  nav.append(brandEl, toggleButton, menu);

  return nav;
}

