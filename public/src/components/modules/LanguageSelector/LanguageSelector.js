import { loadCSS } from '../../../utils/cssLoader.js';
loadCSS('./src/components/modules/LanguageSelector/LanguageSelector.css');

import { Heading } from '../../primitives/Heading/Heading.js';
import { Label } from '../../primitives/Label/Label.js';
import { Select } from '../../primitives/Select/Select.js';

export function LanguageSelector({
  title = 'Select Language',
  labelText = 'Language',
  options = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Spanish' },
    { value: 'fr', label: 'French' }
  ],
  onChange = () => {}
} = {}) {
  const container = document.createElement('div');
  container.classList.add('language-selector');

  const headingEl = Heading({ level: 2, text: title, className: 'language-selector__title' });

  const controlWrapper = document.createElement('div');
  controlWrapper.classList.add('language-selector__control');

  const labelEl = Label({ htmlFor: 'language-selector-select', text: labelText });
  labelEl.classList.add('language-selector__label');

  const selectEl = Select({ options, onChange });
  selectEl.id = 'language-selector-select';
  selectEl.classList.add('language-selector__select');

  controlWrapper.append(labelEl, selectEl);
  container.append(headingEl, controlWrapper);

  return container;
}
