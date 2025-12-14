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
        alert("Не удалось создать сессию оплаты");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Что-то пошло не так. Попробуйте ещё раз.");
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
        <h1 className="text-2xl font-semibold">Корзина</h1>
        <p className="mt-1 text-slate-600">Оплата здесь демо-версия. Подключите Stripe Checkout / PayPal в соответствии с требованиями вашего бизнеса.</p>
      </div>

      {rows.length === 0 ? (
        <div className="glass rounded-xl2 p-8">
          <div className="font-semibold">Ваша корзина пуста</div>
          <Link href="/shop" className="mt-2 inline-block text-sm text-blue-700 hover:underline">Перейти в магазин →</Link>
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
                    aria-label="Удалить товар"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-3 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-600">Кол-во:</span>
                    <div className="flex items-center gap-1 rounded-xl border border-slate-200 bg-white/70">
                      <button
                        onClick={() => decrementQty(r.productId, r.qty)}
                        disabled={r.qty <= 1}
                        className="rounded-l-xl p-2 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition"
                        aria-label="Уменьшить количество"
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
                        aria-label="Увеличить количество"
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
            <button className="text-sm text-slate-600 hover:underline" onClick={clear}>Очистить корзину</button>
          </div>

          <div className="glass rounded-xl2 p-5 h-fit">
            <div className="font-semibold">Итого</div>
            <div className="mt-3 flex items-center justify-between text-sm text-slate-700">
              <span>Всего</span>
              <span className="font-semibold">{(total/100).toFixed(2)} EUR</span>
            </div>

            <div className="mt-4 space-y-2">
              <Button className="w-full" onClick={handleCheckout} disabled={loading}>
                {loading ? "Обработка..." : "Перейти к оплате"}
              </Button>
              <Link href="/shop" className="block text-center text-sm text-blue-700 hover:underline">Продолжить покупки</Link>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Замените логику валюты, НДС и правила доставки на ваши реальные настройки.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
