import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddcarsRoutingModule } from './addcars-routing.module';
import { AddcarsComponent } from './addcars.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddcarsComponent
  ],
  imports: [
    CommonModule,
    AddcarsRoutingModule,
    FormsModule
  ]
})
export class AddcarsModule { }
