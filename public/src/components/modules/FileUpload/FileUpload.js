import { loadCSS } from '../../../utils/cssLoader.js';
loadCSS('./src/components/modules/FileUpload/FileUpload.css');

import { Label } from '../../primitives/Label/Label.js';
import { Input } from '../../primitives/Input/input.js';
import { Button } from '../../primitives/Button/Button.js';
import { Text } from '../../primitives/Text/Text.js';

export function FileUpload({
  labelText = 'Upload file',
  buttonText = 'Upload',
  accept = '',
  onUpload = () => {}
} = {}) {
  const form = document.createElement('form');
  form.classList.add('file-upload');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const file = inputEl.files[0];
    if (file) {
      onUpload(file);
    }
  });

  const labelEl = Label({ htmlFor: 'file-upload-input', text: labelText });
  labelEl.classList.add('file-upload__label');

  const controlsEl = document.createElement('div');
  controlsEl.classList.add('file-upload__controls');

  const inputEl = Input({ type: 'file' });
  inputEl.id = 'file-upload-input';
  inputEl.accept = accept;
  inputEl.classList.add('file-upload__input');

  const buttonEl = Button({ text: buttonText, type: 'submit', onClick: () => {} });
  buttonEl.classList.add('file-upload__button');

  const fileNameEl = Text({ tag: 'span', text: 'No file selected', className: 'file-upload__filename' });
  fileNameEl.setAttribute('aria-live', 'polite');

  inputEl.addEventListener('change', () => {
    const name = inputEl.files[0]?.name || 'No file selected';
    fileNameEl.textContent = name;
  });

  controlsEl.append(inputEl, buttonEl);
  form.append(labelEl, controlsEl, fileNameEl);

  return form;
}
