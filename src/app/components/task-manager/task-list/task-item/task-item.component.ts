import { Component, OnInit, Input } from '@angular/core';
import {Car} from "../../../../Car";
import {CarService} from "../../../../service/car.service";
import {MessageService} from "../../../../service/message.service";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input()car: Car;

  constructor(private cs:CarService, private msg:MessageService) { }

  ngOnInit() {
  }

  Delete(){
      this.cs.deleteCar(this.car.id).subscribe((data) => {
        this.msg.setMessage('success');
      });
  }
}
