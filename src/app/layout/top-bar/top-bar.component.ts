import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/products.model';
import { removeFromCart } from 'src/app/reducers/cart/cart.actions';
import { CartState } from 'src/app/reducers/cart/cart.state';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  cart$!: Observable<Product[]>;

  constructor(private store: Store<CartState>) {}

  ngOnInit(): void {
    this.cart$ = this.store.select('cart'); // Assign the cart$ observable
  }

  removeProductFromCart($event: number) {
    this.store.dispatch(removeFromCart({ id: $event }));
  }
}
