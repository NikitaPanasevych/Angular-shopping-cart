import { Observable } from 'rxjs';
import { Product } from 'src/app/models/products.model';

export const checkIfItemExistsInCart = (
  itemId: number,
  cart: Observable<Product[]>
): boolean => {
  let itemExistsInCart = false;
  cart.subscribe((cart) => {
    if (cart.length > 0) {
      cart.forEach((item) => {
        if (item.id === itemId) {
          itemExistsInCart = true;
        }
      });
    }
  });
  return itemExistsInCart;
};
