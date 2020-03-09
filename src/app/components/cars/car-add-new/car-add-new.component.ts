import { Component, OnInit } from '@angular/core';
import {CarService} from "../../../service/car.service";
import {MessageService} from "../../../service/message.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-add-new',
  templateUrl: './car-add-new.component.html',
  styleUrls: ['./car-add-new.component.scss']
})
export class CarAddNewComponent implements OnInit {

  brand:string = '';
  model:string = '';
  year:number;
  image:string;
  price:number;
  mileage:number = 0;
  description:string;

  constructor(private ts:CarService, private msg:MessageService, private router: Router) { }

  ngOnInit() {
  }

  add(event){
    event.preventDefault();
    if(this.brand != '' && this.model != '' && this.year > 0 && this.price > 0){
      this.ts.addCar(this.brand, this.model, this.year, this.image, this.price, this.mileage, this.description)
        .subscribe(data => {
          if(data['status'] == "done"){
            this.router.navigate(['cars']);
          }else{

          }
          // this.msg.setMessage("success");
        });
    }
  }
}
