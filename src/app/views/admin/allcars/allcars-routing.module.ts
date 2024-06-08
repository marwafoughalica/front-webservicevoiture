import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllcarsComponent } from './allcars.component';

const routes: Routes = [
  {path:'allcars',component:AllcarsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllcarsRoutingModule { }
