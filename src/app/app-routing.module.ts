import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedirectGuard } from './guard/redirect.guard';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
    canActivate: [RedirectGuard]
  },
  {
    path: 'menu',
    loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule),
    canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
