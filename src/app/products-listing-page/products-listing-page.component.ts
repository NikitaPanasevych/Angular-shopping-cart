import { Component, OnInit } from '@angular/core';
import { Product } from '../models/products.model';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-products-listing-page',
  templateUrl: './products-listing-page.component.html',
  styleUrls: ['./products-listing-page.component.scss'],
})
export class ProductsListingPageComponent implements OnInit {
  constructor(private shopService: ShopService) {}
  products: Product[] = [];

  ngOnInit(): void {
    this.shopService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
