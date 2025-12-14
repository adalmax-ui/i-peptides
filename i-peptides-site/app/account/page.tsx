import Link from "next/link";
import { Badge } from "@/components/ui";

export default function AccountPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Личный кабинет</h1>
        <p className="mt-1 text-slate-600">Управление профилем, заказами, адресами доставки и сохраненными товарами.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="glass rounded-xl2 p-5">
          <div className="font-semibold">Заказы</div>
          <p className="mt-2 text-sm text-slate-600">История заказов, статусы, возвраты, документы.</p>
          <Link href="/orders" className="mt-2 inline-block text-sm text-blue-700 hover:underline">Открыть заказы →</Link>
        </div>

        <div className="glass rounded-xl2 p-5">
          <div className="font-semibold">Сохраненные товары</div>
          <p className="mt-2 text-sm text-slate-600">Избранные товары и список отслеживаемых пептидов.</p>
        </div>
      </div>
    </div>
  );
}
