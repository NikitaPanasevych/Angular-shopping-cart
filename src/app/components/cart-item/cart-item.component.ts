import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Input() id!: number;

  @Output() increaseQuantityInCart = new EventEmitter<number>();
  @Output() reduceQuantityInCart = new EventEmitter<number>();

  reduce = () => {
    this.reduceQuantityInCart.emit(this.id);
  }

  increase = () => {
    this.increaseQuantityInCart.emit(this.id);
  }

}
