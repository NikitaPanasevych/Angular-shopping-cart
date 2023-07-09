import { CartProduct } from 'src/app/models/cart-product.model';
import { Category } from 'src/app/models/products.model';
import { calculateTotalQuantity } from '.';

describe('calculateTotalQuantity', () => {
  it('should return 0 for an empty cart', () => {
    const cart: CartProduct[] = [];
    const total = calculateTotalQuantity(cart);
    expect(total).toBe(0);
  });

  it('should calculate the total quantity correctly for a non-empty cart', () => {
    const cart: CartProduct[] = [
      {
        id: 1,
        title: 'Product 1',
        price: 10,
        description: 'Description 1',
        category: Category.Electronics,
        image: 'image1.jpg',
        rating: { rate: 4.5, count: 100 },
        quantity: 1,
      },
      {
        id: 2,
        title: 'Product 2',
        price: 20,
        description: 'Description 2',
        category: Category.Electronics,
        image: 'image2.jpg',
        rating: { rate: 4.5, count: 100 },
        quantity: 2,
      },
    ];
    const total = calculateTotalQuantity(cart);
    expect(total).toBe(3); 
  });
});
