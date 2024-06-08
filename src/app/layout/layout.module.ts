import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontLayoutComponent } from './front-layout/front-layout.component';
import { HomeModule } from '../views/home/home.module';
import { HomeRoutingModule } from '../views/home/home-routing.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FrontLayoutComponent,
    AdminLayoutComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule
  ]
})
export class LayoutModule { }
