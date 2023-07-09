import { CartProduct } from 'src/app/models/cart-product.model';

export const calculateTotal = (cart: CartProduct[]): number => {
  let total = 0;

  cart.forEach((item) => {
    total += item.price * item.quantity;
  });

  return total;
};

// Path: src\app\utils\functions\calculate-total\index.ts