"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  quantity: number;
};

type ProductStore = {
  products: Product[];
  hydrated: boolean;
  setHydrated: (value: boolean) => void;
  addProduct: () => void;
  deleteProduct: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
};


const initialProducts: Product[] = [
  { id: 1, name: "Smartphone", price: 299.99, category: "Electronics", quantity: 1 },
  { id: 2, name: "Tablet", price: 449.99, category: "Electronics", quantity: 2 },
  { id: 3, name: "Smartwatch", price: 199.99, category: "Electronics", quantity: 1 },
];

export const useProductStore = create<ProductStore>()(
  persist(
    (set, get) => ({
      products: initialProducts,
      hydrated: false,

      setHydrated: (value) => set({ hydrated: value }),

      addProduct: () => {
        const products = get().products;

        const nextId =
          products.length > 0
            ? Math.max(...products.map((p) => p.id)) + 1
            : 1;

        set({
          products: [
            ...products,
            {
              id: nextId,
              name: `New Product`,
              price: 0,
              category: "General",
              quantity: 1,
            },
          ],
        });
      },

      deleteProduct: (id) =>
        set((state) => ({
          products: state.products.filter((p) => p.id !== id),
        })),

      updateQuantity: (id, quantity) =>
        set((state) => ({
          products: state.products.map((p) =>
            p.id === id ? { ...p, quantity } : p
          ),
        })),
    }),
    {
      name: "products-store",

      storage: createJSONStorage(() => localStorage),

     
      partialize: (state) => ({
        products: state.products,
      }),

      
      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true);
      },
    }
  )
);