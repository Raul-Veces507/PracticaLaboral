import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


const url= environment.url

@Injectable({
  providedIn: 'root'
})
export class AuthService {

dato!:any;
token:any ='';

JwtHelper= new JwtHelperService();
 
  constructor(private http: HttpClient, private jtwHelper: JwtHelperService) { }
   
  login(user: any): Observable<any>{
   
    const Headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    };


    return  this.http.post<any>(`${url}userlocal`,user);
  }

  setToken(token:string){

    localStorage.setItem('token',token);
    
  }
  getToken(){
    return localStorage.getItem('token');
  }

  getTokenExpirationDate(){
    const token= localStorage.getItem('token')||'{}';
    return !this.JwtHelper.isTokenExpired(token)
    
  }


  public isAuthenticated(): boolean{
    
  this.token=this.getToken();
  if(this.token==null){
    return false;
  }
    return this.getTokenExpirationDate();
  }

 
}
