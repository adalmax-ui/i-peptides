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
    <div className="group relative glass rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 border border-slate-200/50 hover:border-blue-300/50">
      {/* Градиентная подсветка при наведении */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Изображение */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50">
        <Image
          src={p.image}
          alt={p.title}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
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
          <Link href={`/shop/${p.slug}`} className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors duration-200 line-clamp-1">
            {p.title}
          </Link>
          <p className="mt-2 text-sm text-slate-600 line-clamp-2 leading-relaxed">{p.short}</p>
        </div>

        {/* Описание действия */}
        {p.description && (
          <div className="mb-3 p-3 rounded-lg bg-blue-50/50 border border-blue-100">
            <div className="text-xs font-semibold text-blue-700 mb-1">Как работает:</div>
            <p className="text-xs text-slate-700 leading-relaxed line-clamp-3">
              {p.description}
            </p>
          </div>
        )}

        {/* Преимущества */}
        {p.benefits && p.benefits.length > 0 && (
          <div className="mb-3 space-y-1">
            {p.benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                <span className="text-blue-500 mt-0.5">✓</span>
                <span className="leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>
        )}

        <div className="flex items-center gap-2 mb-4">
          <span className="px-2 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-medium">
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
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
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
    <div className="group glass rounded-xl2 p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-slate-200/50 hover:border-purple-200">
      <div className="flex items-start justify-between gap-3">
        <div>
          <Link href={`/peptides/${pep.slug}`} className="font-semibold hover:underline">
            {pep.name}
          </Link>
          <p className="mt-1 text-sm text-slate-600">{pep.summary}</p>
        </div>
        <Badge>{pep.category}</Badge>
      </div>
      <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-700">
        <Badge>Статус: {pep.researchStatus}</Badge>
        {pep.aka.slice(0, 2).map((a) => (
          <Badge key={a}>Также: {a}</Badge>
        ))}
      </div>
    </div>
  );
}
