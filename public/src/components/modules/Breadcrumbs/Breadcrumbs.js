import { loadCSS } from '../../../utils/cssLoader.js';
loadCSS('./src/components/modules/Breadcrumbs/Breadcrumbs.css');

import { Link } from '../../primitives/Link/Link.js';
import { Text } from '../../primitives/Text/Text.js';

export function Breadcrumbs({ items = [] } = {}) {
  const nav = document.createElement('nav');
  nav.classList.add('breadcrumbs');
  nav.setAttribute('aria-label', 'Breadcrumb');

  const list = document.createElement('ol');
  list.classList.add('breadcrumbs__list');

  items.forEach(({ href, label }, index) => {
    const item = document.createElement('li');
    item.classList.add('breadcrumbs__item');

    if (index < items.length - 1) {
      const link = Link({ href, text: label });
      link.classList.add('breadcrumbs__link');
      item.append(link);
    } else {
      const current = Text({ tag: 'span', text: label, className: 'breadcrumbs__current' });
      item.append(current);
      item.setAttribute('aria-current', 'page');
    }

    list.append(item);
  });

  nav.append(list);
  return nav;
}
