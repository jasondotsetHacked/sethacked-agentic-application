import { loadCSS } from '../../../utils/cssLoader.js';
loadCSS('./src/components/modules/StepsList/StepsList.css');

import { Heading } from '../../primitives/Heading/Heading.js';
import { Text } from '../../primitives/Text/Text.js';

export function StepsList({
  title = 'How it works',
  steps = []
} = {}) {
  const section = document.createElement('section');
  section.classList.add('steps-list');
  section.setAttribute('role', 'region');

  const headingId = `steps-list-title-${Math.random().toString(36).slice(2, 9)}`;
  const headingEl = Heading({ level: 2, text: title, className: 'steps-list__title' });
  headingEl.id = headingId;
  section.setAttribute('aria-labelledby', headingId);

  const listEl = document.createElement('ol');
  listEl.classList.add('steps-list__list');

  steps.forEach(({ title: stepTitle, description }) => {
    const itemEl = document.createElement('li');
    itemEl.classList.add('steps-list__item');

    const stepTitleEl = Heading({ level: 3, text: stepTitle, className: 'steps-list__item-title' });
    const descEl = Text({ tag: 'p', text: description, className: 'steps-list__item-description' });

    itemEl.append(stepTitleEl, descEl);
    listEl.append(itemEl);
  });

  section.append(headingEl, listEl);
  return section;
}
