import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { ApoyosComponent } from './apoyos/apoyos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { JovenesComponent } from './jovenes/jovenes.component';

import { PrimeModuleModule } from '../prime-module/prime-module.module';
import { RegistroComponent } from './jovenes/registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListadoComponent } from './apoyos/listado/listado.component';
import { ListadoActividadComponent } from './actividades/listado-actividad/listado-actividad.component';

@NgModule({
  declarations: [ActividadesComponent,ApoyosComponent,DashboardComponent,JovenesComponent,UsuariosComponent,RegistroComponent, ListadoComponent, ListadoActividadComponent],
  imports: [
PrimeModuleModule,
CommonModule,
FormsModule,
ReactiveFormsModule
  ]
})
export class ModuloPrincipalModule { }
