export function loadCSS(path) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = path;
  document.head.appendChild(link);
}