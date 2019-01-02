import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildModule } from './child/child.module';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  exports: [ChildModule]
})
export class ParentModule { }
