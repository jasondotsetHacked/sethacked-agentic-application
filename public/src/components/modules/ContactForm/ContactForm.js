import { loadCSS } from '../../../utils/cssLoader.js';
loadCSS('./src/components/modules/ContactForm/ContactForm.css');

import { Heading } from '../../primitives/Heading/Heading.js';
import { Label } from '../../primitives/Label/Label.js';
import { Input } from '../../primitives/Input/input.js';
import { TextArea } from '../../primitives/TextArea/TextArea.js';
import { Button } from '../../primitives/Button/Button.js';

export function ContactForm({ onSubmit = () => {} } = {}) {
  const form = document.createElement('form');
  form.classList.add('contact-form');

  const heading = Heading({ level: 2, text: 'Contact Us', className: 'contact-form__heading' });

  const nameField = document.createElement('div');
  nameField.classList.add('contact-form__field');
  const nameId = 'contact-name';
  const nameLabel = Label({ htmlFor: nameId, text: 'Name' });
  const nameInput = Input({ placeholder: 'Your name' });
  nameInput.id = nameId;
  nameField.append(nameLabel, nameInput);

  const emailField = document.createElement('div');
  emailField.classList.add('contact-form__field');
  const emailId = 'contact-email';
  const emailLabel = Label({ htmlFor: emailId, text: 'Email' });
  const emailInput = Input({ type: 'email', placeholder: 'you@example.com' });
  emailInput.id = emailId;
  emailField.append(emailLabel, emailInput);

  const messageField = document.createElement('div');
  messageField.classList.add('contact-form__field');
  const messageId = 'contact-message';
  const messageLabel = Label({ htmlFor: messageId, text: 'Message' });
  const messageInput = TextArea({ rows: 5, placeholder: 'How can we help?' });
  messageInput.id = messageId;
  messageField.append(messageLabel, messageInput);

  const submitButton = Button({ text: 'Send', type: 'submit', onClick: () => {} });
  submitButton.classList.add('contact-form__submit');

  form.append(heading, nameField, emailField, messageField, submitButton);

  form.addEventListener('submit', e => {
    e.preventDefault();
    onSubmit({
      name: nameInput.value,
      email: emailInput.value,
      message: messageInput.value
    });
  });

  return form;
}

