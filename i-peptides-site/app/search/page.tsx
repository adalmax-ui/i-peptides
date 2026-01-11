"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { peptides, products } from "@/lib/data";
import { Badge } from "@/components/ui";
import { Search as SearchIcon } from "lucide-react";

export default function SearchPage() {
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<"all" | "products" | "peptides">("all");

  const res = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return { products: [], peptides: [] };

    const p = products.filter((x) => {
      const searchText = [x.title, x.short, x.category, x.tags.join(" ")].join(" ").toLowerCase();
      return searchText.includes(query) || query.split(" ").some(term => searchText.includes(term));
    });

    const pep = peptides.filter((x) => {
      const searchText = [x.name, x.aka.join(" "), x.category, x.summary].join(" ").toLowerCase();
      return searchText.includes(query) || query.split(" ").some(term => searchText.includes(term));
    });

    return { products: p, peptides: pep };
  }, [q]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Поиск</h1>
        <p className="mt-1 text-slate-600">Поиск по товарам и базе знаний о пептидах. Введите название, категорию или ключевые слова.</p>
      </div>

      <div className="glass rounded-xl2 p-4">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Например: BPC, GLP-1, восстановление, набор…"
          className="w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600/30"
        />
        <div className="mt-2 text-xs text-slate-500">Поиск работает по названиям, синонимам и категориям товаров</div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Товары в магазине</h2>
            <Badge>{res.products.length}</Badge>
          </div>
          <div className="space-y-2">
            {res.products.map((p) => (
              <Link key={p.id} href={`/shop/${p.slug}`} className="glass block rounded-xl2 p-4 hover:bg-white/80">
                <div className="font-semibold">{p.title}</div>
                <div className="mt-1 text-sm text-slate-600">{p.short}</div>
              </Link>
            ))}
            {q && res.products.length === 0 && <div className="text-sm text-slate-600">Товары не найдены</div>}
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">База знаний о пептидах</h2>
            <Badge>{res.peptides.length}</Badge>
          </div>
          <div className="space-y-2">
            {res.peptides.map((pep) => (
              <Link key={pep.id} href={`/peptides/${pep.slug}`} className="glass block rounded-xl2 p-4 hover:bg-white/80">
                <div className="font-semibold">{pep.name}</div>
                <div className="mt-1 text-sm text-slate-600">{pep.summary}</div>
              </Link>
            ))}
            {q && res.peptides.length === 0 && <div className="text-sm text-slate-600">Информация не найдена</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
