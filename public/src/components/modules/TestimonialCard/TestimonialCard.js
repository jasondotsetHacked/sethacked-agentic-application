import { loadCSS } from '../../../utils/cssLoader.js';
loadCSS('./src/components/modules/TestimonialCard/TestimonialCard.css');

import { Heading } from '../../primitives/Heading/Heading.js';
import { Text } from '../../primitives/Text/Text.js';

export function TestimonialCard({
  quote = 'This product changed my life!',
  author = 'Jane Doe',
  role = 'CEO, Example Inc.'
} = {}) {
  const container = document.createElement('figure');
  container.classList.add('testimonial-card');

  const quoteEl = Text({ tag: 'blockquote', text: quote, className: 'testimonial-card__quote' });

  const figcaption = document.createElement('figcaption');
  figcaption.classList.add('testimonial-card__author');

  const authorEl = Heading({ level: 3, text: author, className: 'testimonial-card__author-name' });
  const roleEl = Text({ tag: 'p', text: role, className: 'testimonial-card__author-role' });

  figcaption.append(authorEl, roleEl);
  container.append(quoteEl, figcaption);

  return container;
}
