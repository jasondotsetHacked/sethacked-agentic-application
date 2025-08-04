import { loadCSS } from '../../../utils/cssLoader.js';
loadCSS('./src/components/modules/CookieConsentBanner/CookieConsentBanner.css');

import { Text } from '../../primitives/Text/Text.js';
import { Button } from '../../primitives/Button/Button.js';
import { Link } from '../../primitives/Link/Link.js';

export function CookieConsentBanner({
  message = 'We use cookies to ensure you get the best experience.',
  moreInfoUrl = '#',
  onAccept = () => {},
  onDecline = () => {}
} = {}) {
  const banner = document.createElement('div');
  banner.classList.add('cookie-consent-banner');
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-live', 'polite');
  banner.setAttribute('aria-label', 'Cookie consent');

  const messageEl = Text({ tag: 'p', text: message, className: 'cookie-consent-banner__message' });

  const actions = document.createElement('div');
  actions.classList.add('cookie-consent-banner__actions');

  const acceptBtn = Button({ text: 'Accept', onClick: () => {
    onAccept();
    banner.remove();
  }});
  acceptBtn.classList.add('cookie-consent-banner__button', 'cookie-consent-banner__button--accept');

  const declineBtn = Button({ text: 'Decline', onClick: () => {
    onDecline();
    banner.remove();
  }});
  declineBtn.classList.add('cookie-consent-banner__button', 'cookie-consent-banner__button--decline');

  const infoLink = Link({ href: moreInfoUrl, text: 'Learn more', target: '_blank' });
  infoLink.classList.add('cookie-consent-banner__link');
  infoLink.setAttribute('rel', 'noopener noreferrer');

  actions.append(acceptBtn, declineBtn, infoLink);
  banner.append(messageEl, actions);

  return banner;
}
