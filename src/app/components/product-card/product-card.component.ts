import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

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
  @Input() id!: number;

  @Output() addToCart = new EventEmitter<number>();

  constructor(private router: Router) {}

  add = () => {
    this.addToCart.emit(this.id);
  };

  navigate = () => {
    this.router.navigate([this.title]);
  };
}
