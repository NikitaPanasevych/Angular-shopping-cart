import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, take } from 'rxjs';
import { CartProduct } from 'src/app/models/cart-product.model';
import { addQuantity, reduceQuantity, removeFromCart } from 'src/app/reducers/cart/cart.actions';
import { CartState } from 'src/app/reducers/cart/cart.state';
import { calculateTotal } from 'src/app/utils/functions/calculate-total';
import { calculateTotalQuantity } from 'src/app/utils/functions/calculate-total-quantity';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  constructor(private store: Store<CartState>) {
    this.cart$ = this.store.select('cart');
  }

  cart$!: Observable<CartProduct[]>;
  cartItems: CartProduct[] = [];
  total = 0;
  totalQuantity = 0;

  ngOnInit(): void {
    this.cart$.subscribe((cart) => {
      this.cartItems = cart;
      this.total = calculateTotal(cart);
      this.totalQuantity = calculateTotalQuantity(cart);
    });
  }

  reduceQuantity(id: number) {
    const cartItem$ = this.cart$?.pipe(
      take(1), // Take only the latest cart items from the observable
      map((cartItems) => cartItems.find((item) => item.id === id))
    );

    cartItem$?.subscribe((cartItem) => {
      if (cartItem && cartItem.quantity > 1) {
        this.store.dispatch(reduceQuantity({ id }));
      } else {
        this.store.dispatch(removeFromCart({ id }));
      }
    });
  }

  removeFromCart(id: number) {
    this.store.dispatch(removeFromCart({ id }));
  }

  increaseQuantity(id: number) {
    this.store.dispatch(addQuantity({ id }));
  }
}
