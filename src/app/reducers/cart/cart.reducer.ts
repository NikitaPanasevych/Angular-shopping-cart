import { createReducer, on } from '@ngrx/store';
import { addToCart, removeFromCart, emptyCart } from './cart.actions';
import { Product } from 'src/app/models/products.model';

export const initialState: ReadonlyArray<Product> = [];

export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state, { product }) => [...state, product]),
  on(removeFromCart, (state, { id }) => state.filter((item) => item.id !== id))
);
