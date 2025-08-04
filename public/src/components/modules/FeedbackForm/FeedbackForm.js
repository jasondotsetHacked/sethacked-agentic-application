import { loadCSS } from '../../../utils/cssLoader.js';
loadCSS('./src/components/modules/FeedbackForm/FeedbackForm.css');

import { Heading } from '../../primitives/Heading/Heading.js';
import { Label } from '../../primitives/Label/Label.js';
import { Input } from '../../primitives/Input/input.js';
import { Select } from '../../primitives/Select/Select.js';
import { TextArea } from '../../primitives/TextArea/TextArea.js';
import { Button } from '../../primitives/Button/Button.js';

export function FeedbackForm({ onSubmit = () => {} } = {}) {
  const form = document.createElement('form');
  form.classList.add('feedback-form');

  const heading = Heading({ level: 2, text: 'Feedback', className: 'feedback-form__heading' });

  const nameField = document.createElement('div');
  nameField.classList.add('feedback-form__field', 'feedback-form__field--inline');
  const nameId = 'feedback-name';
  const nameLabel = Label({ htmlFor: nameId, text: 'Name' });
  const nameInput = Input({ placeholder: 'Your name (optional)' });
  nameInput.id = nameId;
  nameField.append(nameLabel, nameInput);

  const ratingField = document.createElement('div');
  ratingField.classList.add('feedback-form__field', 'feedback-form__field--inline');
  const ratingId = 'feedback-rating';
  const ratingLabel = Label({ htmlFor: ratingId, text: 'Rating' });
  const ratingSelect = Select({
    options: [
      { value: '1', label: '1 - Poor' },
      { value: '2', label: '2 - Fair' },
      { value: '3', label: '3 - Good' },
      { value: '4', label: '4 - Very Good' },
      { value: '5', label: '5 - Excellent' }
    ],
    value: '5'
  });
  ratingSelect.id = ratingId;
  ratingField.append(ratingLabel, ratingSelect);

  const commentsField = document.createElement('div');
  commentsField.classList.add('feedback-form__field');
  const commentsId = 'feedback-comments';
  const commentsLabel = Label({ htmlFor: commentsId, text: 'Comments' });
  const commentsInput = TextArea({ rows: 4, placeholder: 'Let us know what you think...' });
  commentsInput.id = commentsId;
  commentsField.append(commentsLabel, commentsInput);

  const submitButton = Button({ text: 'Submit Feedback', type: 'submit', onClick: () => {} });
  submitButton.classList.add('feedback-form__submit');

  form.append(heading, nameField, ratingField, commentsField, submitButton);

  form.addEventListener('submit', e => {
    e.preventDefault();
    onSubmit({
      name: nameInput.value,
      rating: ratingSelect.value,
      comments: commentsInput.value
    });
  });

  return form;
}

