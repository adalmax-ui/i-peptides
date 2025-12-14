import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200/60">
      <div className="container py-10">
        <div className="grid gap-6 md:grid-cols-4">
          <div>
            <div className="font-semibold">i-peptides</div>
            <p className="mt-2 text-sm text-slate-600">
              Store + knowledge base template. Replace all product, legal, and medical content with your verified materials.
            </p>
          </div>

          <div className="text-sm">
            <div className="font-semibold">Explore</div>
            <ul className="mt-2 space-y-2 text-slate-600">
              <li><Link href="/shop" className="hover:underline">Shop</Link></li>
              <li><Link href="/peptides" className="hover:underline">Peptide Database</Link></li>
              <li><Link href="/guides" className="hover:underline">Guides</Link></li>
            </ul>
          </div>

          <div className="text-sm">
            <div className="font-semibold">Account</div>
            <ul className="mt-2 space-y-2 text-slate-600">
              <li><Link href="/account" className="hover:underline">Profile</Link></li>
              <li><Link href="/orders" className="hover:underline">Orders</Link></li>
              <li><Link href="/support" className="hover:underline">Support</Link></li>
            </ul>
          </div>

          <div className="text-sm">
            <div className="font-semibold">Legal</div>
            <ul className="mt-2 space-y-2 text-slate-600">
              <li><Link href="/legal/terms" className="hover:underline">Terms</Link></li>
              <li><Link href="/legal/privacy" className="hover:underline">Privacy</Link></li>
              <li><Link href="/legal/disclaimer" className="hover:underline">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <p className="mt-8 text-xs text-slate-500">© {new Date().getFullYear()} i-peptides. All rights reserved.</p>
      </div>
    </footer>
  );
}
