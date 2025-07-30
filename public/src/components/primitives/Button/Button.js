export function Button({ text, onClick, type = 'button', disabled = false }) {
  const btn = document.createElement('button');
  btn.type = type;
  btn.textContent = text;
  btn.disabled = disabled;
  btn.classList.add('btn');
  btn.addEventListener('click', onClick);
  return btn;
}
