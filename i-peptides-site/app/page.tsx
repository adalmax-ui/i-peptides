import Link from "next/link";
import { Badge, Button } from "@/components/ui";
import { ProductCard, PeptideCard } from "@/components/Cards";
import { peptides, products } from "@/lib/data";

export default function HomePage() {
  const featuredProducts = products.slice(0, 3);
  const featuredPeptides = peptides.slice(0, 3);

  return (
    <div className="space-y-16">
      {/* Hero секция */}
      <section className="relative overflow-hidden glass rounded-xl2 p-8 md:p-12 before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-50/50 before:via-transparent before:to-purple-50/30 before:rounded-xl2 before:pointer-events-none">
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
            Качественные пептиды для исследований
          </h1>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Широкий выбор сертифицированных пептидов высокой чистоты.
            Быстрая доставка, гарантия качества и техподдержка специалистов.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link href="/shop">
              <Button className="px-8 py-6 text-lg">Каталог товаров</Button>
            </Link>
            <Link href="/peptides">
              <Button variant="ghost" className="px-8 py-6 text-lg">База знаний о пептидах</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Категории пептидов */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-center">Категории пептидов</h2>
        <div className="grid gap-5 md:grid-cols-4">
          <Link href="/shop?category=Growth" className="group">
            <div className="glass rounded-xl2 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-slate-200/50 hover:border-blue-300 text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-3xl shadow-lg mb-4">💪</div>
              <h3 className="font-semibold text-slate-800 mb-2">Рост и восстановление</h3>
              <p className="text-sm text-slate-600">Пептиды для мышечного роста</p>
            </div>
          </Link>

          <Link href="/shop?category=Recovery" className="group">
            <div className="glass rounded-xl2 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-slate-200/50 hover:border-green-300 text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white text-3xl shadow-lg mb-4">🔬</div>
              <h3 className="font-semibold text-slate-800 mb-2">Восстановление</h3>
              <p className="text-sm text-slate-600">Ускорение регенерации тканей</p>
            </div>
          </Link>

          <Link href="/shop?category=Performance" className="group">
            <div className="glass rounded-xl2 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-slate-200/50 hover:border-purple-300 text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white text-3xl shadow-lg mb-4">⚡</div>
              <h3 className="font-semibold text-slate-800 mb-2">Производительность</h3>
              <p className="text-sm text-slate-600">Улучшение физических показателей</p>
            </div>
          </Link>

          <Link href="/shop" className="group">
            <div className="glass rounded-xl2 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-slate-200/50 hover:border-orange-300 text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white text-3xl shadow-lg mb-4">📦</div>
              <h3 className="font-semibold text-slate-800 mb-2">Все товары</h3>
              <p className="text-sm text-slate-600">Полный каталог продукции</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Преимущества */}
      <section className="glass rounded-xl2 p-8 md:p-10">
        <h2 className="text-2xl font-bold text-center mb-8">Почему выбирают нас</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="text-center">
            <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white text-2xl shadow-lg mb-4">✓</div>
            <h3 className="font-semibold text-slate-800 mb-2">Гарантия качества</h3>
            <p className="text-sm text-slate-600 leading-relaxed">Все пептиды проходят лабораторный контроль, сертификаты качества (COA) на каждую партию</p>
          </div>

          <div className="text-center">
            <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-2xl shadow-lg mb-4">🚚</div>
            <h3 className="font-semibold text-slate-800 mb-2">Быстрая доставка</h3>
            <p className="text-sm text-slate-600 leading-relaxed">Отправка в день заказа, надежная упаковка и отслеживание посылки</p>
          </div>

          <div className="text-center">
            <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white text-2xl shadow-lg mb-4">💬</div>
            <h3 className="font-semibold text-slate-800 mb-2">Поддержка 24/7</h3>
            <p className="text-sm text-slate-600 leading-relaxed">Консультации специалистов, помощь в выборе и ответы на любые вопросы</p>
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
