import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HomeComponent } from './views/home/home/home.component';
import { DashbordComponent } from './views/admin/dashbord/dashbord/dashbord.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DashbordModule } from './views/admin/dashbord/dashbord.module';
import { AddcarsModule } from './views/admin/addcars/addcars.module';
import { AllcarsModule } from './views/admin/allcars/allcars.module';
import { TestComponent } from './views/test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    DashbordModule,
    AddcarsModule,
    AllcarsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
