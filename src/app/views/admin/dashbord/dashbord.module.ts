import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbordRoutingModule } from './dashbord-routing.module';
import { DashbordComponent } from './dashbord/dashbord.component';
import { PieChartComponent } from './dashbord/pie-chart/pie-chart.component';
import { BarChartComponent } from './dashbord/bar-chart/bar-chart.component';


@NgModule({
  declarations: [
    DashbordComponent,
    PieChartComponent,
    BarChartComponent
  ],
  imports: [
    CommonModule,
    DashbordRoutingModule
  ]
})
export class DashbordModule { }
