import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models/products.model';
import { addQuantity, addToCart } from 'src/app/reducers/cart/cart.actions';
import { CartState } from 'src/app/reducers/cart/cart.state';
import { ShopService } from 'src/app/services/shop-service';
import { SnackbarService } from 'src/app/services/snackbar-service';
import { checkIfItemExistsInCart } from 'src/app/utils/functions/check-if-item-exists-in-cart';

@Component({
  selector: 'app-product-description-page',
  templateUrl: './product-description-page.component.html',
  styleUrls: ['./product-description-page.component.scss'],
})
export class ProductDescriptionPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private shopService: ShopService,
    private store: Store<CartState>,
    private snackbarService: SnackbarService,
  ) {}

  cart$ = this.store.select('cart');
  title!: string;
  product!: Product[];

  ngOnInit(): void {
    this.getParamsFromRoute();
    this.getProduct(this.title);
  }

  getParamsFromRoute = () => {
    this.route.params.subscribe((params) => {
      this.title = params['title'];
    });
  };

  getProduct = (title: string) => {
    this.shopService.getProducts('').subscribe((products) => {
      this.product = products.filter((product) => product.title === title);
    });
  };

  addProductToCart = (id: number) => {
    if (checkIfItemExistsInCart(id, this.cart$)) {
      this.addQuantity(id);
      this.snackbarService.snackbarCall('Item quantity increased');
      return;
    } else {
      this.addToCart(this.product[0]);
      this.snackbarService.snackbarCall('Item added to cart');
    }
  };

  // reducers
  addToCart = (product: Product) => {
    this.store.dispatch(addToCart({ product }));
  };

  addQuantity(itemId: number) {
    this.store.dispatch(addQuantity({ id: itemId }));
  }

}
