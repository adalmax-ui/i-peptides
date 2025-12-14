"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { products } from "@/lib/data";
import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui";
import { Minus, Plus, Trash2 } from "lucide-react";

export default function CartPage() {
  const items = useCart((s) => s.items);
  const remove = useCart((s) => s.remove);
  const setQty = useCart((s) => s.setQty);
  const clear = useCart((s) => s.clear);
  const [loading, setLoading] = useState(false);

  const handleQtyChange = (productId: string, value: string) => {
    const num = parseInt(value, 10);
    if (isNaN(num) || num < 1) return;
    if (num > 999) return;
    setQty(productId, num);
  };

  const incrementQty = (productId: string, currentQty: number) => {
    if (currentQty >= 999) return;
    setQty(productId, currentQty + 1);
  };

  const decrementQty = (productId: string, currentQty: number) => {
    if (currentQty <= 1) return;
    setQty(productId, currentQty - 1);
  };

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Failed to create checkout session");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
                  <div className="flex-1">
                    <Link href={`/shop/${r.p.slug}`} className="font-semibold hover:underline">{r.p.title}</Link>
                    <div className="mt-1 text-sm text-slate-600">{(r.p.priceCents/100).toFixed(2)} {r.p.currency}</div>
                  </div>
                  <button
                    className="rounded-lg p-2 text-slate-600 hover:bg-red-50 hover:text-red-600 transition"
                    onClick={() => remove(r.productId)}
                    aria-label="Remove item"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-3 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-600">Qty:</span>
                    <div className="flex items-center gap-1 rounded-xl border border-slate-200 bg-white/70">
                      <button
                        onClick={() => decrementQty(r.productId, r.qty)}
                        disabled={r.qty <= 1}
                        className="rounded-l-xl p-2 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <input
                        type="number"
                        min={1}
                        max={999}
                        value={r.qty}
                        onChange={(e) => handleQtyChange(r.productId, e.target.value)}
                        className="w-12 bg-transparent px-1 py-2 text-center text-sm outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      />
                      <button
                        onClick={() => incrementQty(r.productId, r.qty)}
                        disabled={r.qty >= 999}
                        className="rounded-r-xl p-2 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                  <div className="text-sm font-semibold">
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
              <Button className="w-full" onClick={handleCheckout} disabled={loading}>
                {loading ? "Processing..." : "Proceed to checkout"}
              </Button>
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
