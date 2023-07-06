import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-mini-cart',
  templateUrl: './mini-cart.component.html',
  styleUrls: ['./mini-cart.component.scss'],
})
export class MiniCartComponent {
  @Input() title!: string;
  @Input() price!: number;
  @Input() quantity!: number;
  @Input() id!: number;
  @Input() image!: string;

  @Output() reduceQuantityInCart = new EventEmitter<number>();
  @Output() deleteFromCart = new EventEmitter<number>();
  @Output() increaseQuantityInCart = new EventEmitter<number>();

  remove = () => {
    this.deleteFromCart.emit(this.id);
  };

  reduce = () => {
    this.reduceQuantityInCart.emit(this.id);
  };

  increase = () => {
    this.increaseQuantityInCart.emit(this.id);
  };
}
