import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListingPageComponent } from './products-listing-page/products-listing-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsListingPageComponent,
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
