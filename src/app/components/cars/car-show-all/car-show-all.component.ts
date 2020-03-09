import {Component, Input, OnInit} from '@angular/core';
import {Car} from "../../../Car";
import {CarService} from "../../../service/car.service";
import {MessageService} from "../../../service/message.service";

@Component({
  selector: 'app-car-show-all',
  templateUrl: './car-show-all.component.html',
  styleUrls: ['./car-show-all.component.scss']
})
export class CarShowAllComponent implements OnInit {
  
  cars : Car[] = [];
  @Input()car: Car;

  constructor(private carService: CarService, private msg: MessageService) {}

  ngOnInit() {
    this.getAllCars();
    this.msg.getMessage().subscribe(() => {
      this.getAllCars();
    });
  }

  getAllCars(){
    this.carService.getCars().subscribe((all) => {
      this.cars = all;
    });
  }

  remove(id){
    this.carService.deleteCar(id).subscribe((data) => {
      if(data['status'] == 'done'){
        this.getAllCars();
        this.msg.setMessage('success');
      }else{
        this.msg.setMessage('error');
      }
    });
  }

}
