"use client";

import { ProductCard } from "@/components/Cards";
import { products } from "@/lib/data";
import { useState, useMemo } from "react";

export default function ShopPage() {
  const [category, setCategory] = useState<string>("all");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState<"name" | "price-asc" | "price-desc" | "popular" | "discount">("name");
  const [searchQuery, setSearchQuery] = useState("");

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

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(query) ||
        p.description?.toLowerCase().includes(query)
      );
    }

    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === "name") return a.title.localeCompare(b.title);
      if (sortBy === "price-asc") return a.priceCents - b.priceCents;
      if (sortBy === "price-desc") return b.priceCents - a.priceCents;
      if (sortBy === "popular") return (b.rating || 0) - (a.rating || 0);
      if (sortBy === "discount") return (b.discount || 0) - (a.discount || 0);
      return 0;
    });

    return sorted;
  }, [category, inStockOnly, sortBy, searchQuery]);

  const resetFilters = () => {
    setCategory("all");
    setInStockOnly(false);
    setSortBy("name");
    setSearchQuery("");
  };

  const hasActiveFilters = category !== "all" || inStockOnly || searchQuery.trim() !== "";

  return (
    <div className="space-y-6">
      {/* Заголовок страницы */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Магазин пептидов
        </h1>
        <p className="mt-2 text-slate-600">Выберите идеальный пептид для ваших целей</p>
      </div>

      {/* Основная сетка: sidebar + товары */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Боковой виджет фильтров */}
        <aside className="lg:w-80 flex-shrink-0">
          <div className="glass rounded-2xl border border-slate-200 sticky top-6 flex flex-col max-h-[calc(100vh-3rem)] overflow-hidden shadow-sm">
            {/* Заголовок виджета */}
            <div className="p-4 border-b border-slate-200 bg-slate-50/50 flex-shrink-0">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                <h2 className="text-lg font-semibold text-slate-900">Фильтры</h2>
              </div>
            </div>

            <div className="p-5 space-y-5 overflow-y-auto flex-1 custom-scrollbar">
              {/* Поиск */}
              <div>
                <label className="text-sm font-semibold text-slate-700 mb-2 block">
                  Поиск
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Начните вводить..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all pl-10"
                  />
                  <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Сортировка */}
              <div>
                <label className="text-sm font-semibold text-slate-700 mb-2 block">
                  Сортировка
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                >
                  <option value="name">По названию</option>
                  <option value="price-asc">Цена: от меньшей</option>
                  <option value="price-desc">Цена: от большей</option>
                  <option value="popular">Популярные</option>
                  <option value="discount">Со скидкой</option>
                </select>
              </div>

              {/* Разделитель */}
              <div className="border-t border-slate-200" />

              {/* Наличие */}
              <div>
                <label className="text-sm font-semibold text-slate-700 mb-3 block">
                  Доступность
                </label>
                <label className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-slate-50 transition-all">
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-500/30"
                  />
                  <span className="text-sm font-medium text-slate-700">Только в наличии</span>
                </label>
              </div>

              {/* Категории */}
              <div>
                <label className="text-sm font-semibold text-slate-700 mb-3 block">
                  Категория
                </label>
                <div className="space-y-2">
                  {categories.map((cat) => {
                    const isActive = category === cat;
                    const productCount = cat === "all"
                      ? products.length
                      : products.filter(p => p.category === cat).length;

                    return (
                      <button
                        key={cat}
                        onClick={() => setCategory(cat)}
                        className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-left transition-all ${
                          isActive
                            ? "bg-blue-600 text-white shadow-sm"
                            : "bg-white hover:bg-slate-50 text-slate-700 border border-slate-200"
                        }`}
                      >
                        <span className="text-sm font-medium">
                          {cat === "all" ? "Все категории" : cat}
                        </span>
                        <span className={`text-xs px-2 py-0.5 rounded-md font-medium ${
                          isActive ? "bg-blue-500 text-white" : "bg-slate-100 text-slate-600"
                        }`}>
                          {productCount}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Счетчик результатов */}
              <div className="pt-3 border-t border-slate-200">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Найдено товаров:</span>
                  <span className="font-bold text-lg text-blue-600">
                    {filteredProducts.length}
                  </span>
                </div>
              </div>

              {/* Кнопка сброса */}
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium transition-all flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Сбросить фильтры</span>
                </button>
              )}
            </div>
          </div>
        </aside>

        {/* Область товаров */}
        <div className="flex-1">
          {filteredProducts.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((p) => <ProductCard key={p.id} p={p} />)}
            </div>
          ) : (
            <div className="glass rounded-2xl p-12 text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Товары не найдены
              </h3>
              <p className="text-slate-600 mb-6">
                Попробуйте изменить фильтры или сбросить их
              </p>
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-sm hover:shadow-md transition-all"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Сбросить фильтры</span>
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
