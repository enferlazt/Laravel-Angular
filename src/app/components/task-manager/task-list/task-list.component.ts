import { Component, OnInit } from '@angular/core';
import {Car} from "../../../Car";
import {CarService} from "../../../service/car.service";
import {MessageService} from "../../../service/message.service";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  cars : Car[] = [];

  constructor(private carService: CarService, private msg: MessageService) {}

  ngOnInit() {
    this.getAllCars();
    this.msg.getMessage().subscribe((data) => {
      this.getAllCars();
    });
  }

  getAllCars(){
    this.carService.getCars().subscribe((all) => {
      this.cars = all;
    });
  }

}
