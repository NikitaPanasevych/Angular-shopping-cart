import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() title!: string;
  @Input() price!: number;
  @Input() description!: string;
  @Input() image!: string;
}
