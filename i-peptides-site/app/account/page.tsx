"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui";
import { User, Package, FileText, LogOut, Edit2, Save } from "lucide-react";
import toast from "react-hot-toast";

export default function AccountPage() {
  const { user, isAuthenticated, logout, updateProfile } = useAuth();
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth/login");
      return;
    }
    if (user) {
      setName(user.name);
      setEmail(user.email || "");
    }
  }, [isAuthenticated, router, user]);

  const handleSave = () => {
    if (!name.trim()) {
      toast.error("Введите имя");
      return;
    }

    updateProfile({ name, email: email || undefined });
    setIsEditing(false);
    toast.success("Профиль обновлен");
  };

  const handleLogout = () => {
    logout();
    toast.success("Вы вышли из аккаунта");
    router.push("/");
  };

  if (!user) return null;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Личный кабинет</h1>
        <Button variant="ghost" onClick={handleLogout} className="gap-2">
          <LogOut className="h-4 w-4" />
          Выход
        </Button>
      </div>

      {/* Информация о пользователе */}
      <div className="glass rounded-2xl p-6 border border-slate-200 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-slate-900">Мой профиль</h2>
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700"
            >
              <Edit2 className="h-4 w-4" />
              Редактировать
            </button>
          )}
        </div>

        {isEditing ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Имя</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500/60"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email (необязательно)</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500/60"
              />
            </div>
            <div className="flex gap-2">
              <Button onClick={handleSave} className="gap-2">
                <Save className="h-4 w-4" />
                Сохранить
              </Button>
              <Button
                variant="ghost"
                onClick={() => {
                  setIsEditing(false);
                  setName(user.name);
                  setEmail(user.email || "");
                }}
              >
                Отмена
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div>
              <div className="text-sm text-slate-600">Имя</div>
              <div className="text-slate-900 font-medium">{user.name}</div>
            </div>
            <div>
              <div className="text-sm text-slate-600">Телефон</div>
              <div className="text-slate-900 font-medium">{user.phone}</div>
            </div>
            {user.email && (
              <div>
                <div className="text-sm text-slate-600">Email</div>
                <div className="text-slate-900 font-medium">{user.email}</div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Навигация по разделам */}
      <div className="grid gap-4 md:grid-cols-2">
        <Link
          href="/account/orders"
          className="glass rounded-2xl p-6 border border-slate-200 hover:border-primary-300 hover:shadow-lg transition-all group"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center group-hover:bg-primary-100 transition">
              <Package className="h-6 w-6 text-primary-600" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 group-hover:text-primary-600 transition">Мои заказы</h3>
              <p className="text-sm text-slate-600">История покупок и статусы доставки</p>
            </div>
          </div>
        </Link>

        <Link
          href="/account/medical"
          className="glass rounded-2xl p-6 border border-slate-200 hover:border-secondary-300 hover:shadow-lg transition-all group"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-secondary-50 flex items-center justify-center group-hover:bg-secondary-100 transition">
              <FileText className="h-6 w-6 text-secondary-600" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 group-hover:text-secondary-600 transition">Мои анализы</h3>
              <p className="text-sm text-slate-600">Загрузка анализов для врача-консультанта</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
