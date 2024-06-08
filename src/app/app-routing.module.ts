import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontLayoutComponent } from './layout/front-layout/front-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { TestComponent } from './views/test/test.component';

const routes: Routes = [
  {path:'test', component: TestComponent},
  {path:'',component:FrontLayoutComponent,children:[
    {path:'',loadChildren:()=>import('./views/home/home.module').then(m=>m.HomeModule)}
    
  ]},
  {path:'admin',component:AdminLayoutComponent, children:[
    {path:'',loadChildren:()=>import('./views/admin/dashbord/dashbord.module').then(m=>m.DashbordModule)},
    {path:'',loadChildren:()=>import('./views/admin/allcars/allcars.module').then(m=>m.AllcarsModule)},
    {path:'',loadChildren:()=>import('./views/admin/addcars/addcars.module').then(m=>m.AddcarsModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
