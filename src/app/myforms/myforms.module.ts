import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyformsRoutingModule } from './myforms-routing.module';
import { Form01Component } from './form01/form01.component';

@NgModule({
  declarations: [Form01Component],
  imports: [
    CommonModule,
    MyformsRoutingModule
  ],
  exports: [Form01Component]
})
export class MyformsModule { }
