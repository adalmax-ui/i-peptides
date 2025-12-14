"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Button } from "@/components/ui";
import { useCart } from "@/lib/cart";
import { CheckCircle2 } from "lucide-react";

export default function CheckoutSuccess() {
  const clear = useCart((s) => s.clear);

  useEffect(() => {
    clear();
  }, [clear]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="glass rounded-xl2 p-8 max-w-md w-full text-center">
        <CheckCircle2 className="h-16 w-16 text-green-600 mx-auto mb-4" />
        <h1 className="text-2xl font-semibold mb-2">Payment Successful!</h1>
        <p className="text-slate-600 mb-6">
          Thank you for your order. You will receive a confirmation email shortly.
        </p>
        <div className="space-y-2">
          <Link href="/orders">
            <Button className="w-full">View Orders</Button>
          </Link>
          <Link href="/shop">
            <Button variant="ghost" className="w-full">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
