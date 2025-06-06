import { initResize } from './layout/resize.js';
import TabManager from './dataviewer/tabManager.js';
import { initDB, getTables, addTable, getRecords, addRecord } from './dataviewer/db.js';
import { loadDefault, loadView, loadIdentity, bindBack, flipMobile } from './layout/ui.js';

(async function(){
  const container = document.querySelector('.container');
  initResize();

  const dbTabs = new TabManager(
    document.getElementById('db-tabs'),
    document.getElementById('db-panels')
  );
  const addDataBtn    = document.getElementById('add-data-btn');
  const addDataTabBtn = document.getElementById('add-data-tab-btn');

  await initDB();
  const tables = await getTables();
  const footer = document.querySelector('.panel.dataviewer .footer');
  if(tables.length === 0) {
    footer.style.display = 'none';
  } else {
    footer.style.display = 'block';
  }
  for(const t of tables){
    const id = await dbTabs.addTab(t.plural, t.singular, t.tableName);
    const recs = await getRecords(t.tableName);
    recs.forEach(r=>{
      const card = document.createElement('div');
      card.className = 'card'; card.textContent = r.name;
      card.addEventListener('click', ()=> loadView(r.name));
      dbTabs.meta[id].panelEl.appendChild(card);
    });
  }
  if(tables.length>0) dbTabs.switchTo(tables[0].tableName);

  const main    = document.getElementById('main');
  const backBtn = document.getElementById('back-btn');

  document.querySelector('.identity').addEventListener('click', loadIdentity);
  backBtn.addEventListener('click', ()=>{
    if(window.innerWidth<=768) container.classList.remove('show-main');
    else loadDefault();
  });
  window.addEventListener('resize', ()=>{ if(window.innerWidth>768) container.classList.remove('show-main'); });

  dbTabs.tabsEl.addEventListener('tabchange', e=>{
    const m = dbTabs.meta[e.detail];
    addDataBtn.textContent = `+ New ${m.singular}`;
  });
  if (tables.length > 0) {
    const m = dbTabs.meta[dbTabs.getActiveId()];
    addDataBtn.textContent = `+ New ${m.singular}`;
  }
  addDataBtn.addEventListener('click', async ()=>{
     const id = dbTabs.getActiveId();
     const { singular, panelEl } = dbTabs.meta[id];
     main.innerHTML = `
       <button class="back" id="back-main">&larr; Back</button>
       <h2>New ${singular}</h2>
       <form id="card-form">
         <label>${singular} Name: <input type="text" id="card-name" required></label><br><br>
         <button>Create</button>
       </form>
     `;
     document.getElementById('card-form').addEventListener('submit', async e=>{
       e.preventDefault();
       const v = document.getElementById('card-name').value.trim();
       if(v){
         await addRecord(id, v);
         const card = document.createElement('div');
         card.className = 'card';
         card.textContent = v;
         card.addEventListener('click', ()=> loadView(v));
         panelEl.appendChild(card);
       }
       loadDefault();
     });
     bindBack(); flipMobile();
  });
  addDataTabBtn.addEventListener('click', ()=>{
    main.innerHTML = `
      <button class="back" id="back-main">&larr; Back</button>
      <h2>New Data Tab</h2>
      <form id="tab-form">
        <label>Tab Name (plural): <input type="text" id="tab-name" required></label><br><br>
        <label>Item Name (singular): <input type="text" id="item-name" required></label><br><br>
        <button>Create Tab</button>
      </form>
    `;
    document.getElementById('tab-form').addEventListener('submit', async e=>{
      e.preventDefault();
      const p = document.getElementById('tab-name').value.trim();
      const s = document.getElementById('item-name').value.trim();
       if(p && s){
         const tName = await addTable(p, s);
         await dbTabs.addTab(p, s, tName);
         footer.style.display = 'block';
         addDataBtn.textContent = `+ New ${s}`;
       }
      loadDefault();
    });
    bindBack(); flipMobile();
  });
})();
