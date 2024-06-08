import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Car } from 'src/app/views/entities/car';

@Component({
  selector: 'app-allcars',
  templateUrl: './allcars.component.html',
  styleUrls: ['./allcars.component.scss']
})
export class AllcarsComponent implements OnInit {


  path = "assets/images"
  dataArray: Car[] = [];
  
  dataCar={
    id: '',
    serie:'',
    dateMiseEnMarche:'',
    make: '',
    model: '',
    image: ''
  }

  constructor(private ds: DataService) {}

  ngOnInit(): void {
    this.ds.getAllCars().subscribe(data => {
      console.log(data)
      this.dataArray = data;
    });
  }

  delete(id: any, i:number) {
      if (window.confirm('Are you sure you want to delete this item?')) {
      this.ds.deleteCar(id).subscribe(response=>{
        console.log(response)
        this.dataArray.splice(i,1)
      })
    }
  }

  
  
  updateCar(f:any){
    let data=f.value
    this.ds.updateCar(this.dataCar.id,data).subscribe(response=>{
      console.log(response)
      let indexId=this.dataArray.findIndex((obj:any)=>obj.id==this.dataCar.id)

      this.dataArray[indexId].serie=data.serie
      this.dataArray[indexId].dateMiseEnMarche=data.dateMiseEnMarche
      this.dataArray[indexId].make=data.make
      this.dataArray[indexId].model=data.model
      this.dataArray[indexId].image=data.image

    })
  }
}
