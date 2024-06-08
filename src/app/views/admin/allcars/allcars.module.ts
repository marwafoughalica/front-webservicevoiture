import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllcarsRoutingModule } from './allcars-routing.module';
import { AllcarsComponent } from './allcars.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AllcarsComponent
  ],
  imports: [
    CommonModule,
    AllcarsRoutingModule,
    FormsModule
  ]
})
export class AllcarsModule { }
