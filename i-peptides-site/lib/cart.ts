"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = { productId: string; qty: number };

type CartState = {
  items: CartItem[];
  add: (productId: string, qty?: number) => void;
  remove: (productId: string) => void;
  setQty: (productId: string, qty: number) => void;
  clear: () => void;
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      add: (productId, qty = 1) => {
        const items = [...get().items];
        const found = items.find((i) => i.productId === productId);
        if (found) found.qty += qty;
        else items.push({ productId, qty });
        set({ items });
      },
      remove: (productId) => set({ items: get().items.filter((i) => i.productId !== productId) }),
      setQty: (productId, qty) => {
        if (qty <= 0) return set({ items: get().items.filter((i) => i.productId !== productId) });
        set({
          items: get().items.map((i) => (i.productId === productId ? { ...i, qty } : i)),
        });
      },
      clear: () => set({ items: [] }),
    }),
    { name: "i-peptides-cart-v1" }
  )
);
