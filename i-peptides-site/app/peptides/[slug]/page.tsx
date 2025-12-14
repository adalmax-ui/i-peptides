import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Badge } from "@/components/ui";
import { peptides, products } from "@/lib/data";
import { ProductCard } from "@/components/Cards";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const pep = peptides.find((x) => x.slug === params.slug);

  if (!pep) {
    return {
      title: "Peptide Not Found",
    };
  }

  return {
    title: `${pep.name} | Peptide Database | i-peptides`,
    description: pep.summary,
    keywords: [pep.name, ...pep.aka, pep.category, "peptide", "research"].join(", "),
    openGraph: {
      title: `${pep.name} - ${pep.category}`,
      description: pep.summary,
      type: "article",
    },
    twitter: {
      card: "summary",
      title: `${pep.name} - ${pep.category}`,
      description: pep.summary,
    },
  };
}

export async function generateStaticParams() {
  return peptides.map((p) => ({
    slug: p.slug,
  }));
}

export default function PeptideDetail({ params }: { params: { slug: string } }) {
  const pep = peptides.find((x) => x.slug === params.slug);
  if (!pep) return notFound();

  const linkedProducts = products.filter((p) => p.peptideSlug === pep.slug);

  return (
    <div className="space-y-8">
      <div className="glass rounded-xl2 p-8">
        <div className="flex flex-wrap gap-2">
          <Badge>{pep.category}</Badge>
          <Badge>Status: {pep.researchStatus}</Badge>
          {pep.aka.map((a) => <Badge key={a}>AKA: {a}</Badge>)}
        </div>

        <h1 className="mt-4 text-2xl font-semibold">{pep.name}</h1>
        <p className="mt-2 text-slate-600">{pep.summary}</p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <div className="font-semibold">Key points</div>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-slate-600">
              {pep.keyPoints.map((x) => <li key={x}>{x}</li>)}
            </ul>
          </div>
          <div>
            <div className="font-semibold">Safety notes</div>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-slate-600">
              {pep.safetyNotes.map((x) => <li key={x}>{x}</li>)}
            </ul>
            <Link href="/legal/disclaimer" className="mt-3 inline-block text-sm text-blue-700 hover:underline">
              Read disclaimer →
            </Link>
          </div>
        </div>
      </div>

      <section className="space-y-4">
        <div className="flex items-end justify-between">
          <h2 className="text-xl font-semibold">Products linked to this peptide</h2>
          <Link href="/shop" className="text-sm text-blue-700 hover:underline">Go to shop</Link>
        </div>

        {linkedProducts.length === 0 ? (
          <p className="text-slate-600">No products linked yet. Add mappings in the database later.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-3">
            {linkedProducts.map((p) => <ProductCard key={p.id} p={p} />)}
          </div>
        )}
      </section>
    </div>
  );
}
