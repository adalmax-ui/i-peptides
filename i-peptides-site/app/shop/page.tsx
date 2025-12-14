"use client";

import { ProductCard } from "@/components/Cards";
import { products } from "@/lib/data";
import { useState, useMemo } from "react";

export default function ShopPage() {
  const [category, setCategory] = useState<string>("all");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState<"name" | "price-asc" | "price-desc">("name");

  const categories = useMemo(() => {
    const cats = new Set(products.map((p) => p.category));
    return ["all", ...Array.from(cats)];
  }, []);

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (category !== "all") {
      filtered = filtered.filter((p) => p.category === category);
    }

    if (inStockOnly) {
      filtered = filtered.filter((p) => p.inStock);
    }

    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === "name") return a.title.localeCompare(b.title);
      if (sortBy === "price-asc") return a.priceCents - b.priceCents;
      if (sortBy === "price-desc") return b.priceCents - a.priceCents;
      return 0;
    });

    return sorted;
  }, [category, inStockOnly, sortBy]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Магазин</h1>
        <p className="mt-1 text-slate-600">Просматривайте нашу коллекцию с фильтрами и сортировкой.</p>
      </div>

      <div className="glass rounded-xl2 p-4 space-y-4">
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex-1 min-w-[200px]">
            <label className="text-sm text-slate-600 mb-2 block">Категория</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white/70 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-600/30"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === "all" ? "Все категории" : cat}
                </option>
              ))}
            </select>
          </div>

          <div className="flex-1 min-w-[200px]">
            <label className="text-sm text-slate-600 mb-2 block">Сортировать по</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full rounded-xl border border-slate-200 bg-white/70 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-600/30"
            >
              <option value="name">Название</option>
              <option value="price-asc">Цена: по возрастанию</option>
              <option value="price-desc">Цена: по убыванию</option>
            </select>
          </div>

          <div className="flex items-end h-full pt-7">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
                className="rounded border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-600/30"
              />
              <span className="text-sm text-slate-700">Только в наличии</span>
            </label>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-slate-600">
          <span>Показано {filteredProducts.length} из {products.length} товаров</span>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {filteredProducts.map((p) => <ProductCard key={p.id} p={p} />)}
      </div>

      {filteredProducts.length === 0 && (
        <div className="glass rounded-xl2 p-8 text-center">
          <p className="text-slate-600">Товары, соответствующие вашим фильтрам, не найдены.</p>
        </div>
      )}
    </div>
  );
}
