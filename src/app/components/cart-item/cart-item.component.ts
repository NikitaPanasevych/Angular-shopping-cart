import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Input() title!: string;
  @Input() price!: number;
  @Input() quantity!: number;
  @Input() description!: string;
  @Input() image!: string;
  @Input() category!: string;

  sample = [
    {
      id: 1,
      title: 'Product 1',
      price: 100,
      quantity: 1,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget aliquam quam. Sed euismod, nisl quis tincidunt aliquet, nunc nulla aliquam nunc, vi',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    },
  ];
}
