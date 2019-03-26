import {Injectable} from '@angular/core';
import { Car } from './car';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import {HttpErrorHandler, HandleError} from '../../http-error-handler.service';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';


@Injectable()
export class CarsService {

  private handleError: HandleError;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('carService');
  }

  getCars(): Observable<Car[]> {
    return this.http
      .get<Car[]>('/cars')
      .pipe(catchError(this.handleError('getCars', [])));
  }

  addCar(car: Car): Observable<Car> {
    return this.http
      .post<Car>('/cars', car)
      .pipe(catchError(this.handleError('addCars', car)));
  }

  deleteCar(id: number): Observable<{}> {
    const url = `/car/${id}`;
    return this.http
      .delete(url)
      .pipe(catchError(this.handleError('deleteCars')));
  }

  updateCar(car: Car): Observable<Car> {
    return this.http
      .put<Car>('/car/${car.id}', car)
      .pipe(catchError(this.handleError('updateCar', car)));
  }
}
