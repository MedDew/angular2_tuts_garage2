import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CarsComponent } from './cars.component';
import { CarListComponent } from '../car-list/car-list.component';
import { CarDetailComponent } from '../car-detail/car-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CarsComponent, CarListComponent, CarDetailComponent],//
  exports: [CarsComponent]// CarListComponent, CarDetailComponent
})
export class CarsModule 
{
  
}
