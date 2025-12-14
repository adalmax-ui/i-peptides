import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "i-peptides — Store + Peptide Database",
  description: "Blue/white scalable template: shop, database, search, cart, account.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main className="container py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
