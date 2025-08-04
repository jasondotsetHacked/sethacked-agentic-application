import { loadCSS } from '../../../utils/cssLoader.js';
loadCSS('./src/components/modules/CallToActionBanner/CallToActionBanner.css');

import { Heading } from '../../primitives/Heading/Heading.js';
import { Text } from '../../primitives/Text/Text.js';
import { Button } from '../../primitives/Button/Button.js';

export function CallToActionBanner({
  heading = 'Ready to get started?',
  message = 'Join us and make your workflow more efficient.',
  buttonText = 'Get Started',
  onButtonClick = () => {}
} = {}) {
  const section = document.createElement('section');
  section.classList.add('cta-banner');
  section.setAttribute('role', 'region');

  const headingId = `cta-banner-heading-${Math.random().toString(36).slice(2, 9)}`;

  const headingEl = Heading({ level: 2, text: heading, className: 'cta-banner__heading' });
  headingEl.id = headingId;
  section.setAttribute('aria-labelledby', headingId);

  const messageEl = Text({ tag: 'p', text: message, className: 'cta-banner__message' });

  const buttonEl = Button({ text: buttonText, onClick: onButtonClick });
  buttonEl.classList.add('cta-banner__button');

  section.append(headingEl, messageEl, buttonEl);

  return section;
}
