import {Component, OnInit} from '@angular/core';

import {Car} from './car';
import {CarsService} from './cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  providers: [CarsService],
  styleUrls: ['./cars.component.scss'],
})

export class CarsComponent implements OnInit {
  cars: Car[];
  editCar: Car;

  constructor(private carService: CarsService) {}

  ngOnInit(): void {
    this.getCars();
  }

  getCars() {
    this.carService.getCars().subscribe(cars => (this.cars = cars));
  }

  add(brand: string): void {
    this.editCar = undefined;
    brand = brand.trim();
    if (!brand) {
      return;
    }

    const newCar: Car = {brand} as Car;
    this.carService.addCar(newCar).subscribe((cars) => this.cars.push(cars));
  }

  delete(car: Car): void {
    this.cars = this.cars.filter(h => h !== car);
    this.carService.deleteCar(car.id).subscribe();
  }

  edit(car) {
    this.editCar = car;
  }

  update() {
    if (this.editCar) {
      this.carService.updateCar(this.editCar).subscribe(car => {
        const ix = car ? this.cars.findIndex(h => h.id === car.id) : -1;
        if (ix > -1) {
          this.cars[ix] = car;
        }
      });
      this.editCar = undefined;
    }
  }
}
