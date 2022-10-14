import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActividadesComponent } from './actividades/actividades.component';
import { ApoyosComponent } from './apoyos/apoyos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JovenesComponent } from './jovenes/jovenes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';



@NgModule({
  declarations: [ActividadesComponent,ApoyosComponent,DashboardComponent,JovenesComponent,UsuariosComponent],
  imports: [
    CommonModule
  ]
})
export class ModuloRoutingModule { }
