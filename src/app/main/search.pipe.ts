import { Pipe, PipeTransform } from '@angular/core';
import { Person } from './main.component';


@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arrPerson: Person[], field: string): Person[] {
    if(!arrPerson) return [];
    if(!field) return arrPerson;
    return arrPerson.filter(person => 
      person.name.toLowerCase().includes(field.toLowerCase()) ||
      person.surname.toLowerCase().includes(field.toLowerCase()) ||
      person.phoneNumber.toLowerCase().includes(field.toLowerCase()) 
    );
    
  }

}
