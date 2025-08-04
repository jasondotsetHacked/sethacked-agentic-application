import { loadCSS } from '../../../utils/cssLoader.js';
loadCSS('./src/components/modules/Accordion/Accordion.css');

import { Heading } from '../../primitives/Heading/Heading.js';
import { Button } from '../../primitives/Button/Button.js';
import { Text } from '../../primitives/Text/Text.js';

export function Accordion({
  heading = 'FAQs',
  items = [],
} = {}) {
  const container = document.createElement('section');
  container.classList.add('accordion');

  const headingEl = Heading({ level: 2, text: heading, className: 'accordion__heading' });
  container.appendChild(headingEl);

  const list = document.createElement('div');
  list.classList.add('accordion__list');
  container.appendChild(list);

  items.forEach((item, index) => {
    const itemEl = document.createElement('div');
    itemEl.classList.add('accordion__item');

    const buttonId = `accordion-button-${index}`;
    const panelId = `accordion-panel-${index}`;

    const button = Button({ text: item.question || `Item ${index + 1}` });
    button.classList.add('accordion__button');
    button.id = buttonId;
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-controls', panelId);

    const panel = document.createElement('div');
    panel.classList.add('accordion__panel');
    panel.id = panelId;
    panel.setAttribute('role', 'region');
    panel.setAttribute('aria-labelledby', buttonId);
    panel.hidden = true;

    const answerEl = Text({ tag: 'p', text: item.answer || '' });
    panel.appendChild(answerEl);

    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!expanded));
      panel.hidden = expanded;
    });

    itemEl.append(button, panel);
    list.appendChild(itemEl);
  });

  return container;
}
