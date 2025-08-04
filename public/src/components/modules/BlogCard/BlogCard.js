import { loadCSS } from '../../../utils/cssLoader.js';
loadCSS('./src/components/modules/BlogCard/BlogCard.css');

import { Heading } from '../../primitives/Heading/Heading.js';
import { Text } from '../../primitives/Text/Text.js';
import { Link } from '../../primitives/Link/Link.js';

export function BlogCard({
  imageSrc = '',
  imageAlt = 'Blog post image',
  title = 'Blog Title',
  excerpt = 'Short blog excerpt goes here.',
  linkHref = '#',
  linkText = 'Read more'
} = {}) {
  const container = document.createElement('article');
  container.classList.add('blog-card');

  const headingId = `blog-card-title-${Math.random().toString(36).slice(2, 9)}`;
  container.setAttribute('aria-labelledby', headingId);

  if (imageSrc) {
    const imgEl = document.createElement('img');
    imgEl.src = imageSrc;
    imgEl.alt = imageAlt;
    imgEl.classList.add('blog-card__image');
    container.appendChild(imgEl);
  }

  const content = document.createElement('div');
  content.classList.add('blog-card__content');

  const headingEl = Heading({ level: 3, text: title, className: 'blog-card__title' });
  headingEl.id = headingId;
  const excerptEl = Text({ tag: 'p', text: excerpt, className: 'blog-card__excerpt' });
  const linkEl = Link({ href: linkHref, text: linkText });
  linkEl.classList.add('blog-card__link');

  content.append(headingEl, excerptEl, linkEl);
  container.appendChild(content);

  return container;
}
