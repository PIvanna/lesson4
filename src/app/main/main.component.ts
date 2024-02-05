import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public arrPerson: Array<Person> = [];
  public editSCSS = {
    backgroundColor: 'yellow',
    color: 'black'
  }

  public deleteSCSS = {
    backgroundColor: 'red',
    color: 'white'
  }
  public placeholederInputSearch: string = 'search text goes here'
  public field = '';
  public inputAddName = '';
  public inputAddSurname = '';
  public inputAddPhone = '';
  public isColorName = true;
  public isColorSurname = true;
  public isColorPhone = true;
  public type!: string;
  public statusName!: boolean;
  public statusSurname!: boolean;
  public statusPhoneNumber!: boolean;
  public userIndex = this.arrPerson.length;

  changeSortName(): void {
    if (this.statusName == true) {
      this.type = 'descName';
    }
    else if (this.statusName == false) {
      this.type = 'ascName';
    }
    else {
      this.statusName = false;
      this.type = 'ascName';
    }
    this.statusName = !this.statusName;
  }

  changeSortSurname(): void {
    if (this.statusSurname == true) {
      this.type = 'descSurname';
    }
    else if (this.statusSurname == false) {
      this.type = 'ascSurname';
    }
    else {
      this.statusSurname = false;
      this.type = 'ascSurname';
    }
    this.statusSurname = !this.statusSurname;
  }

  changeSortPhoneNumber(): void {
    if (this.statusPhoneNumber == true) {
      this.type = 'descPhoneNumber';
    }
    else if (this.statusPhoneNumber == false) {
      this.type = 'ascPhoneNumber';
    }
    else {
      this.statusPhoneNumber = false;
      this.type = 'ascPhoneNumber';
    }
    this.statusPhoneNumber = !this.statusPhoneNumber;
  }






  addPerson(): void {
    this.hide = true;
  }

  close(): void {
    this.hide = false;
    this.inputAddName = '';
    this.inputAddSurname = '';
    this.inputAddPhone = '';
  }

  save(): void {
    const regName = /^\w{2,15}$/;
    const regSurname = /^[a-zA-Z -]*$/;
    const regPhone = /^063|097[0-9]{7}$/;
    if (regName.test(this.inputAddName) && regSurname.test(this.inputAddSurname) && regPhone.test(this.inputAddPhone)) {
      this.isColorName = true;
      this.isColorSurname = true;
      this.isColorPhone = true;
      let objUser: Person = {
        name: this.inputAddName,
        surname: this.inputAddSurname,
        phoneNumber: this.inputAddPhone
      };
      this.arrPerson.splice(this.userIndex, 1, objUser);
      if (this.type === 'ascName') {
        this.arrPerson.sort((a, b) => (a.name > b.name) ? 1 : ((a.name < b.name) ? -1 : 0));
      }
      else if (this.type === 'descName') {
        this.arrPerson.sort((a, b) => (a.name < b.name) ? 1 : ((a.name > b.name) ? -1 : 0));
      }
      else if (this.type === 'ascSurname') {
        this.arrPerson.sort((a, b) => (a.surname > b.surname) ? 1 : ((a.surname < b.surname) ? -1 : 0));
      }
      else if (this.type === 'descSurname') {
        this.arrPerson.sort((a, b) => (a.surname < b.surname) ? 1 : ((a.surname > b.surname) ? -1 : 0));
      }
      else if (this.type === 'ascPhoneNumber') {
        this.arrPerson.sort((a, b) => +a.phoneNumber - +b.phoneNumber);
      }
      else if (this.type === 'descPhoneNumber') {
        this.arrPerson.sort((a, b) => +b.phoneNumber - +a.phoneNumber);
      }
      this.inputAddName = '';
      this.inputAddSurname = '';
      this.inputAddPhone = '';
      this.hide = false;
      this.userIndex = this.arrPerson.length;
    }
    else {
      if (!regName.test(this.inputAddName)) {
        this.isColorName = false;
      }
      else {
        this.isColorName = true;
      }
      if (!regSurname.test(this.inputAddSurname)) {
        this.isColorSurname = false;
      }
      else {
        this.isColorSurname = true;
      }
      if (!regPhone.test(this.inputAddPhone)) {
        this.isColorPhone = false;
      }
      else {
        this.isColorPhone = true;
      }
    }
  }


  edit(i: number): void {
    let obj: Person = this.arrPerson[i];
    this.hide = true;
    this.inputAddName = obj.name;
    this.inputAddSurname = obj.surname;
    this.inputAddPhone = obj.phoneNumber;
    this.userIndex = i;
  }

  delete(i: number): void {
    this.arrPerson.splice(i, 1);
  }

  public hide = false;

}


export interface Person {
  name: string,
  surname: string,
  phoneNumber: string
}