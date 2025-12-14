import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "i-peptides — Store + Peptide Database",
  description: "Blue/white scalable template: shop, database, search, cart, account.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
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
                primary: "#2563eb",
                secondary: "#fff",
              },
            },
          }}
        />
        <SiteHeader />
        <main className="container py-10">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
