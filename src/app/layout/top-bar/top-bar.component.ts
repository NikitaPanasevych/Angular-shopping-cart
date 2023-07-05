import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, take } from 'rxjs';
import { CartProduct } from 'src/app/models/cart-product.model';
import {
  reduceQuantity,
  removeFromCart,
} from 'src/app/reducers/cart/cart.actions';
import { CartState } from 'src/app/reducers/cart/cart.state';
import { selectCart } from 'src/app/utils/selectors/cart.selector';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  cart$!: Observable<CartProduct[]>;

  constructor(private store: Store<CartState>) {}

  ngOnInit(): void {
    this.cart$ = this.store.select('cart'); // Assign the cart$ observable
  }

  reduceQuantity(id: number) {
    const cartItem$ = this.cart$.pipe(
      take(1), // Take only the latest cart items from the observable
      map((cartItems) => cartItems.find((item) => item.id === id))
    );

    cartItem$.subscribe((cartItem) => {
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
}
