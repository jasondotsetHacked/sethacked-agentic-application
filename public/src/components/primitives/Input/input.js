export function Input({ value = '', placeholder = '', type = 'text', onInput }) {
  const input = document.createElement('input');
  input.type = type;
  input.value = value;
  input.placeholder = placeholder;
  input.classList.add('input');
  if (typeof onInput === 'function') {
    input.addEventListener('input', e => onInput(e.target.value));
  }
  return input;
}
