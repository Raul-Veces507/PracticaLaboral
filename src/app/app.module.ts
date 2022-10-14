import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';

import { LoginModule } from './login/login.module';

import { OverlayModule } from '@angular/cdk/overlay';
import { CdkMenuModule } from '@angular/cdk/menu';
import { PrimeModuleModule } from './prime-module/prime-module.module';
import { ModuloPrincipalModule } from './pages/modulo-principal.module';
export function tokenGetter() {
  return localStorage.getItem('token');
}
@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    OverlayModule,
    CdkMenuModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PrimeModuleModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    ModuloPrincipalModule,
    LoginModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['http://127.0.0.1:8000/api/login'],
        disallowedRoutes: ['http://example.com/examplebadroute/']
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
