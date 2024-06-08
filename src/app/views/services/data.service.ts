import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Car } from 'src/app/views/entities/car'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = environment.apiUrl + "/voiture";

  constructor(private http: HttpClient) {}

  getAllCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl);
  }

  addCar(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
  /*deleteCar(id:any){
    return this.http.delete(this.apiUrl, id)
  }*/
  deleteCar(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  updateCar(id:string, newprofile:any){
    return this.http.put<Car>(`${this.apiUrl}/${id}`, newprofile)
  }
}
