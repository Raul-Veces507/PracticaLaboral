
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
}
