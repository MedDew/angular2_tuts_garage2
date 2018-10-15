import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../cars/shared/car.model';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit 
{
  @Input() selectedCar : Car;

  constructor() 
  {

  }

  ngOnInit() 
  {

  }

}
