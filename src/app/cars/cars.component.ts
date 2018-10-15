import { Component, OnInit } from '@angular/core';
import { Car } from './shared/car.model';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent  implements OnInit{//

  cars : Car[];
  selectedCar : Car;
  constructor()
  {
    this.cars = [
                  new Car(1, "Skoda", "Fabia", 105, 1000, 15000, 5),
                  new Car(2, "Toyota", "Auris", 100, 1000, 25000, 5),
                  new Car(3, "Toyota", "Auris", 100, 1000, 25000, 5),
                  new Car(4, "Hyundai", "Tucson", 150, 1600, 30000, 5),
                  new Car(5, "Opel", "Crossland X", 140, 1289, 18000, 5),
                ];
  }

  onSelect(car : Car) : Car
  {
    this.cars.forEach((c) =>
    {
      if( c.id == car.id )
      {
        console.log("CAR ID : "+c.id+" => "+car.id+" CAR : "+car);
        this.selectedCar = c;

        console.log("CAR ID : "+c.id+" => "+car.id+" this.selectedCar : "+this.selectedCar);
        return this.selectedCar;
      }
    });

    //for(let i = 0; i < this.cars.length; i++)
    //{
      //if( this.cars[i].id == car.id )
      //{
        //console.log("CAR : "+this.cars[0].id);
        //this.selectedCar = this.cars[i];
      //}
    //}
    return null;
  }

  ngOnInit()
  {
  }

}
