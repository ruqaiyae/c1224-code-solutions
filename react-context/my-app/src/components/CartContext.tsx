import { createContext, ReactNode, useState } from 'react';
import { type Product } from '../lib';

export type CartValue = {
  cart: Product[];
  addToCart: (product: Product) => void;
};

const defaultCartValue: CartValue = {
  cart: [],
  addToCart: () => undefined,
};

export const CartContext = createContext<CartValue>(defaultCartValue);

type Props = {
  children: ReactNode;
};

export function CartProvider({ children }: Props) {
  const [cart, setCart] = useState<Product[]>([]);

  function addToCart(product: Product) {
    setCart([...cart, product]);
  }

  const cartContextValues = {
    cart,
    addToCart,
  };

  return (
    <CartContext.Provider value={cartContextValues}>
      {children}
    </CartContext.Provider>
  );
}
