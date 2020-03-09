import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Car } from '../Car';
import {Observable} from "rxjs";

let headers: HttpHeaders = new HttpHeaders();
headers = headers.append('enctype', 'multipart/form-data');
headers = headers.append('Content-Type', 'application/json');
headers = headers.append('X-Requested-With', 'XMLHttpRequest');

@Injectable({
  providedIn: 'root'
})
export class CarService {

  server:string = 'http://localhost/Laravel-Angular/server/public/api/';

  constructor(private http: HttpClient) { }

  addCar(brand, model, year, image, price, mileage, description):Observable<Car[]> {
    const newCar = new Car(brand, model, year, image, price, mileage, description);
    return this.http.put<Car[]>(this.server + 'add', newCar);
  }

  getCars():Observable<Car[]> {
    return this.http.get<Car[]>(this.server + 'all');
  }

  deleteCar(index):Observable<{}> {
    return this.http.delete(this.server + 'delete', {params: {id: index}});
  }

  singularCar(index):Observable<Car> {
    return this.http.get<Car>(this.server + 'singular', {params: {id: index}});
  }
}
