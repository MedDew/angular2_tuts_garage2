import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarDetailComponent } from './car-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CarDetailComponent],
  exports: [CarDetailComponent]
})
export class CarDetailModule 
{

}
