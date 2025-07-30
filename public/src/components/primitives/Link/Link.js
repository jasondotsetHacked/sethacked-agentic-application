export function Link({ href, text, target = '_self' }) {
  const a = document.createElement('a');
  a.href = href;
  a.textContent = text;
  a.target = target;
  a.classList.add('link');
  return a;
}
