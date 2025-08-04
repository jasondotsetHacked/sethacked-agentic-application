import { loadCSS } from '../../../utils/cssLoader.js';
loadCSS('./src/components/modules/NewsletterSignup/NewsletterSignup.css');

import { Heading } from '../../primitives/Heading/Heading.js';
import { Input } from '../../primitives/Input/input.js';
import { Button } from '../../primitives/Button/Button.js';
import { Label } from '../../primitives/Label/Label.js';

export function NewsletterSignup({
  title = 'Stay in the loop',
  placeholder = 'Your email',
  buttonText = 'Subscribe',
  onSubmit = () => {}
} = {}) {
  const form = document.createElement('form');
  form.classList.add('newsletter-signup');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const email = inputEl.value.trim();
    onSubmit(email);
  });

  const headingEl = Heading({ level: 2, text: title, className: 'newsletter-signup__title' });

  const fieldWrapper = document.createElement('div');
  fieldWrapper.classList.add('newsletter-signup__field');

  const labelEl = Label({ htmlFor: 'newsletter-email', text: 'Email' });
  labelEl.classList.add('newsletter-signup__label');

  const inputEl = Input({ type: 'email', placeholder });
  inputEl.id = 'newsletter-email';
  inputEl.classList.add('newsletter-signup__input');

  fieldWrapper.append(labelEl, inputEl);

  const buttonEl = Button({ text: buttonText, type: 'submit', onClick: () => {} });
  buttonEl.classList.add('newsletter-signup__button');

  form.append(headingEl, fieldWrapper, buttonEl);
  return form;
}
