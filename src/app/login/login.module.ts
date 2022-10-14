import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { AppRoutingModule } from './app-routingLogin.module';
import { FormsModule } from '@angular/forms';
import { PrimeModuleModule } from '../prime-module/prime-module.module';




@NgModule({
  declarations: [
LoginComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    PrimeModuleModule
  ]
})
export class LoginModule { }
