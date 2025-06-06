const container = document.querySelector('.container');
const main = document.getElementById('main');

export function bindBack(){
  const b = document.getElementById('back-main');
  if(!b) return;
  b.addEventListener('click', ()=>{
    if(window.innerWidth<=768) container.classList.remove('show-main');
    else loadDefault();
  });
}

export function flipMobile(){
  if(window.innerWidth<=768) container.classList.add('show-main');
}

export function loadDefault(){
  main.innerHTML = `
    <button class="back" id="back-main">&larr; Back</button>
    <h2>Main content</h2>
    <p>Select something from the sidebar…</p>
  `;
  bindBack();
  if(window.innerWidth<=768) container.classList.remove('show-main');
}

export function loadView(title){
  main.innerHTML = `
    <button class="back" id="back-main">&larr; Back</button>
    <h2>${title}</h2>
    <p>Details about <strong>${title}</strong> …</p>
  `;
  bindBack(); flipMobile();
}

export function loadIdentity(){
  main.innerHTML = `
    <button class="back" id="back-main">&larr; Back</button>
    <h2>Identity control</h2>
    <p>Configure your identity here.</p>
  `;
  bindBack(); flipMobile();
}
