import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/models/products.model';

export const addToCart = createAction(
  '[Cart] Add to Cart',
  props<{ product: Product }>()
);

export const addQuantity = createAction(
  '[Cart] Add Quantity',
  props<{ id: number }>()
);

export const reduceQuantity = createAction(
  '[Cart] Reduce Quantity',
  props<{ id: number }>()
);

export const removeFromCart = createAction(
  '[Cart] Remove from Cart',
  props<{ id: number }>()
);
export const emptyCart = createAction('[Cart] Empty Cart');
