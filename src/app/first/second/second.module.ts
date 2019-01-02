import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThirdComponent } from './third/third.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ThirdComponent],
  exports: [ThirdComponent]
})
export class SecondModule { }
