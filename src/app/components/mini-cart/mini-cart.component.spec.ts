import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCartComponent } from './mini-cart.component';

describe('MiniCartComponent', () => {
  let component: MiniCartComponent;
  let fixture: ComponentFixture<MiniCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiniCartComponent]
    });
    fixture = TestBed.createComponent(MiniCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
