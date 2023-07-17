import { createReducer, on } from '@ngrx/store';
import {
  addToCart,
  removeFromCart,
  emptyCart,
  addQuantity,
  reduceQuantity,
} from './cart.actions';
import { CartProduct } from 'src/app/models/cart-product.model';

// Retrieve state from localStorage if available
const storedState = localStorage.getItem('cartState');
const initialState: ReadonlyArray<CartProduct> = storedState
  ? JSON.parse(storedState)
  : [];

export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state, { product }) => {
    const newProduct: CartProduct = { ...product, quantity: 1 };
    const newState = [...state, newProduct];
    localStorage.setItem('cartState', JSON.stringify(newState));
    return newState;
  }),
  on(addQuantity, (state, { id }) => {
    const updatedState = state.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    localStorage.setItem('cartState', JSON.stringify(updatedState));
    return updatedState;
  }),
  on(reduceQuantity, (state, { id }) => {
    const updatedState = state.map((item) => {
      if (item.id === id && item.quantity > 0) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    localStorage.setItem('cartState', JSON.stringify(updatedState));
    return updatedState;
  }),
  on(emptyCart, () => {
    localStorage.removeItem('cartState');
    return [];
  }),
  on(removeFromCart, (state, { id }) => {
    const newState = state.filter((item) => item.id !== id);
    localStorage.setItem('cartState', JSON.stringify(newState));
    return newState;
  })
);
