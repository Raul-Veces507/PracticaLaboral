
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

  ayudaEconomica(): Observable<any>{
   
    return  this.http.get<any>(`${url}ayudaEconomica`);
  }

  ayudaMaterial(): Observable<any>{
   
    return  this.http.get<any>(`${url}ayudaMaterial`);
  }


  ActividadesFinalizadas(){
    return  this.http.get<any>(`${url}ActividadesFinalizadas`);
  }
  
  ActividadesPendientes(){
    return  this.http.get<any>(`${url}ActividadesPendientes`);
  }

  FinalizarActividad(data:any){
    return  this.http.post<any>(`${url}FinalizarActividad`,data);
  }
  
  

  
}
