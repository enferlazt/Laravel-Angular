import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Car } from '../Car';
import {Observable} from "rxjs";

let headers: HttpHeaders = new HttpHeaders();
headers = headers.append('enctype', 'multipart/form-data');
headers = headers.append('Content-Type', 'application/json');
headers = headers.append('X-Requested-With', 'XMLHttpRequest');﻿

@Injectable({
  providedIn: 'root'
})
export class CarService {

  server:string = 'http://localhost/Laravel-Angular/server/public/';

  constructor(private http: HttpClient) { }

  addCar(brand, model, year, image, price, mileage, description):Observable<Car[]> {
    const newCar = new Car(brand, model, year, image, price, mileage, description);
    return this.http.post<Car[]>(this.server + 'add', newCar);
  }

  getCars():Observable<Car[]> {
    return this.http.get<Car[]>(this.server + 'get');
  }

  deleteCar(index):Observable<Car> {
    const newCar = {
      id: index,
      brand: 'not set',
      model: 'not set',
      year: 'not set',
      image: 'not set',
      price: 'not set',
      mileage: 'not set',
      description: 'not set',
      date: new Date()
    };

    return this.http.post<Car>(this.server + 'delete', newCar);
  }

  singularCar(index):Observable<Car> {
    const newCar = {
      id: index,
      brand: 'not set',
      model: 'not set',
      year: 'not set',
      image: 'not set',
      price: 'not set',
      mileage: 'not set',
      description: 'not set',
      date: new Date()
    };

    return this.http.post<Car>(this.server + 'singular', newCar);
  }
}
