"use client";

import Link from "next/link";
import { useMemo } from "react";
import { products } from "@/lib/data";
import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui";

export default function CartPage() {
  const items = useCart((s) => s.items);
  const remove = useCart((s) => s.remove);
  const setQty = useCart((s) => s.setQty);
  const clear = useCart((s) => s.clear);

  const rows = useMemo(() => {
    return items
      .map((it) => {
        const p = products.find((x) => x.id === it.productId);
        if (!p) return null;
        return { ...it, p, line: (p.priceCents * it.qty) };
      })
      .filter(Boolean) as { productId: string; qty: number; p: typeof products[number]; line: number }[];
  }, [items]);

  const total = rows.reduce((acc, r) => acc + r.line, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Cart</h1>
        <p className="mt-1 text-slate-600">Checkout здесь заглушка. Подключите Stripe Checkout / PayPal по требованиям вашего бизнеса.</p>
      </div>

      {rows.length === 0 ? (
        <div className="glass rounded-xl2 p-8">
          <div className="font-semibold">Your cart is empty</div>
          <Link href="/shop" className="mt-2 inline-block text-sm text-blue-700 hover:underline">Go to shop →</Link>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 space-y-3">
            {rows.map((r) => (
              <div key={r.productId} className="glass rounded-xl2 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <Link href={`/shop/${r.p.slug}`} className="font-semibold hover:underline">{r.p.title}</Link>
                    <div className="mt-1 text-sm text-slate-600">{(r.p.priceCents/100).toFixed(2)} {r.p.currency}</div>
                  </div>
                  <button className="text-sm text-slate-600 hover:underline" onClick={() => remove(r.productId)}>Remove</button>
                </div>

                <div className="mt-3 flex items-center gap-3">
                  <div className="text-sm text-slate-600">Qty</div>
                  <input
                    type="number"
                    min={1}
                    value={r.qty}
                    onChange={(e) => setQty(r.productId, Number(e.target.value))}
                    className="w-20 rounded-xl border border-slate-200 bg-white/70 px-3 py-2 outline-none"
                  />
                  <div className="ml-auto text-sm font-semibold">
                    {(r.line/100).toFixed(2)} {r.p.currency}
                  </div>
                </div>
              </div>
            ))}
            <button className="text-sm text-slate-600 hover:underline" onClick={clear}>Clear cart</button>
          </div>

          <div className="glass rounded-xl2 p-5 h-fit">
            <div className="font-semibold">Summary</div>
            <div className="mt-3 flex items-center justify-between text-sm text-slate-700">
              <span>Total</span>
              <span className="font-semibold">{(total/100).toFixed(2)} EUR</span>
            </div>

            <div className="mt-4 space-y-2">
              <Button className="w-full" onClick={() => alert("Connect Stripe Checkout here")}>Proceed to checkout</Button>
              <Link href="/shop" className="block text-center text-sm text-blue-700 hover:underline">Continue shopping</Link>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Replace currency logic, tax/VAT, and shipping rules with your real setup.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
