import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, take } from 'rxjs';
import { CartProduct } from 'src/app/models/cart-product.model';
import {
  addQuantity,
  emptyCart,
  reduceQuantity,
  removeFromCart,
} from 'src/app/reducers/cart/cart.actions';
import { CartState } from 'src/app/reducers/cart/cart.state';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  cart$: Observable<CartProduct[]> | undefined;
  cartLength!: number;

  constructor(private store: Store<CartState>) {}

  ngOnInit(): void {
    this.cart$ = this.store.select('cart'); // Assign the cart$ observable
    this.cart$?.subscribe((cart) => {
      this.cartLength = cart.length;
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

  clearCart() {
    this.store.dispatch(emptyCart());
  }
}
