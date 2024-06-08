import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../../services/data.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-addcars',
  templateUrl: './addcars.component.html',
  styleUrls: ['./addcars.component.scss']
})
export class AddcarsComponent implements OnInit {
  selectedFile: File | null = null;

  constructor(private ds: DataService, private route:Router) {}

  ngOnInit(): void {}

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  add(f: NgForm) {
    const formData = new FormData();
    formData.append('serie', f.value.serie);
    formData.append('dateMiseEnMarche', f.value.dateMiseEnMarche);
    formData.append('make', f.value.make);
    formData.append('model', f.value.model);

    if (this.selectedFile) {
      formData.append('file', this.selectedFile);
    }

    this.ds.addCar(formData).subscribe(data =>{
      this.route.navigate(['admin/allcars'])
  })
 } 
 
}
