"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge, Button } from "./ui";
import type { Peptide, Product } from "@/lib/types";
import { useCart } from "@/lib/cart";
import toast from "react-hot-toast";

export function ProductCard({ p }: { p: Product }) {
  const add = useCart((s) => s.add);

  const handleAddToCart = () => {
    add(p.id, 1);
    toast.success(`${p.title} добавлен в корзину!`, {
      icon: '✓',
      style: {
        background: '#10b981',
        color: '#fff',
      },
    });
  };

  return (
    <div className="group relative glass rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-2 border border-slate-200/50 hover:border-primary-300/50">
      {/* Градиентная подсветка при наведении */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-secondary-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Изображение */}
      <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50">
        <Image
          src={p.image}
          alt={p.title}
          fill
          className="object-contain transition-all duration-700 group-hover:scale-105"
        />

        {/* Оверлей градиент */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Метка Premium */}
        {p.tags.includes('premium') && (
          <div className="absolute top-3 right-3 px-4 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xs font-bold shadow-lg backdrop-blur-sm tracking-wide">
            PREMIUM
          </div>
        )}

        {/* Метка популярное */}
        {p.tags.includes('популярное') && (
          <div className="absolute top-3 left-3 px-4 py-1.5 rounded-lg bg-gradient-to-r from-rose-500 to-pink-600 text-white text-xs font-bold shadow-lg backdrop-blur-sm tracking-wide">
            ХИТ ПРОДАЖ
          </div>
        )}
      </div>

      {/* Контент */}
      <div className="relative p-5">
        <div className="mb-3">
          <Link href={`/shop/${p.slug}`} className="text-lg font-bold text-slate-900 hover:text-primary-600 transition-colors duration-200 line-clamp-1">
            {p.title}
          </Link>
          <p className="mt-2 text-sm text-slate-600 line-clamp-2 leading-relaxed">{p.short}</p>
        </div>

        {/* Преимущества */}
        {p.benefits && p.benefits.length > 0 && (
          <div className="mb-3 space-y-1">
            {p.benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                <span className="text-secondary-500 mt-0.5">✓</span>
                <span className="leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>
        )}

        <div className="flex items-center gap-2 mb-4">
          <span className="px-2 py-1 rounded-lg bg-secondary-50 text-secondary-700 text-xs font-medium">
            {p.category}
          </span>
          {p.inStock ? (
            <span className="px-2 py-1 rounded-lg bg-green-50 text-green-700 text-xs font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              В наличии
            </span>
          ) : (
            <span className="px-2 py-1 rounded-lg bg-slate-100 text-slate-500 text-xs font-medium">
              Нет в наличии
            </span>
          )}
        </div>

        <div className="flex items-center justify-between gap-3 pt-3 border-t border-slate-100">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-primary-600">
              {(p.priceCents / 100).toFixed(0)}{p.currency === "RUB" ? "₽" : p.currency === "USD" ? "$" : "€"}
            </span>
          </div>

          <Button
            onClick={handleAddToCart}
            disabled={!p.inStock}
            className="transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
          >
            Купить
          </Button>
        </div>
      </div>
    </div>
  );
}

export function PeptideCard({ pep }: { pep: Peptide }) {
  return (
    <Link href={`/peptides/${pep.slug}`} className="block">
      <div className="group glass rounded-2xl overflow-hidden transition-all hover:shadow-lg border border-slate-200 hover:border-secondary-400 shadow-sm hover:-translate-y-1 relative">
        {/* Левый цветной акцент */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary-500 to-secondary-600 opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Фоновый градиент при hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="relative p-6">
          <div className="flex items-start justify-between gap-3 mb-3">
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-secondary-600 transition-colors">
              {pep.name}
            </h3>
            <svg className="w-5 h-5 text-slate-400 group-hover:text-secondary-500 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed line-clamp-2 mb-4">{pep.summary}</p>

          <div className="flex items-center gap-2 flex-wrap">
            <Badge className="bg-secondary-50 text-secondary-700 border-secondary-200 font-medium">
              {pep.category}
            </Badge>
            <Badge variant="outline" className="text-slate-600 border-slate-300 font-medium">
              {pep.researchStatus === "Approved drug (context-specific)" ? "✓ Одобрен" :
               pep.researchStatus === "Clinical" ? "Клинические" :
               pep.researchStatus === "Early clinical" ? "Ранние испытания" :
               pep.researchStatus === "Preclinical" ? "Доклинические" : pep.researchStatus}
            </Badge>
          </div>

          {pep.aka && pep.aka.length > 0 && (
            <div className="mt-4 pt-4 border-t border-slate-100">
              <div className="text-xs text-slate-500 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Также известен как: {pep.aka.slice(0, 2).join(", ")}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
