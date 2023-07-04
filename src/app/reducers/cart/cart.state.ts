import { Product } from 'src/app/models/products.model';

export interface CartState {
  readonly cart: Product[];
}
