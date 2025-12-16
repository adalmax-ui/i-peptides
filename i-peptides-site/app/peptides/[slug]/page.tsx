import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Badge } from "@/components/ui";
import { peptides, products } from "@/lib/data";
import { ProductCard } from "@/components/Cards";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const pep = peptides.find((x) => x.slug === slug);

  if (!pep) {
    return {
      title: "Пептид не найден",
    };
  }

  return {
    title: `${pep.name} | База знаний пептидов | i-peptides`,
    description: pep.summary,
    keywords: [pep.name, ...pep.aka, pep.category, "пептид", "исследования", "пептиды"].join(", "),
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

export default async function PeptideDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pep = peptides.find((x) => x.slug === slug);
  if (!pep) return notFound();

  const linkedProducts = products.filter((p) => p.peptideSlug === pep.slug);

  // Функция для парсинга текста с **жирным** форматированием
  const parseFormattedText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, idx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={idx}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <div className="space-y-8">
      <div className="glass rounded-xl2 p-8">
        <div className="flex flex-wrap gap-2">
          <Badge>{pep.category}</Badge>
          <Badge>Статус: {pep.researchStatus}</Badge>
          {pep.aka.map((a) => <Badge key={a}>Также: {a}</Badge>)}
        </div>

        <h1 className="mt-4 text-3xl font-bold text-slate-900">{pep.name}</h1>
        <p className="mt-3 text-lg text-slate-600 leading-relaxed">{pep.summary}</p>

        <div className="mt-8 space-y-8">
          {/* История исследований */}
          {pep.researchHistory && (
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-lg font-semibold text-slate-900 mb-3">История исследований</div>
              <p className="text-slate-700 leading-relaxed">{pep.researchHistory}</p>
            </div>
          )}

          {/* Механизм действия */}
          {pep.mechanismOfAction && (
            <div>
              <div className="text-xl font-semibold text-slate-900 mb-3">Механизм действия</div>
              <div className="text-slate-700 leading-relaxed space-y-3">
                {pep.mechanismOfAction.split('\n').map((line, idx) => (
                  <div key={idx}>{parseFormattedText(line)}</div>
                ))}
              </div>
            </div>
          )}

          {/* Области применения */}
          {pep.applications && pep.applications.length > 0 && (
            <div>
              <div className="text-xl font-semibold text-slate-900 mb-3">Области применения</div>
              <div className="grid md:grid-cols-2 gap-3">
                {pep.applications.map((app) => (
                  <div key={app} className="flex items-start gap-2 p-3 rounded-lg bg-blue-50 border border-blue-100">
                    <span className="text-blue-600 font-bold">→</span>
                    <span className="text-slate-700">{app}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Ключевые результаты */}
          <div>
            <div className="text-xl font-semibold text-slate-900 mb-3">Ключевые результаты исследований</div>
            <ul className="space-y-3">
              {pep.keyPoints.map((x) => (
                <li key={x} className="flex items-start gap-3">
                  <span className="text-blue-500 text-lg mt-1">•</span>
                  <span className="text-slate-700 leading-relaxed">{x}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Дисклеймер */}
          <div className="mt-8 p-6 rounded-xl border-2 border-amber-200 bg-amber-50/50">
            <div className="flex items-start gap-3">
              <div className="text-2xl">⚠️</div>
              <div>
                <div className="font-bold text-amber-900 mb-2">Важная информация</div>
                <p className="text-sm text-amber-800 leading-relaxed">
                  Информация на этой странице предоставлена исключительно в образовательных целях.
                  Описанные пептиды не являются лекарственными средствами и не предназначены для
                  диагностики, лечения или профилактики каких-либо заболеваний. Перед применением
                  любых пептидов обязательно проконсультируйтесь с квалифицированным врачом или
                  специалистом в области здравоохранения. Результаты исследований могут варьироваться
                  в зависимости от индивидуальных особенностей организма.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {linkedProducts.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-semibold">Товары с этим пептидом</h2>
            <Link href="/shop" className="text-sm text-blue-700 hover:underline">Смотреть все →</Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {linkedProducts.map((p) => <ProductCard key={p.id} p={p} />)}
          </div>
        </section>
      )}
    </div>
  );
}
