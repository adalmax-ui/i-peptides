import Link from "next/link";
import { Badge } from "@/components/ui";

export default function AccountPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Account</h1>
        <p className="mt-1 text-slate-600">Заглушка. Здесь обычно: профиль, адреса, методы оплаты, подписки, сохранённые пептиды.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="glass rounded-xl2 p-5">
          <div className="flex items-center justify-between">
            <div className="font-semibold">Orders</div>
            <Badge>demo</Badge>
          </div>
          <p className="mt-2 text-sm text-slate-600">История заказов, статусы, возвраты, документы.</p>
          <Link href="/orders" className="mt-2 inline-block text-sm text-blue-700 hover:underline">Open orders →</Link>
        </div>

        <div className="glass rounded-xl2 p-5">
          <div className="flex items-center justify-between">
            <div className="font-semibold">Saved items</div>
            <Badge>later</Badge>
          </div>
          <p className="mt-2 text-sm text-slate-600">Wishlist + “watchlist” пептидов в базе.</p>
        </div>
      </div>
    </div>
  );
}
