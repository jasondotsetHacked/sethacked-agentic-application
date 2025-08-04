import { loadCSS } from '../../../utils/cssLoader.js';
loadCSS('./src/components/modules/Tabs/Tabs.css');

import { Heading } from '../../primitives/Heading/Heading.js';
import { Button } from '../../primitives/Button/Button.js';
import { Text } from '../../primitives/Text/Text.js';

export function Tabs({
  heading = 'Tabs',
  items = []
} = {}) {
  const container = document.createElement('section');
  container.classList.add('tabs');

  const headingEl = Heading({ level: 2, text: heading, className: 'tabs__heading' });
  container.appendChild(headingEl);

  const tabList = document.createElement('div');
  tabList.classList.add('tabs__tablist');
  tabList.setAttribute('role', 'tablist');
  container.appendChild(tabList);

  const panelsContainer = document.createElement('div');
  panelsContainer.classList.add('tabs__panels');
  container.appendChild(panelsContainer);

  function activateTab(activeIndex) {
    const tabs = tabList.querySelectorAll('.tabs__tab');
    const panels = panelsContainer.querySelectorAll('.tabs__panel');

    tabs.forEach((tab, index) => {
      const selected = index === activeIndex;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
      if (selected) {
        tab.focus();
      }
    });

    panels.forEach((panel, index) => {
      panel.hidden = index !== activeIndex;
    });
  }

  items.forEach((item, index) => {
    const tabId = `tab-${index}`;
    const panelId = `panel-${index}`;

    const tab = Button({ text: item.label || `Tab ${index + 1}` });
    tab.classList.add('tabs__tab');
    tab.id = tabId;
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-controls', panelId);
    tab.setAttribute('aria-selected', String(index === 0));
    tab.tabIndex = index === 0 ? 0 : -1;
    tabList.appendChild(tab);

    const panel = document.createElement('div');
    panel.classList.add('tabs__panel');
    panel.id = panelId;
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', tabId);
    if (index !== 0) panel.hidden = true;

    const content = Text({ tag: 'p', text: item.content || '' });
    panel.appendChild(content);
    panelsContainer.appendChild(panel);

    tab.addEventListener('click', () => activateTab(index));
    tab.addEventListener('keydown', (e) => {
      const { key } = e;
      let newIndex = null;
      if (key === 'ArrowRight') {
        newIndex = (index + 1) % items.length;
      } else if (key === 'ArrowLeft') {
        newIndex = (index - 1 + items.length) % items.length;
      }
      if (newIndex !== null) {
        activateTab(newIndex);
        e.preventDefault();
      }
    });
  });

  return container;
}

