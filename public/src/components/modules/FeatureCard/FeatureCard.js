import { loadCSS } from '../../../utils/cssLoader.js';
loadCSS('./src/components/modules/FeatureCard/FeatureCard.css');

import { Heading } from '../../primitives/Heading/Heading.js';
import { Text } from '../../primitives/Text/Text.js';
import { Button } from '../../primitives/Button/Button.js';

export function FeatureCard({
  title = 'Feature title',
  description = 'Short description of the feature.',
  ctaText = 'Learn more',
  onCtaClick = () => {}
} = {}) {
  const container = document.createElement('article');
  container.classList.add('feature-card');
  container.setAttribute('role', 'region');

  const headingId = `feature-card-title-${Math.random().toString(36).slice(2, 9)}`;
  const headingEl = Heading({ level: 3, text: title, className: 'feature-card__title' });
  headingEl.id = headingId;
  container.setAttribute('aria-labelledby', headingId);
  const descriptionEl = Text({ tag: 'p', text: description, className: 'feature-card__description' });
  const buttonEl = Button({ text: ctaText, onClick: onCtaClick });
  buttonEl.classList.add('feature-card__button');

  container.append(headingEl, descriptionEl, buttonEl);
  return container;
}
