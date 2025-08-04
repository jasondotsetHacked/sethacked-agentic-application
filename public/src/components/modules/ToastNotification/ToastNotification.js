import { loadCSS } from '../../../utils/cssLoader.js';
loadCSS('./src/components/modules/ToastNotification/ToastNotification.css');

import { Text } from '../../primitives/Text/Text.js';
import { Button } from '../../primitives/Button/Button.js';

export function ToastNotification({
  message = 'Notification message',
  type = 'info',
  duration = 3000,
  onClose = () => {},
} = {}) {
  const toast = document.createElement('div');
  toast.classList.add('toast-notification', `toast-notification--${type}`);
  toast.setAttribute('role', 'alert');
  toast.setAttribute('aria-live', 'polite');

  const messageEl = Text({ tag: 'span', text: message, className: 'toast-notification__message' });

  const closeBtn = Button({ text: '\u00D7', onClick: handleClose });
  closeBtn.classList.add('toast-notification__close');
  closeBtn.setAttribute('aria-label', 'Dismiss notification');

  toast.append(messageEl, closeBtn);

  if (duration) {
    setTimeout(handleClose, duration);
  }

  function handleClose() {
    toast.remove();
    onClose();
  }

  return toast;
}
