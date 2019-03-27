import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Car} from "../../../Car";
import {CarService} from "../../../service/car.service";

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {

  car: Car;

  constructor(private route:ActivatedRoute, private carservice: CarService) {}

  ngOnInit() {
    this.route.params.subscribe((data) => {
      this.carservice.singularCar(data.id).subscribe((auto) => {
        this.car = auto;
      });
    });
  }
}
