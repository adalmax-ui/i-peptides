import Link from "next/link";

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Orders</h1>
        <p className="mt-1 text-slate-600">Здесь будет список заказов пользователя + детали заказа.</p>
      </div>

      <div className="glass rounded-xl2 p-8">
        <div className="font-semibold">No orders yet</div>
        <Link href="/shop" className="mt-2 inline-block text-sm text-blue-700 hover:underline">Go to shop →</Link>
      </div>
    </div>
  );
}
