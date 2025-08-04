import { loadCSS } from '../../../utils/cssLoader.js';
loadCSS('./src/components/modules/AlertBanner/AlertBanner.css');

import { Heading } from '../../primitives/Heading/Heading.js';
import { Text } from '../../primitives/Text/Text.js';
import { Button } from '../../primitives/Button/Button.js';

export function AlertBanner({
  heading = 'Notice',
  message = 'This is an alert message.',
  type = 'info',
  onClose = () => {}
} = {}) {
  const container = document.createElement('div');
  container.classList.add('alert-banner', `alert-banner--${type}`);
  container.setAttribute('role', 'alert');
  container.setAttribute('aria-live', 'assertive');

  const content = document.createElement('div');
  content.classList.add('alert-banner__content');

  const headingEl = Heading({ level: 4, text: heading, className: 'alert-banner__heading' });
  const messageEl = Text({ tag: 'p', text: message, className: 'alert-banner__message' });

  content.append(headingEl, messageEl);

  const closeButton = Button({ text: '×', onClick: handleClose });
  closeButton.classList.add('alert-banner__close');
  closeButton.setAttribute('aria-label', 'Close alert');

  function handleClose() {
    container.remove();
    onClose();
  }

  container.append(content, closeButton);

  return container;
}
