'use client';
import { createContext, useContext, useEffect, useState } from 'react';

const KEY = 'jugendshop-cart';
const Ctx = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch (e) {}
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(KEY, JSON.stringify(items));
    } catch (e) {}
  }, [items, ready]);

  const add = (id, size, qty) =>
    setItems((cur) => {
      const found = cur.find((i) => i.id === id && i.size === size);
      if (found) {
        return cur.map((i) =>
          i === found ? { ...i, qty: Math.min(i.qty + qty, 9) } : i
        );
      }
      return [...cur, { id, size, qty }];
    });
  const setQty = (id, size, qty) =>
    setItems((cur) =>
      cur.map((i) =>
        i.id === id && i.size === size
          ? { ...i, qty: Math.max(1, Math.min(qty, 9)) }
          : i
      )
    );
  const remove = (id, size) =>
    setItems((cur) => cur.filter((i) => !(i.id === id && i.size === size)));
  const clear = () => setItems([]);
  const count = items.reduce((n, i) => n + i.qty, 0);

  return (
    <Ctx.Provider value={{ items, ready, add, setQty, remove, clear, count }}>
      {children}
    </Ctx.Provider>
  );
}

export const useCart = () => useContext(Ctx);
