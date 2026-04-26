"use client";

import { useState } from "react";
import { useProductStore, type Product } from "../store/useProductStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ProductItem({ product }: { product: Product }) {
  const deleteProduct = useProductStore((state) => state.deleteProduct);
  const updateQuantity = useProductStore((state) => state.updateQuantity);

  const [draft, setDraft] = useState(String(product.quantity));

  return (
    <div>
      <p>{product.name}</p>

      <Input
        type="number"
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
      />

      <Button
        onClick={() => {
          const parsed = parseInt(draft);
          if (!isNaN(parsed)) {
            updateQuantity(product.id, parsed);
          }
        }}
      >
        Save
      </Button>

      <Button onClick={() => deleteProduct(product.id)}>
        Delete
      </Button>
    </div>
  );
}