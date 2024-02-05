import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addzero'
})
export class AddzeroPipe implements PipeTransform {

  transform(phone: number): string {
    if(!phone) return ''
    return '0'+phone;
  }

}
