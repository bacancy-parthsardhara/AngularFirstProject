import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarComponent } from './car/car.component';
import { BikeComponent } from './bike/bike.component';
import { BicycleComponent } from './bicycle/bicycle.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CarComponent, BikeComponent, BicycleComponent],
  exports: [CarComponent, BikeComponent, BicycleComponent]
})
export class VehicalModule { }
