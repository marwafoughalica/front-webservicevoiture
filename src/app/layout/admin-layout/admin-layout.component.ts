import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit{

  constructor(private router : Router)
  {

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  currentComponent = "";
  setComponent(component: string) {
    this.currentComponent = component;
  }

  getClickedButton(event:any)
  {
    console.log(event);
    
    if(event == 'dashboard')
    {
      this.router.navigate([ "admin/dashboard" ])
    }
    else if (event == 'allcars')
    {
      this.router.navigate([ "admin/allcars" ])
    }
    else if (event == 'addCar')
    {
      this.router.navigate([ "admin/addcar" ])
    }
   
  }
}
