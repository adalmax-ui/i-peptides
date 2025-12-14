"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui";
import { ProductCard } from "@/components/Cards";
import { products } from "@/lib/data";
import { Sparkles, Shield, Truck, Award } from "lucide-react";

export default function HomePage() {
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="space-y-16">
      {/* Hero с фоном */}
      <section className="relative overflow-hidden rounded-3xl">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay" />

        {/* Анимированные частицы */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 px-6 py-20 md:py-28 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-yellow-300 animate-pulse" />
            <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-semibold border border-white/30">
              Премиум качество
            </span>
            <Sparkles className="w-6 h-6 text-yellow-300 animate-pulse" />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Пептиды премиум<br />качества
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
            Сертифицированная продукция с чистотой >98%. Быстрая доставка по всей Европе.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/shop">
              <Button className="px-10 py-6 text-lg bg-white text-blue-600 hover:bg-blue-50 shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105">
                Смотреть товары
              </Button>
            </Link>
            <Link href="/peptides">
              <Button variant="ghost" className="px-10 py-6 text-lg text-white border-2 border-white/30 hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
                База знаний
              </Button>
            </Link>
          </div>

          {/* Преимущества в hero */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-2 text-white">
              <Shield className="w-8 h-8 mb-1" />
              <div className="text-sm font-semibold">100% оригинал</div>
            </div>
            <div className="flex flex-col items-center gap-2 text-white">
              <Award className="w-8 h-8 mb-1" />
              <div className="text-sm font-semibold">Сертификаты COA</div>
            </div>
            <div className="flex flex-col items-center gap-2 text-white">
              <Truck className="w-8 h-8 mb-1" />
              <div className="text-sm font-semibold">Быстрая доставка</div>
            </div>
            <div className="flex flex-col items-center gap-2 text-white">
              <Sparkles className="w-8 h-8 mb-1" />
              <div className="text-sm font-semibold">Поддержка 24/7</div>
            </div>
          </div>
        </div>
      </section>

      {/* Товары */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Популярные товары
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Проверенные временем пептиды с лучшими отзывами
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
        <div className="text-center mt-10">
          <Link href="/shop">
            <Button variant="ghost" className="px-8 py-4 text-lg border-2 hover:border-blue-600 transition-all duration-300">
              Смотреть все товары →
            </Button>
          </Link>
        </div>
      </section>

      {/* Почему выбирают нас */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 to-blue-50/30 p-12 md:p-16">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl" />

        <div className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Почему выбирают нас
            </h2>
            <p className="text-lg text-slate-600">
              Надежность и качество на каждом этапе
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative glass rounded-2xl p-8 text-center transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-slate-200/50">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-green-500 text-white text-3xl mb-5 shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-shadow">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Гарантия качества</h3>
                <p className="text-slate-600 leading-relaxed">
                  Все пептиды проходят строгий лабораторный контроль. Сертификат качества (COA) на каждую партию.
                </p>
              </div>
            </div>

            <div className="group relative glass rounded-2xl p-8 text-center transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-slate-200/50">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-500 text-white text-3xl mb-5 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
                  🚀
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Быстрая доставка</h3>
                <p className="text-slate-600 leading-relaxed">
                  Отправка в день заказа. Надежная упаковка с соблюдением температурного режима и отслеживание.
                </p>
              </div>
            </div>

            <div className="group relative glass rounded-2xl p-8 text-center transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-slate-200/50">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500 text-white text-3xl mb-5 shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-shadow">
                  💬
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Поддержка 24/7</h3>
                <p className="text-slate-600 leading-relaxed">
                  Консультации специалистов, помощь в выборе товаров и ответы на любые вопросы в любое время.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
