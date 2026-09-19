import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { bagOptions } from "./catalog";

export type CartLine = {
  id: string;
  name: string;
  detail: string;
  qty: number;
  unitPrice: number;
};

type Schedule = {
  day: string;
  slot: string;
  turnaround: string;
  address: string;
};

type CartContextValue = {
  lines: CartLine[];
  bagId: string | null;
  setBag: (id: string) => void;
  setItemQty: (line: Omit<CartLine, "qty">, qty: number) => void;
  qtyOf: (id: string) => number;
  subtotal: number;
  discount: number;
  tax: number;
  total: number;
  itemCount: number;
  schedule: Schedule;
  setSchedule: (patch: Partial<Schedule>) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

const PROMO_RATE = 0.2;

export function CartProvider({ children }: { children: ReactNode }) {
  const standard = bagOptions[1]!;
  const [bagId, setBagId] = useState<string | null>(standard.id);
  const [items, setItems] = useState<CartLine[]>([
    { id: "shirt", name: "Men's Business Shirt", detail: "Dry clean & hand-finish hanger", qty: 2, unitPrice: 3.5 },
    { id: "blazer", name: "Wool Blazer", detail: "Dry clean • breathable cover", qty: 1, unitPrice: 9.5 },
  ]);
  const [schedule, setScheduleState] = useState<Schedule>({
    day: "Today, Wed Oct 24",
    slot: "6:00 PM - 8:00 PM",
    turnaround: "Standard",
    address: "142 Greenwood Ave, Apt 4B",
  });

  const value = useMemo<CartContextValue>(() => {
    const bag = bagOptions.find((b) => b.id === bagId);
    const bagLine: CartLine[] = bag
      ? [
          {
            id: `bag-${bag.id}`,
            name: `${bag.name} Wash & Fold`,
            detail: `${bag.detail} • Hypoallergenic • Cold 30°`,
            qty: 1,
            unitPrice: bag.price,
          },
        ]
      : [];
    const lines = [...bagLine, ...items.filter((i) => i.qty > 0)];
    const subtotal = lines.reduce((s, l) => s + l.qty * l.unitPrice, 0);
    const discount = subtotal * PROMO_RATE;
    const tax = (subtotal - discount) * 0.07;
    return {
      lines,
      bagId,
      setBag: (id) => setBagId((cur) => (cur === id ? null : id)),
      setItemQty: (line, qty) =>
        setItems((cur) => {
          const next = cur.filter((i) => i.id !== line.id);
          if (qty > 0) next.push({ ...line, qty });
          return next;
        }),
      qtyOf: (id) => items.find((i) => i.id === id)?.qty ?? 0,
      subtotal,
      discount,
      tax,
      total: subtotal - discount + tax,
      itemCount: lines.reduce((s, l) => s + l.qty, 0),
      schedule,
      setSchedule: (patch) => setScheduleState((cur) => ({ ...cur, ...patch })),
    };
  }, [bagId, items, schedule]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}

export const money = (n: number) => `$${n.toFixed(2)}`;
