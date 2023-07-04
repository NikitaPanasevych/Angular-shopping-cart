import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartProduct } from 'src/app/models/cart-product.model';
import { addQuantity, addToCart } from 'src/app/reducers/cart/cart.actions';
import { CartState } from 'src/app/reducers/cart/cart.state';
import { Product } from '../../models/products.model';
import { ShopService } from '../../shop.service';

@Component({
  selector: 'app-products-listing-page',
  templateUrl: './products-listing-page.component.html',
  styleUrls: ['./products-listing-page.component.scss'],
})
export class ProductsListingPageComponent implements OnInit {
  cart$!: Observable<CartProduct[]>;

  constructor(
    private shopService: ShopService,
    private readonly route: ActivatedRoute,
    private store: Store<CartState>
  ) {
    this.cart$ = this.store.select('cart'); // Assign the cart$ observable
  }

  products: Product[] = [];
  url: string = 'category/';
  category: string = '';

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['category']) {
        this.category = this.url + params['category'];
        this.shopService.getProducts(this.category).subscribe((products) => {
          this.products = products;
        });
      } else {
        this.shopService.getProducts(this.category).subscribe((products) => {
          this.products = products;
        });
      }
    });
  }

  addProductToCart($event: number) {
    let product: Product[] = this.products.filter(
      (product) => product.id === $event
    );
    const itemId = $event;
    const itemExistsInCart = this.checkIfItemExistsInCart(itemId);
    if (itemExistsInCart) {
      this.addQuantity(itemId);
    } else {
      this.addToCart(product[0]);
    }
  }

  addToCart(product: Product) {
    this.store.dispatch(addToCart({ product }));
  }

  addQuantity(itemId: number) {
    this.store.dispatch(addQuantity({ id: itemId }));
  }

  checkIfItemExistsInCart(itemId: number): boolean {
    let itemExists = false;
    this.cart$.subscribe((cartItems) => {
      if (cartItems.some((item) => item.id === itemId)) {
        itemExists = true;
      }
    });
    return itemExists;
  }
}
