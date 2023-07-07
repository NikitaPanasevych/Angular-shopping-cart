import { cartReducer, initialState } from './cart.reducer';
import {
  addToCart,
  removeFromCart,
  emptyCart,
  addQuantity,
  reduceQuantity,
} from './cart.actions';
import { CartProduct } from 'src/app/models/cart-product.model';
import { Product, Category, Rating } from 'src/app/models/products.model';

describe('cartReducers', () => {
  it('should add a product to the cart', () => {
    const product: Product = {
      id: 1,
      title: 'Product 1',
      price: 10,
      description: 'Description 1',
      category: Category.Electronics,
      image: 'image1.jpg',
      rating: { rate: 4.5, count: 100 },
    };
    const expectedProduct: CartProduct = { ...product, quantity: 1 };
    const action = addToCart({ product });

    const result = cartReducer(initialState, action);

    expect(result).toEqual([expectedProduct]);
  });

  it('should increase the quantity of a product in the cart', () => {
    const initialCart: CartProduct[] = [
      {
        id: 1,
        title: 'Product 1',
        price: 10,
        description: 'Description 1',
        category: Category.Electronics,
        image: 'image1.jpg',
        rating: { rate: 4.5, count: 100 },
        quantity: 2,
      },
      {
        id: 2,
        title: 'Product 2',
        price: 20,
        description: 'Description 2',
        category: Category.Jewelery,
        image: 'image2.jpg',
        rating: { rate: 3.5, count: 50 },
        quantity: 1,
      },
    ];
    const action = addQuantity({ id: 1 });

    const result = cartReducer(initialCart, action);

    expect(result).toEqual([
      {
        id: 1,
        title: 'Product 1',
        price: 10,
        description: 'Description 1',
        category: Category.Electronics,
        image: 'image1.jpg',
        rating: { rate: 4.5, count: 100 },
        quantity: 3,
      },
      {
        id: 2,
        title: 'Product 2',
        price: 20,
        description: 'Description 2',
        category: Category.Jewelery,
        image: 'image2.jpg',
        rating: { rate: 3.5, count: 50 },
        quantity: 1,
      },
    ]);
  });

  it('should decrease the quantity of a product in the cart', () => {
    const initialCart: CartProduct[] = [
      {
        id: 1,
        title: 'Product 1',
        price: 10,
        description: 'Description 1',
        category: Category.Electronics,
        image: 'image1.jpg',
        rating: { rate: 4.5, count: 100 },
        quantity: 3,
      },
      {
        id: 2,
        title: 'Product 2',
        price: 20,
        description: 'Description 2',
        category: Category.Jewelery,
        image: 'image2.jpg',
        rating: { rate: 3.5, count: 50 },
        quantity: 1,
      },
    ];
    const action = reduceQuantity({ id: 1 });

    const result = cartReducer(initialCart, action);

    expect(result).toEqual([
      {
        id: 1,
        title: 'Product 1',
        price: 10,
        description: 'Description 1',
        category: Category.Electronics,
        image: 'image1.jpg',
        rating: { rate: 4.5, count: 100 },
        quantity: 2,
      },
      {
        id: 2,
        title: 'Product 2',
        price: 20,
        description: 'Description 2',
        category: Category.Jewelery,
        image: 'image2.jpg',
        rating: { rate: 3.5, count: 50 },
        quantity: 1,
      },
    ]);
  });

  it('should empty the cart', () => {
    const initialCart: CartProduct[] = [
      {
        id: 1,
        title: 'Product 1',
        price: 10,
        description: 'Description 1',
        category: Category.Electronics,
        image: 'image1.jpg',
        rating: { rate: 4.5, count: 100 },
        quantity: 2,
      },
      {
        id: 2,
        title: 'Product 2',
        price: 20,
        description: 'Description 2',
        category: Category.Jewelery,
        image: 'image2.jpg',
        rating: { rate: 3.5, count: 50 },
        quantity: 1,
      },
    ];
    const action = emptyCart();

    const result = cartReducer(initialCart, action);

    expect(result).toEqual([]);
  });

  it('should remove a product from the cart', () => {
    const initialCart: CartProduct[] = [
      {
        id: 1,
        title: 'Product 1',
        price: 10,
        description: 'Description 1',
        category: Category.Electronics,
        image: 'image1.jpg',
        rating: { rate: 4.5, count: 100 },
        quantity: 2,
      },
      {
        id: 2,
        title: 'Product 2',
        price: 20,
        description: 'Description 2',
        category: Category.Jewelery,
        image: 'image2.jpg',
        rating: { rate: 3.5, count: 50 },
        quantity: 1,
      },
    ];
    const action = removeFromCart({ id: 1 });
    const result = cartReducer(initialCart, action);
    expect(result).toEqual([
      {
        id: 2,
        title: 'Product 2',
        price: 20,
        description: 'Description 2',
        category: Category.Jewelery,
        image: 'image2.jpg',
        rating: { rate: 3.5, count: 50 },
        quantity: 1,
      },
    ]);
  });
});
