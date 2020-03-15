import { Component, OnInit } from '@angular/core';
import {CarService} from "../../../service/car.service";
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {NotificationComponent} from '../../../components/notification/notification.component';
import {ValidatorFn, Validators, AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';


export interface BrandList {
  letter: string;
  names: string[];
}

function autocompleteValidator(validOptions: Array<object>): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    for(let elem in validOptions){
      if (validOptions[elem]['names'].indexOf(control.value) !== -1) {
        return null
      }
    }
    return { 'invalidAutocomplete': { value: control.value } }
  }
}

function yearValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const current = new Date().getFullYear();
    if (control.value != null && control.value >= '1920' && control.value <= current) {
      return null
    }
    return { 'invalidInput': { value: control.value } }
  }
}

function numberValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (control.value != null && control.value > '0') {
      return null
    }
    return { 'invalidInput': { value: control.value } }
  }
}

function srtingValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (control.value != null && control.value.length > 0) {
      return null
    }
    return { 'invalidInput': { value: control.value } }
  }
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};

@Component({
  selector: 'app-car-add-new',
  templateUrl: './car-add-new.component.html',
  styleUrls: ['./car-add-new.component.scss']
})
export class CarAddNewComponent implements OnInit {
  brandList: BrandList[] = [{
    letter: 'A',
    names: ['Abarth', 'Acura', 'Alfa Romeo', 'Alpina', 'Arash', 'Aston Martin', 'Audi']
  }, {
    letter: 'B',
    names: ['Bentley', 'BMW', 'Bowler', 'Bugatti', 'Buick']
  }, {
    letter: 'C',
    names: ['Cadillac', 'Caterham', 'Chery', 'Chevrolet', 'Chrysler', 'Citroen', 'Corvette']
  }, {
    letter: 'D',
    names: ['Dacia', 'Daihatsu', 'Datsun', 'Dodge', 'DS']
  }, {
    letter: 'F',
    names: ['Ferrari', 'Fiat', 'Fisker', 'Ford']
  }, {
    letter: 'G',
    names: ['Ginetta', 'GMC']
  }, {
    letter: 'H',
    names: ['Holden', 'Honda', 'Hyundai']
  }, {
    letter: 'I',
    names: ['Infiniti', 'Isuzu']
  }, {
    letter: 'J',
    names: ['Jaguar', 'Jeep']
  }, {
    letter: 'K',
    names: ['Kia', 'Koenigsegg']
  }, {
    letter: 'L',
    names: ['Lamborghini', 'Lancia', 'Land Rover', 'Lexus', 'Lincoln', 'Lister', 'Lotus']
  }, {
    letter: 'M',
    names: ['Mahindra & Mahindra', 'Maserati', 'Mastretta', 'Mazda', 'McLaren', 'Mercedes-Benz', 'MG', 'Mini', 'Mitsubishi']
  }, {
    letter: 'N',
    names: ['Nissan', 'Noble']
  }, {
    letter: 'O',
    names: ['Opel']
  }, {
    letter: 'P',
    names: ['Pagani', 'Perodua', 'Peugeot', 'Porsche', 'Proton']
  }, {
    letter: 'R',
    names: ['Ram', 'Renault', 'Roewe', 'Rolls-Royce', 'RUF']
  }, {
    letter: 'S',
    names: ['Saab', 'Saleen', 'Scion', 'Seat', 'Skoda', 'Smart', 'SsangYong', 'Subaru', 'Suzuki']
  }, {
    letter: 'T',
    names: ['Tata', 'Tesla', 'Toyota', 'TVR']
  }, {
    letter: 'V',
    names: ['Vauxhall', 'Venturi', 'Volkswagen', 'Volvo']
  }, {
    letter: 'W',
    names: ['Wiesmann']
  }, {
    letter: 'Z',
    names: ['Zenvo']
  }];

  addForm:FormGroup = new FormGroup({
    brand: new FormControl('', { validators: [autocompleteValidator(this.brandList), Validators.required] }),
    model: new FormControl('', { validators: [srtingValidator(), Validators.required] }),
    year: new FormControl('', { validators: [yearValidator(), Validators.required] }),
    image: new FormControl(''),
    price: new FormControl('', { validators: [numberValidator(), Validators.required] }),
    mileage: new FormControl(0),
    description: new FormControl('')
  });

  brandListOptions: Observable<BrandList[]>;

  constructor(private ts:CarService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
    console.warn(this.addForm);
    this.brandListOptions = this.addForm.controls.brand.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterGroup(value))
      );
  }

  private _filterGroup(value: string): BrandList[] {
    if (value) {
      return this.brandList
        .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
        .filter(group => group.names.length > 0);
    }

    return this.brandList;
  }

  add(event){
    event.preventDefault();
    if(this.addForm.controls.brand.valid && this.addForm.controls.model.valid && this.addForm.controls.year.valid && this.addForm.controls.price.valid){
      this.ts.addCar(this.addForm.controls.brand.value,
        this.addForm.controls.model.value,
        this.addForm.controls.year.value,
        this.addForm.controls.image.value,
        this.addForm.controls.price.value,
        this.addForm.controls.mileage.value,
        this.addForm.controls.description.value)
        .subscribe(data => {
            if(data['status'] == "done"){
              this.msg('Successfully added', 'success-notify');
              this.router.navigate(['cars']);
            }else{
              this.msg('Unsafe server response', 'error-notify');
            }
        });
    }else{
      this.msg('Fill in the require fields', 'error-notify');
    }
  }

  msg(message: string, panelClass: string) {
    this.snackBar.openFromComponent(NotificationComponent, {
      data: message,
      panelClass: panelClass,
      duration: 3000
    });
  }
}
