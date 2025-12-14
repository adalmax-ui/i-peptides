import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200/60">
      <div className="container py-10">
        <div className="grid gap-6 md:grid-cols-4">
          <div>
            <div className="font-semibold">i-peptides</div>
            <p className="mt-2 text-sm text-slate-600">
              Профессиональный интернет-магазин сертифицированных пептидов высокой чистоты с базой знаний и поддержкой специалистов.
            </p>
          </div>

          <div className="text-sm">
            <div className="font-semibold">Навигация</div>
            <ul className="mt-2 space-y-2 text-slate-600">
              <li><Link href="/shop" className="hover:underline">Магазин</Link></li>
              <li><Link href="/peptides" className="hover:underline">База пептидов</Link></li>
              <li><Link href="/guides" className="hover:underline">Руководства</Link></li>
            </ul>
          </div>

          <div className="text-sm">
            <div className="font-semibold">Аккаунт</div>
            <ul className="mt-2 space-y-2 text-slate-600">
              <li><Link href="/account" className="hover:underline">Профиль</Link></li>
              <li><Link href="/orders" className="hover:underline">Заказы</Link></li>
              <li><Link href="/support" className="hover:underline">Поддержка</Link></li>
            </ul>
          </div>

          <div className="text-sm">
            <div className="font-semibold">Юридическое</div>
            <ul className="mt-2 space-y-2 text-slate-600">
              <li><Link href="/legal/terms" className="hover:underline">Условия</Link></li>
              <li><Link href="/legal/privacy" className="hover:underline">Конфиденциальность</Link></li>
              <li><Link href="/legal/disclaimer" className="hover:underline">Отказ от ответственности</Link></li>
            </ul>
          </div>
        </div>

        <p className="mt-8 text-xs text-slate-500">© {new Date().getFullYear()} i-peptides. Все права защищены.</p>
      </div>
    </footer>
  );
}
