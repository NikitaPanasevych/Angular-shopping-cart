import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/models/products.model';

export const addToCart = createAction(
    '[Cart] Add to Cart',
    props<{ product: Product }>()
  );
  
export const removeFromCart = createAction(
  '[Cart] Remove from Cart',
  props<{ product: Product }>()
);
export const emptyCart = createAction('[Cart] Empty Cart');
