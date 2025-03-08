import { useContext } from 'react';
import { CartContext } from './CartContext';

export function useCart() {
  const value = useContext(CartContext);
  if (!value) {
    throw new Error('hook can only be used inside the CartProvider tree');
  }

  return value;
}
