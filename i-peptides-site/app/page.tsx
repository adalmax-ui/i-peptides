import Link from "next/link";
import { Badge, Button } from "@/components/ui";
import { ProductCard, PeptideCard } from "@/components/Cards";
import { peptides, products } from "@/lib/data";

export default function HomePage() {
  const featuredProducts = products.slice(0, 3);
  const featuredPeptides = peptides.slice(0, 3);

  return (
    <div className="space-y-10">
      <section className="glass rounded-xl2 p-8 md:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
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

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="glass rounded-xl2 p-4">
            <div className="font-semibold">Глобальный поиск</div>
            <p className="mt-1 text-sm text-slate-600">По товарам, пептидам и гайдам — с подсказками и алиасами.</p>
          </div>
          <div className="glass rounded-xl2 p-4">
            <div className="font-semibold">Схема “не блуждать”</div>
            <p className="mt-1 text-sm text-slate-600">Категории + теги + “Related” блоки + сравнения.</p>
          </div>
          <div className="glass rounded-xl2 p-4">
            <div className="font-semibold">Масштабирование</div>
            <p className="mt-1 text-sm text-slate-600">От mock‑данных к БД (PostgreSQL/Prisma) без переписывания UI.</p>
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
