import { Component, OnInit } from '@angular/core';
import {CarService} from "../../../service/car.service";
import {MessageService} from "../../../service/message.service";

@Component({
  selector: 'app-car-add-new',
  templateUrl: './car-add-new.component.html',
  styleUrls: ['./car-add-new.component.scss']
})
export class CarAddNewComponent implements OnInit {

  brand:string;
  model:string;
  year:number;
  image:string;
  price:number;
  mileage:number;
  description:string;

  constructor(private ts:CarService, private msg:MessageService) { }

  ngOnInit() {
  }

  add(event){
    event.preventDefault();
    this.ts.addCar(this.brand, this.model, this.year, this.image, this.price, this.mileage, this.description)
      .subscribe((data) => {
        this.brand = '';
        this.model = '';
        this.image = '';
        this.description = '';
        this.msg.setMessage("success");
      });
  }
}
