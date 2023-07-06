import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { ProductDescriptionPageComponent } from './pages/product-description-page/product-description-page.component';
import { ProductsListingPageComponent } from './pages/products-listing-page/products-listing-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsListingPageComponent,
  },
  {
    path: 'cart',
    component: CartPageComponent,
  },
  {
    path: 'products/:title',
    component: ProductDescriptionPageComponent,
  },
  {
    path: ':category',
    component: ProductsListingPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
