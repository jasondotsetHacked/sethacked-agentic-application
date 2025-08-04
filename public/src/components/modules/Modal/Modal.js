import { loadCSS } from '../../../utils/cssLoader.js';
loadCSS('./src/components/modules/Modal/Modal.css');

import { Heading } from '../../primitives/Heading/Heading.js';
import { Text } from '../../primitives/Text/Text.js';
import { Button } from '../../primitives/Button/Button.js';

export function Modal({
  title = 'Modal Title',
  body = 'Modal body text',
  actions = [],
  onClose = () => {},
} = {}) {
  const overlay = document.createElement('div');
  overlay.classList.add('modal');

  const dialog = document.createElement('div');
  dialog.classList.add('modal__dialog');
  dialog.setAttribute('role', 'dialog');
  dialog.setAttribute('aria-modal', 'true');
  const titleId = `modal-title-${Math.random().toString(36).slice(2, 9)}`;
  const bodyId = `modal-body-${Math.random().toString(36).slice(2, 9)}`;
  dialog.setAttribute('aria-labelledby', titleId);
  dialog.setAttribute('aria-describedby', bodyId);
  dialog.tabIndex = -1;

  const header = document.createElement('div');
  header.classList.add('modal__header');

  const titleEl = Heading({ level: 2, text: title, className: 'modal__title' });
  titleEl.id = titleId;
  header.appendChild(titleEl);

  const closeBtn = Button({ text: '\u00D7', onClick: handleClose });
  closeBtn.classList.add('modal__close');
  closeBtn.setAttribute('aria-label', 'Close dialog');
  header.appendChild(closeBtn);

  const bodyEl = Text({ tag: 'p', text: body, className: 'modal__body' });
  bodyEl.id = bodyId;

  const footer = document.createElement('div');
  footer.classList.add('modal__footer');

  actions.forEach(({ text, onClick }) => {
    const actionBtn = Button({ text, onClick });
    actionBtn.classList.add('modal__action');
    footer.appendChild(actionBtn);
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      handleClose();
    }
  });

  function handleClose() {
    overlay.remove();
    onClose();
  }

  setTimeout(() => dialog.focus(), 0);

  dialog.append(header, bodyEl, footer);
  overlay.appendChild(dialog);
  return overlay;
}
