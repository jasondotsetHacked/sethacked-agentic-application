import { loadCSS } from '../../../utils/cssLoader.js';
loadCSS('./src/components/primitives/Select/Select.css');

export function Select({ options = [], value, onChange }) {
  const select = document.createElement('select');
  select.classList.add('select');
  options.forEach(opt => {
    const option = document.createElement('option');
    if (typeof opt === 'string') {
      option.value = opt;
      option.textContent = opt;
    } else {
      option.value = opt.value;
      option.textContent = opt.label;
    }
    if (opt.value === value) option.selected = true;
    select.append(option);
  });
  if (typeof onChange === 'function') {
    select.addEventListener('change', e => onChange(e.target.value));
  }
  return select;
}
