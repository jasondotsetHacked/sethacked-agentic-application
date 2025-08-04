import { loadCSS } from '../../../utils/cssLoader.js';
loadCSS('./src/components/modules/LoginForm/LoginForm.css');

import { Heading } from '../../primitives/Heading/Heading.js';
import { Label } from '../../primitives/Label/Label.js';
import { Input } from '../../primitives/Input/input.js';
import { Button } from '../../primitives/Button/Button.js';

export function LoginForm({ onSubmit = () => {} } = {}) {
  const form = document.createElement('form');
  form.classList.add('login-form');

  const heading = Heading({ level: 2, text: 'Login', className: 'login-form__heading' });

  const emailField = document.createElement('div');
  emailField.classList.add('login-form__field');
  const emailId = 'login-email';
  const emailLabel = Label({ htmlFor: emailId, text: 'Email' });
  const emailInput = Input({ type: 'email', placeholder: 'you@example.com' });
  emailInput.id = emailId;
  emailField.append(emailLabel, emailInput);

  const passwordField = document.createElement('div');
  passwordField.classList.add('login-form__field');
  const passwordId = 'login-password';
  const passwordLabel = Label({ htmlFor: passwordId, text: 'Password' });
  const passwordInput = Input({ type: 'password', placeholder: '********' });
  passwordInput.id = passwordId;
  passwordField.append(passwordLabel, passwordInput);

  const submitButton = Button({ text: 'Login', type: 'submit', onClick: () => {} });
  submitButton.classList.add('login-form__submit');

  form.append(heading, emailField, passwordField, submitButton);

  form.addEventListener('submit', e => {
    e.preventDefault();
    onSubmit({
      email: emailInput.value,
      password: passwordInput.value
    });
  });

  return form;
}

