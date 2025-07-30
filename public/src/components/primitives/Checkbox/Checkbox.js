export function Checkbox({ id, checked = false, onChange }) {
  const input = document.createElement('input');
  input.type = 'checkbox';
  if (id) input.id = id;
  input.checked = checked;
  input.classList.add('checkbox');
  if (typeof onChange === 'function') {
    input.addEventListener('change', e => onChange(e.target.checked));
  }
  return input;
}
