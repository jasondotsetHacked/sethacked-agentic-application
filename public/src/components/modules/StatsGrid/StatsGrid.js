import { loadCSS } from '../../../utils/cssLoader.js';
loadCSS('./src/components/modules/StatsGrid/StatsGrid.css');

import { Heading } from '../../primitives/Heading/Heading.js';
import { Text } from '../../primitives/Text/Text.js';

export function StatsGrid({
  title = 'Key Statistics',
  stats = []
} = {}) {
  const section = document.createElement('section');
  section.classList.add('stats-grid');
  section.setAttribute('role', 'region');

  const headingId = `stats-grid-title-${Math.random().toString(36).slice(2, 9)}`;
  const headingEl = Heading({ level: 2, text: title, className: 'stats-grid__title' });
  headingEl.id = headingId;
  section.setAttribute('aria-labelledby', headingId);

  const listEl = document.createElement('ul');
  listEl.classList.add('stats-grid__list');

  stats.forEach(({ value, label }) => {
    const itemEl = document.createElement('li');
    itemEl.classList.add('stats-grid__item');

    const valueEl = Heading({ level: 3, text: value, className: 'stats-grid__value' });
    const labelEl = Text({ tag: 'p', text: label, className: 'stats-grid__label' });

    itemEl.append(valueEl, labelEl);
    listEl.append(itemEl);
  });

  section.append(headingEl, listEl);
  return section;
}
