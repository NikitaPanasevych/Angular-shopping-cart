import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDescriptionPageComponent } from './product-description-page.component';

describe('ProductDescriptionPageComponent', () => {
  let component: ProductDescriptionPageComponent;
  let fixture: ComponentFixture<ProductDescriptionPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDescriptionPageComponent]
    });
    fixture = TestBed.createComponent(ProductDescriptionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
