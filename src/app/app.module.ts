import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VehicalModule } from './vehical/vehical.module';
import { ParentModule } from './parent/parent.module';
import { UpperComponent } from './upper/upper.component';
import { LowerComponent } from './upper/lower/lower.component';
import { FirstComponent } from './first/first.component';
import { SecondModule } from './first/second/second.module';

@NgModule({
  declarations: [
    AppComponent,
    UpperComponent,
    LowerComponent,
    FirstComponent
  ],
  imports: [
    BrowserModule,
    VehicalModule,
    ParentModule,
    SecondModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
