
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


const url= environment.url
@Injectable({
  providedIn: 'root'
})
export class ActividadesService {

  constructor(private http: HttpClient) { }

  ayudaEconomica(data:any,file:any): Observable<any>{
   
    return  this.http.get<any>(`${url}ayudaEconomica`,);
  }


  
}
