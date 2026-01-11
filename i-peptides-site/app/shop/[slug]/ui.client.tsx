"use client";

import { Button } from "@/components/ui";
import { useCart } from "@/lib/cart";
import toast from "react-hot-toast";

export function AddToCart({ productId, disabled }: { productId: string; disabled?: boolean }) {
  const add = useCart((s) => s.add);

  const handleAddToCart = () => {
    add(productId, 1);
    toast.success('Товар добавлен в корзину!', {
      icon: '✓',
      style: {
        background: '#10b981',
        color: '#fff',
      },
    });
  };

  return (
    <Button onClick={handleAddToCart} disabled={disabled}>
      Добавить в корзину
    </Button>
  );
}
