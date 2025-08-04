import { loadCSS } from '../../../utils/cssLoader.js';
loadCSS('./src/components/modules/PricingTable/PricingTable.css');

import { Heading } from '../../primitives/Heading/Heading.js';
import { Text } from '../../primitives/Text/Text.js';
import { Button } from '../../primitives/Button/Button.js';

export function PricingTable({
  title = 'Pricing',
  plans = []
} = {}) {
  const section = document.createElement('section');
  section.classList.add('pricing-table');
  section.setAttribute('role', 'region');

  const headingId = `pricing-table-title-${Math.random().toString(36).slice(2, 9)}`;
  const headingEl = Heading({ level: 2, text: title, className: 'pricing-table__title' });
  headingEl.id = headingId;
  section.setAttribute('aria-labelledby', headingId);

  const plansWrapper = document.createElement('div');
  plansWrapper.classList.add('pricing-table__plans');

  plans.forEach(({ name, price, features = [], ctaText = 'Select', onCtaClick = () => {} }) => {
    const planEl = document.createElement('article');
    planEl.classList.add('pricing-table__plan');
    planEl.setAttribute('role', 'region');

    const planHeadingId = `pricing-plan-${Math.random().toString(36).slice(2, 9)}`;
    const nameEl = Heading({ level: 3, text: name, className: 'pricing-table__plan-title' });
    nameEl.id = planHeadingId;
    planEl.setAttribute('aria-labelledby', planHeadingId);

    const priceEl = Text({ tag: 'p', text: price, className: 'pricing-table__price' });

    const featureList = document.createElement('ul');
    featureList.classList.add('pricing-table__features');

    features.forEach(feature => {
      const li = document.createElement('li');
      const featureText = Text({ tag: 'span', text: feature });
      li.appendChild(featureText);
      featureList.appendChild(li);
    });

    const buttonEl = Button({ text: ctaText, onClick: onCtaClick });
    buttonEl.classList.add('pricing-table__button');

    planEl.append(nameEl, priceEl, featureList, buttonEl);
    plansWrapper.appendChild(planEl);
  });

  section.append(headingEl, plansWrapper);
  return section;
}

