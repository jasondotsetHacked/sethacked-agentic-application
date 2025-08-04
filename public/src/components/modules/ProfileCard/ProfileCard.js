import { loadCSS } from '../../../utils/cssLoader.js';
loadCSS('./src/components/modules/ProfileCard/ProfileCard.css');

import { Heading } from '../../primitives/Heading/Heading.js';
import { Text } from '../../primitives/Text/Text.js';
import { Button } from '../../primitives/Button/Button.js';

export function ProfileCard({
  name = 'John Doe',
  title = 'Job Title',
  imageUrl = '',
  imageAlt = '',
  contactText = 'Contact',
  onContact = () => {}
} = {}) {
  const card = document.createElement('article');
  card.classList.add('profile-card');
  card.setAttribute('role', 'region');

  const headingId = `profile-card-name-${Math.random().toString(36).slice(2, 9)}`;

  const imgEl = document.createElement('img');
  imgEl.src = imageUrl;
  imgEl.alt = imageAlt || `Portrait of ${name}`;
  imgEl.classList.add('profile-card__image');

  const contentEl = document.createElement('div');
  contentEl.classList.add('profile-card__content');

  const nameEl = Heading({ level: 3, text: name, className: 'profile-card__name' });
  nameEl.id = headingId;
  card.setAttribute('aria-labelledby', headingId);

  const titleEl = Text({ tag: 'p', text: title, className: 'profile-card__title' });

  const buttonEl = Button({ text: contactText, onClick: onContact });
  buttonEl.classList.add('profile-card__button');

  contentEl.append(nameEl, titleEl, buttonEl);
  card.append(imgEl, contentEl);

  return card;
}
