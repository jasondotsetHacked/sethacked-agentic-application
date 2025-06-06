export function initResize(containerSelector = '.container', handleSelector = '#drag-handle') {
  const container = document.querySelector(containerSelector);
  const handle = document.querySelector(handleSelector);
  let dragging = false;
  handle.addEventListener('mousedown', () => { dragging = true; document.body.style.cursor = 'col-resize'; });
  document.addEventListener('mousemove', e => {
    if(!dragging) return;
    let w = Math.max(120, Math.min(window.innerWidth-100, e.clientX));
    container.style.setProperty('--sidebar-w', w + 'px');
  });
  document.addEventListener('mouseup', () => { dragging = false; document.body.style.cursor = ''; });
}
