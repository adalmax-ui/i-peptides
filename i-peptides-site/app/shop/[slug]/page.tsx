import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Badge } from "@/components/ui";
import { products, peptides } from "@/lib/data";
import { AddToCart } from "./ui.client";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug);

  if (!p) {
    return {
      title: "Товар не найден",
    };
  }

  return {
    title: `${p.title} | i-peptides`,
    description: p.short,
    openGraph: {
      title: p.title,
      description: p.short,
      images: [{ url: p.image, width: 1200, height: 900, alt: p.title }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: p.title,
      description: p.short,
      images: [p.image],
    },
  };
}

export async function generateStaticParams() {
  return products.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug);
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
            {(p.priceCents / 100).toFixed(2)} {p.currency === "RUB" ? "₽" : p.currency === "USD" ? "$" : "€"}
            {!p.inStock && <span className="ml-2 text-sm text-slate-500">(нет в наличии)</span>}
          </div>

          <AddToCart productId={p.id} disabled={!p.inStock} />

          {peptide && (
            <div className="glass rounded-xl2 p-4">
              <div className="text-sm font-semibold">Информация о пептиде</div>
              <p className="mt-1 text-sm text-slate-600">{peptide.summary}</p>
              <Link href={`/peptides/${peptide.slug}`} className="mt-2 inline-block text-sm text-blue-700 hover:underline">
                Подробнее о {peptide.name} →
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Полное описание товара */}
      {p.description && (
        <div className="glass rounded-xl2 p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Как работает</h2>
          <p className="text-slate-700 leading-relaxed">{p.description}</p>
        </div>
      )}

      {/* Преимущества */}
      {p.benefits && p.benefits.length > 0 && (
        <div className="glass rounded-xl2 p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Ключевые преимущества</h2>
          <div className="grid gap-3">
            {p.benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-blue-50/50 border border-blue-100">
                <span className="text-blue-500 text-xl mt-0.5 flex-shrink-0">✓</span>
                <span className="text-slate-700 leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Дополнительная информация */}
      <div className="glass rounded-xl2 p-6">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Информация о продукте</h2>
        <div className="grid gap-4 text-sm">
          <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-50">
            <span className="text-2xl">📦</span>
            <div>
              <div className="font-semibold text-slate-900 mb-1">Форма выпуска</div>
              <p className="text-slate-600">Лиофилизированный порошок для приготовления инъекционного раствора</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-50">
            <span className="text-2xl">❄️</span>
            <div>
              <div className="font-semibold text-slate-900 mb-1">Хранение</div>
              <p className="text-slate-600">Хранить в холодильнике при температуре 2-8°C. После разведения использовать в течение 30 дней.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-50">
            <span className="text-2xl">🔬</span>
            <div>
              <div className="font-semibold text-slate-900 mb-1">Качество</div>
              <p className="text-slate-600">Чистота &gt;98% (HPLC). Сертификат анализа (COA) доступен для каждой партии.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-50">
            <span className="text-2xl">🚚</span>
            <div>
              <div className="font-semibold text-slate-900 mb-1">Доставка</div>
              <p className="text-slate-600">Доставка по России 3-7 дней. Упаковка с хладоэлементами для сохранения температурного режима.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
