import { Pipe, PipeTransform } from '@angular/core';
import { Person } from './main.component';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(arrPerson: Person[], sort: string): Person[] {
    if (!arrPerson) {
      return [];
    }
    if (!sort) {
      return arrPerson;
    }

    if (sort === 'ascName') {
      return arrPerson.sort((a, b) => (a.name > b.name) ? 1 : ((a.name < b.name) ? -1 : 0));
    }
    else if (sort === 'descName') {
      return arrPerson.sort((a, b) => (a.name < b.name) ? 1 : ((a.name > b.name) ? -1 : 0));
    }
    else if (sort === 'ascSurname') {
      return arrPerson.sort((a, b) => (a.surname > b.surname) ? 1 : ((a.surname < b.surname) ? -1 : 0));
    }
    else if (sort === 'descSurname') {
      return arrPerson.sort((a, b) => (a.surname < b.surname) ? 1 : ((a.surname > b.surname) ? -1 : 0));
    }
    else if (sort === 'ascPhoneNumber') {
      return arrPerson.sort((a, b) => +a.phoneNumber - +b.phoneNumber);
    }
    else if (sort === 'descPhoneNumber') {
      return arrPerson.sort((a, b) => +b.phoneNumber - +a.phoneNumber);
    }

    return arrPerson;
  }

}
