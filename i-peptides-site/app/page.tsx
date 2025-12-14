import Link from "next/link";
import { Button } from "@/components/ui";
import { ProductCard } from "@/components/Cards";
import { products } from "@/lib/data";

export default function HomePage() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="glass rounded-2xl p-10 md:p-14 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Пептиды для спорта и здоровья
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
          Все товары в наличии, быстрая отправка. Сертификаты качества на каждую партию.
        </p>
        <Link href="/shop">
          <Button className="px-8 py-3">В каталог</Button>
        </Link>
      </section>

      {/* Товары */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-900">Популярное</h2>
          <Link href="/shop" className="text-sm text-blue-600 hover:underline">Все товары</Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>

      {/* О магазине */}
      <section className="glass rounded-2xl p-8">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl mb-3">✓</div>
            <h3 className="font-semibold mb-2">Качество</h3>
            <p className="text-sm text-slate-600">Лабораторный контроль каждой партии</p>
          </div>
          <div>
            <div className="text-3xl mb-3">📦</div>
            <h3 className="font-semibold mb-2">Доставка</h3>
            <p className="text-sm text-slate-600">Отправка в день заказа</p>
          </div>
          <div>
            <div className="text-3xl mb-3">💬</div>
            <h3 className="font-semibold mb-2">Поддержка</h3>
            <p className="text-sm text-slate-600">Ответим на любые вопросы</p>
          </div>
        </div>
      </section>
    </div>
  );
}
