"use client";

import { ProductCard } from "@/components/Cards";
import { products } from "@/lib/data";
import { useState, useMemo } from "react";

export default function ShopPage() {
  const [category, setCategory] = useState<string>("all");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState<"name" | "price-asc" | "price-desc">("name");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = useMemo(() => {
    const cats = new Set(products.map((p) => p.category));
    return ["all", ...Array.from(cats)];
  }, []);

  const categoryColors: Record<string, string> = {
    "all": "bg-gradient-to-br from-slate-400 to-slate-500",
    "Метаболизм": "bg-gradient-to-br from-yellow-400 to-orange-500",
    "Жиросжигание": "bg-gradient-to-br from-red-400 to-pink-500",
    "Гормон роста": "bg-gradient-to-br from-green-400 to-emerald-500",
    "Иммунитет": "bg-gradient-to-br from-blue-400 to-cyan-500",
    "Омоложение": "bg-gradient-to-br from-purple-400 to-pink-500",
    "Anti-age": "bg-gradient-to-br from-violet-400 to-purple-500",
    "Регенерация": "bg-gradient-to-br from-teal-400 to-green-500",
    "Энергия": "bg-gradient-to-br from-amber-400 to-yellow-500",
    "Либидо": "bg-gradient-to-br from-rose-400 to-red-500",
    "Нейропептиды": "bg-gradient-to-br from-indigo-400 to-blue-500",
  };

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
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Магазин пептидов
        </h1>
        <p className="mt-2 text-slate-600">Выберите идеальный пептид для ваших целей</p>
      </div>

      {/* Основная сетка: sidebar + товары */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Боковой виджет фильтров */}
        <aside className="lg:w-80 flex-shrink-0">
          <div className="glass rounded-2xl border border-slate-200/50 sticky top-6 flex flex-col max-h-[calc(100vh-3rem)] overflow-hidden">
            {/* Заголовок виджета с градиентом */}
            <div className="relative p-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex-shrink-0">
              <div className="absolute inset-0 bg-black/10" />
              <div className="relative flex items-center gap-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                <h2 className="text-lg font-bold text-white">Фильтры</h2>
              </div>
            </div>

            <div className="p-5 space-y-5 overflow-y-auto flex-1 custom-scrollbar">
              {/* Поиск */}
              <div>
                <label className="text-sm font-semibold text-slate-700 mb-2 block">
                  Поиск по названию
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Начните вводить..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-300 transition-all pl-10"
                  />
                  <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Категории */}
              <div>
                <label className="text-sm font-semibold text-slate-700 mb-3 block">
                  Категория
                </label>
                <div className="space-y-2">
                  {categories.map((cat) => {
                    const isActive = category === cat;
                    const colorClass = categoryColors[cat] || "bg-gradient-to-br from-slate-400 to-slate-500";
                    const productCount = cat === "all"
                      ? products.length
                      : products.filter(p => p.category === cat).length;

                    return (
                      <button
                        key={cat}
                        onClick={() => setCategory(cat)}
                        className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-left transition-all ${
                          isActive
                            ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md"
                            : "bg-white/50 hover:bg-white/80 text-slate-700 hover:shadow-sm"
                        }`}
                      >
                        <span className="flex items-center gap-2.5">
                          <span className={`w-2.5 h-2.5 rounded-full ${isActive ? 'bg-white' : colorClass} flex-shrink-0`} />
                          <span className="text-sm font-medium">
                            {cat === "all" ? "Все категории" : cat}
                          </span>
                        </span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          isActive ? "bg-white/20" : "bg-slate-200"
                        }`}>
                          {productCount}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Сортировка */}
              <div>
                <label className="text-sm font-semibold text-slate-700 mb-2 block">
                  Сортировать по
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-300 transition-all"
                >
                  <option value="name">Название (А-Я)</option>
                  <option value="price-asc">Цена: дешевле</option>
                  <option value="price-desc">Цена: дороже</option>
                </select>
              </div>

              {/* Наличие */}
              <div>
                <label className="flex items-center gap-3 cursor-pointer p-3 rounded-xl hover:bg-white/50 transition-all">
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="w-5 h-5 rounded border-slate-300 text-purple-600 focus:ring-2 focus:ring-purple-500/30"
                  />
                  <span className="text-sm font-medium text-slate-700">Только в наличии</span>
                </label>
              </div>

              {/* Счетчик результатов */}
              <div className="pt-3 border-t border-slate-200">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Найдено товаров:</span>
                  <span className="font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {filteredProducts.length}
                  </span>
                </div>
              </div>

              {/* Кнопка сброса */}
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium transition-all flex items-center justify-center gap-2"
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
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:shadow-lg transition-all"
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
