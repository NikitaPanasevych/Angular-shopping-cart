import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-mini-cart',
  templateUrl: './mini-cart.component.html',
  styleUrls: ['./mini-cart.component.scss'],
})
export class MiniCartComponent {
  @Input() title!: string;
  @Input() price!: number;
  @Input() id!: number;

  @Output() removeFromCart = new EventEmitter<number>();

  remove = () => {
    this.removeFromCart.emit(this.id);
  };
}
