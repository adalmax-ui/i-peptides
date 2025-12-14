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
    toast.success(`${p.title} добавлен в корзину!`);
  };

  return (
    <div className="group glass rounded-xl2 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-slate-200/50 hover:border-blue-200">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Link href={`/shop/${p.slug}`} className="font-semibold hover:underline">
              {p.title}
            </Link>
            <p className="mt-1 text-sm text-slate-600">{p.short}</p>
          </div>
          <Badge>{p.category}</Badge>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="text-sm">
            <span className="font-semibold">
              {(p.priceCents / 100).toFixed(2)} {p.currency}
            </span>
            {!p.inStock && <span className="ml-2 text-xs text-slate-500">(нет в наличии)</span>}
          </div>

          <Button onClick={handleAddToCart} disabled={!p.inStock} className="transition-all duration-200">
            В корзину
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
