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
  on(addQuantity, (state, { id }) =>
    state.map((item) => {
      if (item.id === id) {
        const updatedItem = { ...item, quantity: item.quantity + 1 };
        localStorage.setItem(
          'cartState',
          JSON.stringify([...state, updatedItem])
        );
        return updatedItem;
      }
      return item;
    })
  ),
  on(reduceQuantity, (state, { id }) =>
    state.map((item) => {
      if (item.id === id) {
        const updatedItem = { ...item, quantity: item.quantity - 1 };
        localStorage.setItem(
          'cartState',
          JSON.stringify([...state, updatedItem])
        );
        return updatedItem;
      }
      return item;
    })
  ),
  on(emptyCart, (state) => {
    localStorage.removeItem('cartState');
    return [];
  }),
  on(removeFromCart, (state, { id }) => {
    const newState = state.filter((item) => item.id !== id);
    localStorage.setItem('cartState', JSON.stringify(newState));
    return newState;
  })
);
