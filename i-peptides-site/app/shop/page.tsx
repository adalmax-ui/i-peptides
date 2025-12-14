import { ProductCard } from "@/components/Cards";
import { products } from "@/lib/data";

export default function ShopPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Shop</h1>
        <p className="mt-1 text-slate-600">Каталог с фильтрами вы подключите позже (категории, теги, наличие, цена).</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {products.map((p) => <ProductCard key={p.id} p={p} />)}
      </div>
    </div>
  );
}
