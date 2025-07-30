export function Heading({ level = 1, text, className = '' }) {
  const tag = `h${Math.min(Math.max(level, 1), 6)}`;
  const el = document.createElement(tag);
  el.textContent = text;
  el.classList.add(`heading-${tag}`, className);
  return el;
}