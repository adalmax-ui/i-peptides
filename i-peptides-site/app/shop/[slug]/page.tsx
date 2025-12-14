import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui";
import { products, peptides } from "@/lib/data";
import { AddToCart } from "./ui.client";

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const p = products.find((x) => x.slug === params.slug);
  if (!p) return notFound();

  const peptide = p.peptideSlug ? peptides.find((x) => x.slug === p.peptideSlug) : null;

  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="glass overflow-hidden rounded-xl2">
          <div className="relative aspect-[4/3]">
            <Image src={p.image} alt={p.title} fill className="object-cover" />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Badge>{p.category}</Badge>
            {p.tags.slice(0, 3).map((t) => <Badge key={t}>{t}</Badge>)}
          </div>

          <h1 className="text-2xl font-semibold">{p.title}</h1>
          <p className="text-slate-600">{p.short}</p>

          <div className="text-lg font-semibold">
            {(p.priceCents / 100).toFixed(2)} {p.currency}
            {!p.inStock && <span className="ml-2 text-sm text-slate-500">(out of stock)</span>}
          </div>

          <AddToCart productId={p.id} disabled={!p.inStock} />

          {peptide && (
            <div className="glass rounded-xl2 p-4">
              <div className="text-sm font-semibold">Linked to database entry</div>
              <p className="mt-1 text-sm text-slate-600">{peptide.summary}</p>
              <Link href={`/peptides/${peptide.slug}`} className="mt-2 inline-block text-sm text-blue-700 hover:underline">
                Open {peptide.name} profile →
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="glass rounded-xl2 p-6">
        <h2 className="font-semibold">Documentation (placeholder)</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
          <li>Batch / COA files (upload later)</li>
          <li>Storage notes (vendor verified)</li>
          <li>Shipping & returns</li>
        </ul>
      </div>
    </div>
  );
}
