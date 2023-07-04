import { CartProduct } from 'src/app/models/cart-product.model';

export interface CartState {
  readonly cart: CartProduct[];
}
