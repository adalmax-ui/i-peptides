"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge, Button } from "./ui";
import type { Peptide, Product } from "@/lib/types";
import { useCart } from "@/lib/cart";

export function ProductCard({ p }: { p: Product }) {
  const add = useCart((s) => s.add);

  return (
    <div className="glass rounded-xl2 overflow-hidden">
      <div className="relative aspect-[4/3]">
        <Image src={p.image} alt={p.title} fill className="object-cover" />
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
            {!p.inStock && <span className="ml-2 text-xs text-slate-500">(out of stock)</span>}
          </div>

          <Button onClick={() => add(p.id, 1)} disabled={!p.inStock}>
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export function PeptideCard({ pep }: { pep: Peptide }) {
  return (
    <div className="glass rounded-xl2 p-4">
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
        <Badge>Status: {pep.researchStatus}</Badge>
        {pep.aka.slice(0, 2).map((a) => (
          <Badge key={a}>AKA: {a}</Badge>
        ))}
      </div>
    </div>
  );
}
