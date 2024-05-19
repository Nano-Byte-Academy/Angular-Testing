import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenText',
  standalone: true
})
export class ShortenTextPipe implements PipeTransform {

  transform(value: string, limit: number = 10, trail = '...'): string {
    if (value.length <= limit) {
      return value;
    }
    return value.substring(0, limit) + trail;
  }

}
