import { loadCSS } from '../../../utils/cssLoader.js';
loadCSS('./src/components/modules/RegistrationForm/RegistrationForm.css');

import { Heading } from '../../primitives/Heading/Heading.js';
import { Label } from '../../primitives/Label/Label.js';
import { Input } from '../../primitives/Input/input.js';
import { Button } from '../../primitives/Button/Button.js';
import { Checkbox } from '../../primitives/Checkbox/Checkbox.js';
import { Text } from '../../primitives/Text/Text.js';

export function RegistrationForm({ onSubmit = () => {} } = {}) {
  const form = document.createElement('form');
  form.classList.add('registration-form');

  const heading = Heading({ level: 2, text: 'Create Account', className: 'registration-form__heading' });
  const description = Text({ text: 'Fill in the form to sign up.', className: 'registration-form__description' });

  const username = createField({ id: 'registration-username', label: 'Username', type: 'text', placeholder: 'johndoe' });
  const email = createField({ id: 'registration-email', label: 'Email', type: 'email', placeholder: 'you@example.com' });
  const password = createField({ id: 'registration-password', label: 'Password', type: 'password', placeholder: '********' });
  const confirmPassword = createField({ id: 'registration-confirm', label: 'Confirm Password', type: 'password', placeholder: '********' });

  const termsField = document.createElement('div');
  termsField.classList.add('registration-form__terms');
  const termsId = 'registration-terms';
  const termsCheckbox = Checkbox({ id: termsId });
  const termsLabel = Label({ htmlFor: termsId, text: 'I agree to the terms and conditions' });
  termsField.append(termsCheckbox, termsLabel);

  const submitButton = Button({ text: 'Register', type: 'submit', onClick: () => {} });
  submitButton.classList.add('registration-form__submit');

  form.append(
    heading,
    description,
    username.field,
    email.field,
    password.field,
    confirmPassword.field,
    termsField,
    submitButton
  );

  form.addEventListener('submit', e => {
    e.preventDefault();
    onSubmit({
      username: username.input.value,
      email: email.input.value,
      password: password.input.value,
      confirmPassword: confirmPassword.input.value,
      termsAccepted: termsCheckbox.checked
    });
  });

  return form;
}

function createField({ id, label, type, placeholder }) {
  const wrapper = document.createElement('div');
  wrapper.classList.add('registration-form__field');
  const labelEl = Label({ htmlFor: id, text: label });
  const inputEl = Input({ type, placeholder });
  inputEl.id = id;
  wrapper.append(labelEl, inputEl);
  return { field: wrapper, input: inputEl };
}
