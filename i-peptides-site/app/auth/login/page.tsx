"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [step, setStep] = useState<"phone" | "code">("phone");
  const [loading, setLoading] = useState(false);
  const { login, sendCode } = useAuth();
  const router = useRouter();

  const handleSendCode = async (e: FormEvent) => {
    e.preventDefault();

    if (!phone || phone.length < 10) {
      toast.error("Введите корректный номер телефона");
      return;
    }

    setLoading(true);
    try {
      const sent = await sendCode(phone);
      if (sent) {
        toast.success("Код отправлен на ваш телефон");
        setStep("code");
      } else {
        toast.error("Ошибка отправки кода");
      }
    } catch (error) {
      toast.error("Произошла ошибка");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    if (!code || code.length !== 4) {
      toast.error("Введите 4-значный код");
      return;
    }

    setLoading(true);
    try {
      const success = await login(phone, code);
      if (success) {
        toast.success("Вход выполнен успешно!");
        router.push("/account");
      } else {
        toast.error("Неверный код");
      }
    } catch (error) {
      toast.error("Произошла ошибка");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[600px] flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="glass rounded-2xl p-8 border border-slate-200">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Вход в аккаунт</h1>
          <p className="text-sm text-slate-600 mb-6">
            {step === "phone"
              ? "Введите номер телефона для входа или регистрации"
              : `Введите код из SMS на номер ${phone}`}
          </p>

          {step === "phone" ? (
            <form onSubmit={handleSendCode} className="space-y-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                  Номер телефона
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+7 (___) ___-__-__"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500/60 focus:border-primary-500 transition"
                  disabled={loading}
                />
              </div>

              <div className="bg-secondary-50 border border-secondary-200 rounded-xl p-4">
                <p className="text-xs text-secondary-800">
                  <strong>Для тестирования:</strong> Введите любой номер телефона. Код для входа: <code className="bg-white px-2 py-1 rounded">1234</code>
                </p>
              </div>

              <Button type="submit" disabled={loading} className="w-full">
                {loading ? "Отправка..." : "Получить код"}
              </Button>
            </form>
          ) : (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="code" className="block text-sm font-medium text-slate-700 mb-2">
                  Код из SMS
                </label>
                <input
                  id="code"
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 4))}
                  placeholder="____"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500/60 focus:border-primary-500 transition text-center text-2xl tracking-widest font-bold"
                  disabled={loading}
                  maxLength={4}
                  autoFocus
                />
              </div>

              <Button type="submit" disabled={loading} className="w-full">
                {loading ? "Вход..." : "Войти"}
              </Button>

              <button
                type="button"
                onClick={() => {
                  setStep("phone");
                  setCode("");
                }}
                className="w-full text-sm text-slate-600 hover:text-slate-900 transition"
              >
                Изменить номер телефона
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
