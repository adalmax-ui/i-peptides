"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { Search, ShoppingBag, User } from "lucide-react";
import { NavLink } from "./ui";
import { useCart } from "@/lib/cart";

export function SiteHeader() {
  const count = useCart((s) => s.items.reduce((acc, it) => acc + it.qty, 0));
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("query") as string;
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    } else {
      router.push("/search");
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/60 backdrop-blur">
      <div className="container flex h-16 items-center gap-3">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="I-PEPTIDES"
            width={180}
            height={45}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <nav className="ml-2 hidden items-center gap-1 md:flex">
          <NavLink href="/shop">Магазин</NavLink>
          <NavLink href="/peptides">База пептидов</NavLink>
          <NavLink href="/support">Поддержка</NavLink>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <form
            onSubmit={handleSearch}
            className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-3 py-2 md:flex"
          >
            <Search className="h-4 w-4 text-slate-600" />
            <input
              type="text"
              name="query"
              placeholder="Поиск товаров и пептидов…"
              className="w-64 bg-transparent text-sm text-slate-900 placeholder:text-slate-600 focus:outline-none"
            />
          </form>

          <Link href="/account" className="rounded-xl p-2 hover:bg-white/60" aria-label="Аккаунт">
            <User className="h-5 w-5 text-slate-700" />
          </Link>

          <Link href="/cart" className="relative rounded-xl p-2 hover:bg-white/60" aria-label="Корзина">
            <ShoppingBag className="h-5 w-5 text-slate-700" />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-blue-600 px-1 text-xs text-white">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>

      <div className="container pb-3 md:hidden">
        <form
          onSubmit={handleSearch}
          className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-3 py-2"
        >
          <Search className="h-4 w-4 text-slate-600" />
          <input
            type="text"
            name="query"
            placeholder="Поиск…"
            className="flex-1 bg-transparent text-sm text-slate-900 placeholder:text-slate-600 focus:outline-none"
          />
        </form>
        <div className="mt-2 flex gap-1 overflow-x-auto">
          <NavLink href="/shop">Магазин</NavLink>
          <NavLink href="/peptides">База</NavLink>
          <NavLink href="/support">Помощь</NavLink>
        </div>
      </div>
    </header>
  );
}
