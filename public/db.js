let db;

export function initDB() {
  return new Promise((res, rej) => {
    const req = indexedDB.open('DataViewerDB');
    req.onsuccess = e => { db = e.target.result; res(db); };
    req.onerror = e => { console.error('IndexedDB open error:', e.target.error); rej(e.target.error); };
  });
}

export const getTables = () => new Promise((res, rej) => {
  const tx = db.transaction('tables','readonly');
  const store = tx.objectStore('tables');
  const rq = store.getAll();
  rq.onsuccess = () => res(rq.result.map(t => ({ tableName: t.tableName, plural: t.plural, singular: t.singular })));
  rq.onerror = () => { console.error('IndexedDB getTables error:', rq.error); rej(rq.error); };
});

export const addTable = (plural,singular)=> new Promise((res,rej)=>{
  const newVersion = db.version + 1;
  db.close();
  const req = indexedDB.open('DataViewerDB', newVersion);
  req.onupgradeneeded = e => {
    const d = e.target.result;
    if(!d.objectStoreNames.contains('tables')) {
      d.createObjectStore('tables', {keyPath:'tableName'});
    }
    d.createObjectStore(plural, {keyPath:'id', autoIncrement:true});
  };
  req.onsuccess = e => {
    db = e.target.result;
    const tx = db.transaction('tables','readwrite');
    const store = tx.objectStore('tables');
    const rq = store.add({tableName:plural,plural,singular});
    rq.onsuccess = ()=>res(plural);
    rq.onerror   = ()=>{ console.error('IndexedDB addTable error:', rq.error); rej(rq.error); };
  };
  req.onerror = e => { console.error('IndexedDB addTable error:', e.target.error); rej(e.target.error); };
});

export const getRecords = table=> new Promise((res,rej)=>{
  const tx = db.transaction(db.objectStoreNames.contains(table) ? table : 'records','readonly');
  let rq;
  if (tx.objectStoreNames.contains(table)) {
    rq = tx.objectStore(table).getAll();
  } else {
    const store = tx.objectStore('records');
    const idx = store.index('tableName');
    rq = idx.getAll(table);
  }
  rq.onsuccess = ()=>res(rq.result);
  rq.onerror   = ()=>{ console.error('IndexedDB getRecords error:', rq.error); rej(rq.error); };
});

export const addRecord = (table,name)=> new Promise((res,rej)=>{
  const storeName = db.objectStoreNames.contains(table) ? table : 'records';
  const tx = db.transaction(storeName,'readwrite');
  const store = tx.objectStore(storeName);
  const data = storeName === 'records' ? {tableName:table,name} : {name};
  const rq = store.add(data);
  rq.onsuccess = ()=>res(rq.result);
  rq.onerror   = ()=>{ console.error('IndexedDB addRecord error:', rq.error); rej(rq.error); };
});
