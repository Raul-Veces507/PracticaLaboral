import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { ApoyosComponent } from './apoyos/apoyos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { JovenesComponent } from './jovenes/jovenes.component';

import { PrimeModuleModule } from '../prime-module/prime-module.module';
import { RegistroComponent } from './jovenes/registro/registro.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ActividadesComponent,ApoyosComponent,DashboardComponent,JovenesComponent,UsuariosComponent,RegistroComponent],
  imports: [
PrimeModuleModule,
CommonModule,
FormsModule,
  ]
})
export class ModuloPrincipalModule { }
