import { loadCSS } from '../../../utils/cssLoader.js';
loadCSS('./src/components/modules/Pagination/Pagination.css');

import { Button } from '../../primitives/Button/Button.js';

export function Pagination({ totalPages = 1, currentPage = 1, onPageChange = () => {} } = {}) {
  const nav = document.createElement('nav');
  nav.classList.add('pagination');
  nav.setAttribute('aria-label', 'Pagination');

  const list = document.createElement('ul');
  list.classList.add('pagination__list');

  const createPageButton = page => {
    const li = document.createElement('li');
    li.classList.add('pagination__item');
    const btn = Button({ text: String(page), onClick: () => onPageChange(page) });
    btn.classList.add('pagination__button');
    btn.setAttribute('aria-label', `Page ${page}`);
    if (page === currentPage) {
      btn.setAttribute('aria-current', 'page');
      btn.disabled = true;
    }
    li.append(btn);
    return li;
  };

  const prevLi = document.createElement('li');
  prevLi.classList.add('pagination__item');
  const prevButton = Button({ text: 'Previous', onClick: () => onPageChange(currentPage - 1) });
  prevButton.classList.add('pagination__button', 'pagination__prev');
  prevButton.setAttribute('aria-label', 'Previous page');
  prevButton.disabled = currentPage <= 1;
  prevLi.append(prevButton);
  list.append(prevLi);

  for (let i = 1; i <= totalPages; i++) {
    list.append(createPageButton(i));
  }

  const nextLi = document.createElement('li');
  nextLi.classList.add('pagination__item');
  const nextButton = Button({ text: 'Next', onClick: () => onPageChange(currentPage + 1) });
  nextButton.classList.add('pagination__button', 'pagination__next');
  nextButton.setAttribute('aria-label', 'Next page');
  nextButton.disabled = currentPage >= totalPages;
  nextLi.append(nextButton);
  list.append(nextLi);

  nav.append(list);
  return nav;
}

