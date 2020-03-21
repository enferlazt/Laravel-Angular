import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Car } from '../Car';
import {Observable} from "rxjs";
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

let headers: HttpHeaders = new HttpHeaders();
headers = headers.append('enctype', 'multipart/form-data');
headers = headers.append('Content-Type', 'application/json');
headers = headers.append('X-Requested-With', 'XMLHttpRequest');

@Injectable({
  providedIn: 'root'
})
export class CarService {

  server: string = 'http://localhost/Laravel-Angular/server/public/api/';
  shared_value: object;
  to_component = new BehaviorSubject<object>({});
  car: object;

  constructor(private http: HttpClient) {
    this.shared_value;
    this.to_component.next(this.shared_value);
  }
  
  sharedGetAll(val) {
    this.shared_value = val;
    this.to_component.next(this.shared_value);
  }

  addCar(brand, model, year, image, price, mileage, description):Observable<Car[]> {
    const newCar = new Car(brand, model, year, image, price, mileage, description);
    return this.http.put<Car[]>(this.server + 'add', newCar);
  }

  getCars(brand, model, yearMin, yearMax, priceMin, priceMax, mileageMin, mileageMax):Observable<Car[]> {
    return this.http.get<Car[]>(this.server + 'all', {params: {
      brand,
      model,
      yearMin,
      yearMax,
      priceMin,
      priceMax,
      mileageMin,
      mileageMax
    }});
  }

  deleteCar(index):Observable<{}> {
    return this.http.delete(this.server + 'delete', {params: {id: index}});
  }

  singularCar(index):Observable<Car> {
    return this.http.get<Car>(this.server + 'singular', {params: {id: index}});
  }

  editCar(index, brand, model, year, image, price, mileage, description):Observable<Car[]> {
    const changes = new Car(brand, model, year, image, price, mileage, description);
    changes.id = index;
    return this.http.put<Car[]>(this.server + 'update', changes);
  }
}
