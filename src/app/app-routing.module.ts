import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDescriptionPageComponent } from './pages/product-description-page/product-description-page.component';
import { ProductsListingPageComponent } from './pages/products-listing-page/products-listing-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsListingPageComponent,
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
