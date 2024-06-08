import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcarsComponent } from './addcars.component';

const routes: Routes = [
  {path:'addcar',component:AddcarsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddcarsRoutingModule { }
