import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneHref',
  standalone: true,
})
export class PhoneHrefPipe implements PipeTransform {
  transform(phone: string): string {
    return 'tel:' + phone.replace(/[^+\d]/g, '');
  }
}
