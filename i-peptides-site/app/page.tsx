import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui";
import { ProductCard } from "@/components/Cards";
import { products } from "@/lib/data";

export default function HomePage() {
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="space-y-16">
      {/* Hero с фоном */}
      <section className="relative overflow-hidden rounded-3xl h-[400px] md:h-[480px]">
        {/* Фоновое изображение */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2400&q=80"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        {/* Анимированные частицы */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 px-6 h-full flex items-center">
          <div className="max-w-xl">
            <div className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-semibold border border-white/20 mb-4">
              Сертифицированные пептиды премиум класса
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
              Качество,<br />которому доверяют
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
              Пептиды с чистотой &gt;98% для спорта и здоровья. Все товары в наличии, отправка в день заказа.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/shop">
                <Button className="px-8 py-4 text-base bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 font-semibold">
                  Смотреть товары
                </Button>
              </Link>
              <Link href="/peptides">
                <Button variant="ghost" className="px-8 py-4 text-base text-white border-2 border-white/30 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 font-semibold">
                  База знаний
                </Button>
              </Link>
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
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Почему выбирают нас
          </h2>
          <p className="text-lg text-slate-600">
            Профессиональный подход на каждом этапе
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Лабораторный контроль */}
          <div className="group relative overflow-hidden rounded-2xl">
            <div className="relative h-80">
              <Image
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=800&q=80"
                alt="Лабораторный контроль качества"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Лабораторный контроль</h3>
                <p className="text-white/90 leading-relaxed">
                  Каждая партия проходит строгую проверку. Полный набор документов и сертификатов качества (COA).
                </p>
              </div>
            </div>
          </div>

          {/* Быстрая доставка */}
          <div className="group relative overflow-hidden rounded-2xl">
            <div className="relative h-80">
              <Image
                src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&q=80"
                alt="Быстрая доставка"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Быстрая доставка</h3>
                <p className="text-white/90 leading-relaxed">
                  Отправка в день заказа. Специальная упаковка с контролем температуры и трекинг номер.
                </p>
              </div>
            </div>
          </div>

          {/* Профессиональная поддержка */}
          <div className="group relative overflow-hidden rounded-2xl">
            <div className="relative h-80">
              <Image
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
                alt="Профессиональная поддержка"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Экспертная поддержка</h3>
                <p className="text-white/90 leading-relaxed">
                  Команда специалистов поможет с выбором товаров и ответит на все ваши вопросы круглосуточно.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
