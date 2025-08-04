import { loadCSS } from '../../../utils/cssLoader.js';
loadCSS('./src/components/modules/SearchBar/SearchBar.css');

import { Input } from '../../primitives/Input/input.js';
import { Button } from '../../primitives/Button/Button.js';
import { Label } from '../../primitives/Label/Label.js';

export function SearchBar({
  placeholder = 'Search...',
  buttonText = 'Search',
  labelText = 'Search',
  onSearch = () => {}
} = {}) {
  const form = document.createElement('form');
  form.classList.add('search-bar');
  form.setAttribute('role', 'search');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const query = inputEl.value.trim();
    onSearch(query);
  });

  const labelEl = Label({ htmlFor: 'search-bar-input', text: labelText });
  labelEl.classList.add('search-bar__label');

  const inputEl = Input({ type: 'search', placeholder });
  inputEl.id = 'search-bar-input';
  inputEl.classList.add('search-bar__input');

  const buttonEl = Button({ text: buttonText, type: 'submit', onClick: () => {} });
  buttonEl.classList.add('search-bar__button');

  form.append(labelEl, inputEl, buttonEl);

  return form;
}
