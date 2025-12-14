import Link from "next/link";
import { Badge, Button } from "@/components/ui";
import { ProductCard, PeptideCard } from "@/components/Cards";
import { peptides, products } from "@/lib/data";

export default function HomePage() {
  const featuredProducts = products.slice(0, 3);
  const featuredPeptides = peptides.slice(0, 3);

  return (
    <div className="space-y-10">
      {/* Hero секция с градиентом */}
      <section className="relative overflow-hidden glass rounded-xl2 p-8 md:p-10 before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-50/50 before:via-transparent before:to-purple-50/30 before:rounded-xl2 before:pointer-events-none">
        <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Badge>Магазин + База знаний</Badge>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              i-peptides — магазин и база знаний, где ничего не нужно “искать вслепую”
            </h1>
            <p className="mt-4 text-slate-600">
              Один поиск по всему сайту, быстрые фильтры, понятные карточки и связка: <b>пептид → товары</b> и <b>товар → профиль пептида</b>.
              Контент здесь демонстрационный — вы позже подмените реальные описания, фото и юридические тексты.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/shop"><Button>Открыть магазин</Button></Link>
            <Link href="/peptides"><Button variant="ghost">База пептидов</Button></Link>
          </div>
        </div>

        <div className="relative z-10 mt-8 grid gap-4 md:grid-cols-3">
          <div className="glass rounded-xl2 p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-blue-100/50">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-xl shadow-lg">🔍</div>
              <div className="font-semibold text-slate-800">Глобальный поиск</div>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">По товарам, пептидам и гайдам — с подсказками и алиасами.</p>
          </div>
          <div className="glass rounded-xl2 p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-purple-100/50">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white text-xl shadow-lg">🗺️</div>
              <div className="font-semibold text-slate-800">Удобная навигация</div>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">Категории + теги + "Related" блоки + сравнения.</p>
          </div>
          <div className="glass rounded-xl2 p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-indigo-100/50">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center text-white text-xl shadow-lg">⚡</div>
              <div className="font-semibold text-slate-800">Масштабирование</div>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">От mock‑данных к БД (PostgreSQL/Prisma) без переписывания UI.</p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-end justify-between">
          <h2 className="text-xl font-semibold">Популярные товары</h2>
          <Link href="/shop" className="text-sm text-blue-700 hover:underline">Смотреть все</Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {featuredProducts.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-end justify-between">
          <h2 className="text-xl font-semibold">База пептидов</h2>
          <Link href="/peptides" className="text-sm text-blue-700 hover:underline">Посмотреть все</Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {featuredPeptides.map((pep) => <PeptideCard key={pep.id} pep={pep} />)}
        </div>
      </section>
    </div>
  );
}
