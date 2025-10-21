import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'dateFormat', standalone: true })
export class DateFormatPipe implements PipeTransform {
  transform(value: any, format: string = 'shortDate'): any {
    if (!value) return '';
    const d = new Date(value);
    return d.toLocaleDateString();
  }
}
