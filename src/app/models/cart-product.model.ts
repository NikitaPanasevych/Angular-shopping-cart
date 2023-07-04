import { Product } from './products.model';

export interface CartProduct extends Product {
  quantity: number;
}
