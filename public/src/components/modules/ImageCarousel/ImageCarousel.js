import { loadCSS } from '../../../utils/cssLoader.js';
loadCSS('./src/components/modules/ImageCarousel/ImageCarousel.css');

import { Button } from '../../primitives/Button/Button.js';
import { Text } from '../../primitives/Text/Text.js';

export function ImageCarousel({
  images = [],
  ariaLabel = 'Image carousel'
} = {}) {
  const container = document.createElement('section');
  container.classList.add('image-carousel');
  container.setAttribute('role', 'region');
  container.setAttribute('aria-roledescription', 'carousel');
  container.setAttribute('aria-label', ariaLabel);

  if (!images.length) {
    const emptyMessage = Text({ tag: 'p', text: 'No images to display.', className: 'image-carousel__empty' });
    container.append(emptyMessage);
    return container;
  }

  let currentIndex = 0;

  const figure = document.createElement('figure');
  figure.classList.add('image-carousel__figure');

  const imgEl = document.createElement('img');
  imgEl.classList.add('image-carousel__image');

  const captionEl = Text({ tag: 'figcaption', text: '', className: 'image-carousel__caption' });
  captionEl.setAttribute('aria-live', 'polite');

  figure.append(imgEl, captionEl);

  function renderSlide(index) {
    const item = images[index];
    imgEl.src = item.src;
    imgEl.alt = item.alt || '';
    captionEl.textContent = item.caption || '';
  }

  const prevButton = Button({ text: 'Prev', onClick: () => {} });
  prevButton.setAttribute('aria-label', 'Previous slide');
  prevButton.classList.add('image-carousel__control', 'image-carousel__control--prev');

  const nextButton = Button({ text: 'Next', onClick: () => {} });
  nextButton.setAttribute('aria-label', 'Next slide');
  nextButton.classList.add('image-carousel__control', 'image-carousel__control--next');

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    renderSlide(currentIndex);
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    renderSlide(currentIndex);
  });

  container.append(prevButton, figure, nextButton);
  renderSlide(currentIndex);

  return container;
}
