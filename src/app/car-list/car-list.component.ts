import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../cars/shared/car.model';


@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit 
{
  @Input() cars : Car[];
  @Output() onSelected = new EventEmitter<Car>();
  constructor() 
  {

  }
  onSelect(selectedCar : Car) : void
  {
    this.onSelected.emit(selectedCar);
  }

  ngOnInit() 
  {

  }

}
