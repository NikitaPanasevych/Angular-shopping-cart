import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/products.model';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-products-listing-page',
  templateUrl: './products-listing-page.component.html',
  styleUrls: ['./products-listing-page.component.scss'],
})
export class ProductsListingPageComponent implements OnInit {
  constructor(
    private shopService: ShopService,
    private readonly route: ActivatedRoute
  ) {}

  products: Product[] = [];
  url: string = 'category/';
  category: string = '';

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params['category']);
      if (params['category']) {
        this.category = this.url + params['category'];
        this.shopService.getProducts(this.category).subscribe((products) => {
          this.products = products;
          console.log(this.products);
        });
      } else {
        this.shopService.getProducts(this.category).subscribe((products) => {
          this.products = products;
          console.log(this.products);
        });
      }
    });
  }
}
