import { Component, OnInit } from '@angular/core';
import {CarService} from "../../../service/car.service";
import { Router, NavigationEnd } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {NotificationComponent} from '../../../components/notification/notification.component';
import {FormGroup, FormBuilder} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';

export interface BrandList {
  letter: string;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};

@Component({
  selector: 'app-car-search',
  templateUrl: './car-search.component.html',
  styleUrls: ['./car-search.component.scss']
})
export class CarSearchComponent implements OnInit {
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

  searchForm: FormGroup = this._formBuilder.group({
    brand: '',
    model: '',
    yearMin: '',
    yearMax: '',
    priceMin: '',
    priceMax: '',
    mileageMin: '',
    mileageMax: '',
  });

  mySubscription: any;

  brandListOptions: Observable<BrandList[]>;

  constructor(private ts: CarService, private router: Router, private snackBar: MatSnackBar, private _formBuilder: FormBuilder) {
    this.ts.shared_value = {
      brand: '',
      model: '',
      yearMin: '',
      yearMax: '',
      priceMin: '',
      priceMax: '',
      mileageMin: '',
      mileageMax: '',
    };

    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.router.navigated = false;
      }
    });
  }

  
  ngOnInit() {
    this.brandListOptions = this.searchForm.controls.brand.valueChanges
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

  apply(){
    let obj = {
      brand: this.searchForm.controls.brand.value,
      model: this.searchForm.controls.model.value,
      yearMin: this.searchForm.controls.yearMin.value,
      yearMax: this.searchForm.controls.yearMax.value,
      priceMin: this.searchForm.controls.priceMin.value,
      priceMax: this.searchForm.controls.priceMax.value,
      mileageMin: this.searchForm.controls.mileageMin.value,
      mileageMax: this.searchForm.controls.mileageMax.value
    }
    this.ts.sharedGetAll(obj);
    this.router.navigate(['cars']);
  }
  
  msg(message: string, panelClass: string) {
    this.snackBar.openFromComponent(NotificationComponent, {
      data: message,
      panelClass: panelClass,
      duration: 3000
    });
  }

  
  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }
}
