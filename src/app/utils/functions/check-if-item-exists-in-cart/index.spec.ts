import { Observable } from 'rxjs';
import { checkIfItemExistsInCart } from '.'; // Replace 'your-file-name' with the actual file name
import { Product, Category, Rating } from 'src/app/models/products.model';

describe('checkIfItemExistsInCart', () => {
  let cart: Observable<Product[]>;

  beforeEach(() => {
    cart = new Observable<Product[]>();
  });

  it('should return true if item exists in the cart', () => {
    const itemId = 1;
    const products: Product[] = [
      {
        id: 1,
        title: 'Product 1',
        price: 10,
        description: 'Description 1',
        category: Category.Electronics,
        image: 'image1.jpg',
        rating: { rate: 4.5, count: 100 },
      },
      // Add more product items as needed
    ];
    const cart: Observable<Product[]> = new Observable<Product[]>(
      (observer) => {
        observer.next(products);
      }
    );

    expect(checkIfItemExistsInCart(itemId, cart)).toBe(true);
  });

  it('should return false if item does not exist in the cart', () => {
    const itemId = 4;
    const products: Product[] = [
      {
        id: 1,
        title: 'Product 1',
        price: 10,
        description: 'Description 1',
        category: Category.Electronics,
        image: 'image1.jpg',
        rating: { rate: 4.5, count: 100 },
      },
      // Add more product items as needed
    ];
    const cart: Observable<Product[]> = new Observable<Product[]>(
      (observer) => {
        observer.next(products);
      }
    );

    const result = checkIfItemExistsInCart(itemId, cart);

    expect(result).toBe(false);
  });
});
