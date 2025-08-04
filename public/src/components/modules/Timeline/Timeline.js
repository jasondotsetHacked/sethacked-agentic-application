import { loadCSS } from '../../../utils/cssLoader.js';
loadCSS('./src/components/modules/Timeline/Timeline.css');

import { Heading } from '../../primitives/Heading/Heading.js';
import { Text } from '../../primitives/Text/Text.js';

export function Timeline({
  title = 'Timeline',
  events = []
} = {}) {
  const section = document.createElement('section');
  section.classList.add('timeline');
  section.setAttribute('role', 'region');

  const headingId = `timeline-title-${Math.random().toString(36).slice(2, 9)}`;
  const headingEl = Heading({ level: 2, text: title, className: 'timeline__title' });
  headingEl.id = headingId;
  section.setAttribute('aria-labelledby', headingId);

  const listEl = document.createElement('ol');
  listEl.classList.add('timeline__list');

  events.forEach(({ date, description }) => {
    const itemEl = document.createElement('li');
    itemEl.classList.add('timeline__item');

    const timeEl = Text({ tag: 'time', text: date, className: 'timeline__date' });
    if (date) {
      timeEl.setAttribute('datetime', date);
    }

    const descEl = Text({ tag: 'p', text: description, className: 'timeline__description' });

    itemEl.append(timeEl, descEl);
    listEl.append(itemEl);
  });

  section.append(headingEl, listEl);
  return section;
}
