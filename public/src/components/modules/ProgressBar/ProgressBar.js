import { loadCSS } from '../../../utils/cssLoader.js';
loadCSS('./src/components/modules/ProgressBar/ProgressBar.css');

import { Text } from '../../primitives/Text/Text.js';

export function ProgressBar({ value = 0, max = 100, label = '' } = {}) {
  const container = document.createElement('div');
  container.classList.add('progress-bar');
  container.setAttribute('role', 'progressbar');
  container.setAttribute('aria-valuemin', 0);
  container.setAttribute('aria-valuemax', max);

  const safeValue = Math.max(0, Math.min(value, max));
  container.setAttribute('aria-valuenow', safeValue);

  let labelEl;
  if (label) {
    const id = `progress-bar-label-${Math.random().toString(36).slice(2, 9)}`;
    labelEl = Text({ tag: 'span', text: label, className: 'progress-bar__label' });
    labelEl.id = id;
    container.setAttribute('aria-labelledby', id);
    container.appendChild(labelEl);
  }

  const track = document.createElement('div');
  track.classList.add('progress-bar__track');

  const fill = document.createElement('div');
  fill.classList.add('progress-bar__fill');
  fill.style.width = `${(safeValue / max) * 100}%`;

  track.appendChild(fill);
  container.appendChild(track);

  return container;
}
