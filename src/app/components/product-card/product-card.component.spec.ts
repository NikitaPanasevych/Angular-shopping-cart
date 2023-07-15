import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule
import { ProductCardComponent } from './product-card.component';
import { By } from '@angular/platform-browser';
import { ProductHeadingPipe } from 'src/app/pipes/product-heading.pipe';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatIconModule],
      declarations: [ProductCardComponent, ProductHeadingPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);

    // Set input properties
    component.title = 'Product Title';
    component.price = 10;
    component.description = 'Product Description';
    component.image = 'product.jpg';
    component.id = 1;

    fixture.detectChanges();
  });

  it('should emit addToCart event when add button is clicked', () => {
    spyOn(component.addToCart, 'emit');

    const addButton = fixture.debugElement.query(By.css('.add-button'));
    addButton.triggerEventHandler('click', null);

    expect(component.addToCart.emit).toHaveBeenCalledWith(component.id);
  });
});
