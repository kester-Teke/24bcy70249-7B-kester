"use client";

import { useProductStore } from "../store/useProductStore";
import { Button } from "@/components/ui/button";

export default function ProductList() {
  const products = useProductStore((state) => state.products);
  const deleteProduct = useProductStore((state) => state.deleteProduct);
  const updateQuantity = useProductStore((state) => state.updateQuantity);
  const hydrated = useProductStore((state) => state.hydrated);

  if (!hydrated) return null;

  const total = products.reduce(
    (sum, p) => sum + p.price * p.quantity,
    0
  );

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Cart</h1>

      <table className="w-full border">
        <thead>
          <tr className="border-b">
            <th className="text-left p-3">Product</th>
            <th className="text-left p-3">Price</th>
            <th className="text-left p-3">Quantity</th>
            <th className="text-left p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b">
              <td className="p-3">{product.name}</td>

              <td className="p-3">
                ${product.price.toFixed(2)}
              </td>

              <td className="p-3">
                <input
                  type="number"
                  value={product.quantity}
                  min={0}
                  onChange={(e) =>
                    updateQuantity(product.id, parseInt(e.target.value) || 0)
                  }
                  className="border px-2 py-1 w-20"
                />
              </td>

              <td className="p-3">
                <Button
                  variant="destructive"
                  onClick={() => deleteProduct(product.id)}
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ✅ Total */}
      <div className="text-right mt-6 text-xl font-semibold">
        Total: ${total.toFixed(2)}
      </div>
    </div>
  );
}