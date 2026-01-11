import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
import { AuthProvider } from "@/lib/auth";

export const metadata: Metadata = {
  title: "i-peptides — Магазин и База Пептидов",
  description: "Интернет-магазин пептидов с базой знаний: каталог, поиск, корзина, личный кабинет.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <AuthProvider>
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(148, 163, 184, 0.35)",
                borderRadius: "1rem",
                padding: "16px",
              },
              success: {
                iconTheme: {
                  primary: "#6366F1",
                  secondary: "#fff",
                },
              },
            }}
          />
          <SiteHeader />
          <main className="container py-10">{children}</main>
          <Footer />
          <Analytics />
        </AuthProvider>
      </body>
    </html>
  );
}
