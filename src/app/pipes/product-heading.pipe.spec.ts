import { ProductHeadingPipe } from './product-heading.pipe';

describe('ProductHeadingPipe', () => {
  it('should cut string to 25 chars', () => {
    const pipe = new ProductHeadingPipe();
    const longString = '12345678901234567890123456789012345678901234567890';
    const expected = '1234567890123456789012345...';
    const result = pipe.transform(longString);
    expect(result).toBe(expected);
  });
});
