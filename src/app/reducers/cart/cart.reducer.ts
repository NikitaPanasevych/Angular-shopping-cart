import { createReducer, on } from '@ngrx/store';
import {
  addToCart,
  removeFromCart,
  emptyCart,
  addQuantity,
  reduceQuantity,
} from './cart.actions';
import { CartProduct } from 'src/app/models/cart-product.model';

export const initialState: ReadonlyArray<CartProduct> = [];

export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state, { product }) => {
    const newProduct: CartProduct = { ...product, quantity: 1 };
    return [...state, newProduct];
  }),
  on(addQuantity, (state, { id }) =>
    state.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    })
  ),
  on(reduceQuantity, (state, { id }) =>
    state.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    })
  ),
  on(removeFromCart, (state, { id }) => state.filter((item) => item.id !== id))
);
