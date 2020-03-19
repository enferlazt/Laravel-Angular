import { Component, OnInit } from '@angular/core';
import {Car} from '../../../Car';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {CarService} from '../../../service/car.service';

@Component({
  selector: 'app-car-single',
  templateUrl: './car-single.component.html',
  styleUrls: ['./car-single.component.scss']
})
export class CarSingleComponent implements OnInit {

  car: Car;

  constructor(private route:ActivatedRoute, private router: Router, private carservice: CarService) {}

  ngOnInit() {
    this.route.params.subscribe((data) => {
      this.carservice.singularCar(data.id).subscribe((auto) => {
        this.car = auto;
      });
    });
  }

  
  back(){
    this.router.navigate(['cars']);
  }
}
