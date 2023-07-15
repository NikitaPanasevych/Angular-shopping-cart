import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productHeadingPipe',
})
export class ProductHeadingPipe implements PipeTransform {
  transform(value: string): string {
    if (value.length > 25) {
      return value.substring(0, 25) + '...';
    }
    return value;
  }
}
