import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ShopService } from '.';
import { Product } from '../../models/products.model';

describe('ShopService', () => {
  let service: ShopService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ShopService],
    });
    service = TestBed.inject(ShopService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verify that no requests are outstanding
    httpTestingController.verify();
  });

  it('should return an array of length 20', () => {
    const category = ''; // Set the desired category if needed
    const expectedLength = 20;

    service.getProducts(category).subscribe((products) => {
      expect(products.length).toBe(expectedLength);
    });

    const req = httpTestingController.expectOne(
      'https://fakestoreapi.com/products/'
    );
    expect(req.request.method).toBe('GET');

    req.flush(new Array(expectedLength).fill({} as Product)); // Simulate the response with an array of length 20
  });
});
