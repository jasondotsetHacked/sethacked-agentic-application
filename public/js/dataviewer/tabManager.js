export default class TabManager {
  constructor(tabsEl, panelsContainer){
    this.tabsEl = tabsEl;
    this.panels = panelsContainer;
    this.counter = 0;
    this.meta = {};
    tabsEl.addEventListener('click', e=>{
      if(e.target.matches('.tab')) this.switchTo(e.target.dataset.tab);
    });
  }
  switchTo(id){
    this.tabsEl.querySelectorAll('.tab').forEach(t =>
      t.classList.toggle('active', t.dataset.tab===id)
    );
    this.panels.querySelectorAll('.tab-panel').forEach(p =>
      p.classList.toggle('active', p.id===id)
    );
    this.tabsEl.dispatchEvent(new CustomEvent('tabchange',{detail:id}));
  }
  addTab(plural, singular, id){
    const tabId = id || (this.tabsEl.id + '-custom-' + (++this.counter));
    const btn = document.createElement('button');
    btn.className = 'tab';
    btn.textContent = plural;
    btn.dataset.tab = tabId;
    this.tabsEl.insertBefore(btn, this.tabsEl.querySelector('.add-tab'));
    const p = document.createElement('div');
    p.className = 'tab-panel';
    p.id = tabId;
    this.panels.appendChild(p);
    this.meta[tabId] = { plural, singular, panelEl: p };
    this.switchTo(tabId);
    return tabId;
  }
  getActiveId(){
    return this.tabsEl.querySelector('.tab.active').dataset.tab;
  }
}
