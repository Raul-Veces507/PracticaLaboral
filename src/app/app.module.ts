import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ActividadesComponent } from './pages/actividades/actividades.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { ApoyosComponent } from './pages/apoyos/apoyos.component';
import { JovenesComponent } from './pages/jovenes/jovenes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ActividadesComponent,
    UsuariosComponent,
    ApoyosComponent,
    JovenesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
