import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Store, StoreModule } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { CartProduct } from 'src/app/models/cart-product.model';
import { Category } from 'src/app/models/products.model';
import {
  reduceQuantity,
  removeFromCart,
} from 'src/app/reducers/cart/cart.actions';
import { CartState } from 'src/app/reducers/cart/cart.state';
import { TopBarComponent } from './top-bar.component';

describe('TopBarComponent', () => {
  let component: TopBarComponent;
  let store: Store<CartState>;
  let selectSpy: jasmine.Spy;
  let dispatchSpy: jasmine.Spy;
  let fixture: ComponentFixture<TopBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        MatIconModule,
        MatSidenavModule,
        BrowserAnimationsModule,
      ],
      declarations: [TopBarComponent],
      providers: [Store],
    }).compileComponents();

    store = TestBed.inject(Store);
    component = TestBed.createComponent(TopBarComponent).componentInstance;
    selectSpy = spyOn(store, 'select').and.returnValue(of([]));
    dispatchSpy = spyOn(store, 'dispatch');
  });

  it('should reduce quantity of cart item when quantity is greater than 1', () => {
    const cartItem: CartProduct = {
      id: 1,
      title: 'Product 1',
      price: 10,
      description: 'Description 1',
      category: Category.Electronics,
      image: 'image1.jpg',
      rating: { rate: 4.5, count: 100 },
      quantity: 2,
    };
    const cartItems: CartProduct[] = [cartItem];

    selectSpy.and.returnValue(of(cartItems));

    component.ngOnInit(); // Manually call ngOnInit

    component.reduceQuantity(1);

    expect(selectSpy).toHaveBeenCalledWith('cart');
    expect(dispatchSpy).toHaveBeenCalledWith(
      reduceQuantity({ id: 1 }) // Update the action object
    );
  });

  it('should remove cart item when quantity is 1', () => {
    const cartItem: CartProduct = {
      id: 1,
      title: 'Product 1',
      price: 10,
      description: 'Description 1',
      category: Category.Electronics,
      image: 'image1.jpg',
      rating: { rate: 4.5, count: 100 },
      quantity: 1,
    };
    const cartItems: CartProduct[] = [cartItem];

    selectSpy.and.returnValue(of(cartItems));

    component.ngOnInit(); // Manually call ngOnInit

    component.reduceQuantity(1);

    expect(selectSpy).toHaveBeenCalledWith('cart');
    expect(dispatchSpy).toHaveBeenCalledWith(
      removeFromCart({ id: 1 }) // Update the action object
    );
  });
});
