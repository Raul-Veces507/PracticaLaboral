import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  JwtHelper= new JwtHelperService();
  constructor(public authservice: AuthService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,): boolean{
      
    if(!this.authservice.isAuthenticated()){
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

  
  
  
}
