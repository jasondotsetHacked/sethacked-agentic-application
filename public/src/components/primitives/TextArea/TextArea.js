export function TextArea({
  value = '',
  placeholder = '',
  rows = 4,
  onInput
}) {
  const ta = document.createElement('textarea');
  ta.value = value;
  ta.placeholder = placeholder;
  ta.rows = rows;
  ta.classList.add('textarea');
  if (typeof onInput === 'function') {
    ta.addEventListener('input', e => onInput(e.target.value));
  }
  return ta;
}
