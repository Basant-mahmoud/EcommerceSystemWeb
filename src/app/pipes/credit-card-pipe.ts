import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard'
})
export class CreditCardPipe implements PipeTransform {

  transform(value: string): string {
    if(!value){return '';}
      let cleaned = value.replace(/\D/g, '');

      return cleaned.replace(/(\d{4})(?=\d)/g, '$1 - ');
  }


}
