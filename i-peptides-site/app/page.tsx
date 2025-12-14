"use client";

import Link from "next/link";
import { Badge, Button } from "@/components/ui";
import { ProductCard, PeptideCard } from "@/components/Cards";
import { peptides, products } from "@/lib/data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

export default function HomePage() {
  const featuredProducts = products.slice(0, 6);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 400;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Подборки пептидов для разных целей
  const collections = [
    {
      title: "Для роста мышц",
      description: "Эффективные пептиды для увеличения мышечной массы",
      icon: "💪",
      gradient: "from-blue-500 to-blue-600",
      products: products.filter(p => p.category === "Growth Hormone").slice(0, 3)
    },
    {
      title: "Для восстановления",
      description: "Ускорение регенерации после тренировок",
      icon: "🔬",
      gradient: "from-green-500 to-green-600",
      products: products.filter(p => p.category === "Recovery").slice(0, 3)
    },
    {
      title: "Для выносливости",
      description: "Повышение физической производительности",
      icon: "⚡",
      gradient: "from-purple-500 to-purple-600",
      products: products.filter(p => p.category === "Performance").slice(0, 3)
    }
  ];

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

      {/* Карусель рекомендаций */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Рекомендуемые подборки</h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 transition"
              aria-label="Прокрутить влево"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 transition"
              aria-label="Прокрутить вправо"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {collections.map((collection, idx) => (
            <div key={idx} className="flex-shrink-0 w-full md:w-[500px] snap-start">
              <div className="glass rounded-xl2 p-6 border border-slate-200/50 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${collection.gradient} flex items-center justify-center text-white text-2xl shadow-lg`}>
                    {collection.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-800">{collection.title}</h3>
                    <p className="text-sm text-slate-600">{collection.description}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {collection.products.map((product) => (
                    <Link
                      key={product.id}
                      href={`/shop/${product.slug}`}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/50 transition group"
                    >
                      <div className="w-16 h-16 rounded-lg bg-slate-100 flex-shrink-0 overflow-hidden">
                        <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-sm group-hover:text-blue-700 transition">{product.title}</div>
                        <div className="text-xs text-slate-600 mt-1">{product.short}</div>
                      </div>
                      <div className="text-sm font-bold text-slate-700">
                        {(product.priceCents / 100).toFixed(0)} €
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
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

      {/* Популярные товары */}
      <section className="space-y-6">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold">Популярные товары</h2>
          <Link href="/shop" className="text-sm text-blue-700 hover:underline font-medium">Все товары →</Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {featuredProducts.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>

      {/* CTA к базе знаний */}
      <section className="glass rounded-xl2 p-8 md:p-10 text-center bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/20">
        <h2 className="text-2xl font-bold mb-3">Хотите узнать больше о пептидах?</h2>
        <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
          В нашей базе знаний собрана информация о действии, применении и исследованиях различных пептидов
        </p>
        <Link href="/peptides">
          <Button variant="ghost" className="px-8 py-6 text-lg">
            Открыть базу знаний →
          </Button>
        </Link>
      </section>
    </div>
  );
}
