import {Component, Input, OnInit} from '@angular/core';
import {Car} from "../../../Car";
import {CarService} from "../../../service/car.service";
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {NotificationComponent} from '../../../components/notification/notification.component';

@Component({
  selector: 'app-car-show-all',
  templateUrl: './car-show-all.component.html',
  styleUrls: ['./car-show-all.component.scss']
})
export class CarShowAllComponent implements OnInit {
  
  cars : Car[] = [];
  @Input() car: Car;
  lastRequest: object = {};

  constructor(private ts: CarService, private router: Router, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.lastRequest = this.ts.shared_value;
    this.getAllCars(this.lastRequest);
  }

  getAllCars(params){
    for(let item in params){
      if(params[item] == null){
        params[item] = '';
      }
    }
    this.ts.getCars(
      params.brand,
      params.model,
      params.yearMin,
      params.yearMax,
      params.priceMin,
      params.priceMax,
      params.mileageMin,
      params.mileageMax).subscribe((all) => {
      this.cars = all;
    });
  }

  remove(id){
    this.ts.deleteCar(id).subscribe((data) => {
      if(data['status'] == 'done'){
        this.getAllCars(this.lastRequest);
        this.msg('Successfully deleted', 'success-notify');
      }else{
        this.msg('Unsafe server response', 'error-notify');
      }
    });
  }

  singular(id){
    this.router.navigate([`car/${id}`]);
  }

  msg(message: string, panelClass: string) {
    this.snackBar.openFromComponent(NotificationComponent, {
      data: message,
      panelClass: panelClass,
      duration: 3000
    });
  }

}
