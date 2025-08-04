import { loadCSS } from '../../../utils/cssLoader.js';
loadCSS('./src/components/modules/FeatureGrid/FeatureGrid.css');

import { Heading } from '../../primitives/Heading/Heading.js';
import { Text } from '../../primitives/Text/Text.js';

export function FeatureGrid({
  title = 'Features',
  features = []
} = {}) {
  const section = document.createElement('section');
  section.classList.add('feature-grid');
  section.setAttribute('role', 'region');

  const headingId = `feature-grid-title-${Math.random().toString(36).slice(2, 9)}`;
  const headingEl = Heading({ level: 2, text: title, className: 'feature-grid__title' });
  headingEl.id = headingId;
  section.setAttribute('aria-labelledby', headingId);

  const listEl = document.createElement('ul');
  listEl.classList.add('feature-grid__list');

  features.forEach(({ heading, description }) => {
    const itemEl = document.createElement('li');
    itemEl.classList.add('feature-grid__item');

    const itemHeadingEl = Heading({ level: 3, text: heading, className: 'feature-grid__item-heading' });
    const descriptionEl = Text({ tag: 'p', text: description, className: 'feature-grid__item-text' });

    itemEl.append(itemHeadingEl, descriptionEl);
    listEl.appendChild(itemEl);
  });

  section.append(headingEl, listEl);
  return section;
}
