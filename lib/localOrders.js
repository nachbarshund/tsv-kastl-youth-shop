// Lokale Bestellliste im Browser (nur auf diesem Gerät).
const KEY = 'jugendshop-orders';
const LAST = 'jugendshop-last-order';

export function loadLocalOrders() {
  let list = [];
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) list = JSON.parse(raw);
    if (!Array.isArray(list)) list = [];
  } catch (e) {
    list = [];
  }
  // Bestellungen aus der Zeit vor der Liste mit übernehmen
  try {
    const last = JSON.parse(localStorage.getItem(LAST) || 'null');
    if (last && last.id && !list.some((o) => o.id === last.id)) list.unshift(last);
  } catch (e) {}
  return list.sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)));
}

export function saveLocalOrder(order) {
  try {
    const list = loadLocalOrders().filter((o) => o.id !== order.id);
    list.unshift(order);
    localStorage.setItem(KEY, JSON.stringify(list.slice(0, 50)));
  } catch (e) {}
}
