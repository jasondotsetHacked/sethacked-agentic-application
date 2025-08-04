import { loadCSS } from '../../../utils/cssLoader.js';
loadCSS('./src/components/modules/StarRating/StarRating.css');

import { Input } from '../../primitives/Input/Input.js';
import { Label } from '../../primitives/Label/Label.js';
import { Text } from '../../primitives/Text/Text.js';

export function StarRating({
  name = 'rating',
  max = 5,
  value = 0,
  legend = 'Rate this',
  onChange,
} = {}) {
  const fieldset = document.createElement('fieldset');
  fieldset.classList.add('star-rating');

  const legendEl = Text({ tag: 'legend', text: legend, className: 'star-rating__legend' });
  fieldset.appendChild(legendEl);

  const stars = document.createElement('div');
  stars.classList.add('star-rating__stars');
  fieldset.appendChild(stars);

  for (let i = max; i >= 1; i--) {
    const id = `${name}-${i}`;
    const input = Input({ type: 'radio', value: String(i) });
    input.name = name;
    input.id = id;
    input.classList.add('star-rating__input');
    if (i === value) {
      input.checked = true;
    }
    if (typeof onChange === 'function') {
      input.addEventListener('change', e => onChange(Number(e.target.value)));
    }

    const label = Label({ htmlFor: id, text: '★' });
    label.classList.add('star-rating__label');
    label.setAttribute('aria-label', `${i} star${i > 1 ? 's' : ''}`);

    stars.append(input, label);
  }

  return fieldset;
}
