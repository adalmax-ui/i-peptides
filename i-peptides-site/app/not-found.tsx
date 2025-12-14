import Link from "next/link";
import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="glass rounded-xl2 p-8 max-w-md w-full text-center">
        <div className="text-6xl font-bold text-blue-600 mb-4">404</div>
        <h2 className="text-2xl font-semibold mb-2">Page not found</h2>
        <p className="text-slate-600 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex gap-3 justify-center">
          <Link href="/">
            <Button>Go to homepage</Button>
          </Link>
          <Link href="/shop">
            <Button variant="ghost">Browse shop</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
