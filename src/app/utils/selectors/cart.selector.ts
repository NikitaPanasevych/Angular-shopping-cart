import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from 'src/app/reducers/cart/cart.state';

const selectFeatureCart = createFeatureSelector<CartState>('cart');

export const selectCart = createSelector(
  selectFeatureCart,
  (state: CartState) => state.cart
);
