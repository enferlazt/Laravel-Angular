import { Component } from '@angular/core';
import {CarService} from "../../../service/car.service";
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {NotificationComponent} from '../../../components/notification/notification.component';

@Component({
  selector: 'app-car-add-new',
  templateUrl: './car-add-new.component.html',
  styleUrls: ['./car-add-new.component.scss']
})
export class CarAddNewComponent{

  brand:string = '';
  model:string = '';
  year:number;
  image:string;
  price:number;
  mileage:number = 0;
  description:string;

  constructor(private ts:CarService, private router: Router, private snackBar: MatSnackBar) { }

  add(event){
    event.preventDefault();
    if(this.brand != '' && this.model != '' && this.year > 0 && this.price > 0){
      this.ts.addCar(this.brand, this.model, this.year, this.image, this.price, this.mileage, this.description)
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
