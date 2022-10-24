
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


const url= environment.url
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  registro(data:any,file:any): Observable<any>{
   
    const fd=new FormData;
    fd.append('file',file,`${Math.random().toString(36).substring(2)}.jpg`)
    fd.append("data", JSON.stringify(data))

    return  this.http.post<any>(`${url}registro`,fd);
  }

  muchachoId(data:any): Observable<any>{
   
   
    return  this.http.post<any>(`${url}muchachoId`,data);
  }


  muchachos(): Observable<any>{
  

    return  this.http.get<any>(`${url}muchachos`);
  }


  buscarJoven(data:any): Observable<any>{
  

    return  this.http.post<any>(`${url}buscarJoven`,data);
  }

  registrarApoyoMateral(data:any){
    return  this.http.post<any>(`${url}registrarApoyoMateral`,data);
  }
  registrarApoyoEconomico(data:any){
    return  this.http.post<any>(`${url}registrarApoyoEconomico`,data);
  }

  registrarActividad(data:any){
    return  this.http.post<any>(`${url}registrarActividad`,data);
  }

}
