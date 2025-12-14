"use client";

import { Button } from "@/components/ui";
import { useCart } from "@/lib/cart";

export function AddToCart({ productId, disabled }: { productId: string; disabled?: boolean }) {
  const add = useCart((s) => s.add);
  return (
    <Button onClick={() => add(productId, 1)} disabled={disabled}>
      Add to cart
    </Button>
  );
}
