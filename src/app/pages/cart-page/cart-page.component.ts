import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartProduct } from 'src/app/models/cart-product.model';
import { CartState } from 'src/app/reducers/cart/cart.state';

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

  ngOnInit(): void {
    this.cart$.subscribe((cart) => {
      this.cartItems = cart;
    });
  }
}
