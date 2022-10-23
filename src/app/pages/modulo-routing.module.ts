import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { ApoyosComponent } from './apoyos/apoyos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { JovenesComponent } from './jovenes/jovenes.component';
import { Menu2Component } from '../shared/menu2/menu2.component';
import { EditorComponent } from './jovenes/editor/editor.component';
import { RegistroComponent } from './jovenes/registro/registro.component';
import { ListadoComponent } from './apoyos/listado/listado.component';

import { ListadoActividadComponent } from './actividades/listado-actividad/listado-actividad.component';

const rutas: Routes = [
  {
    path: '',
    component: Menu2Component,
    children: [
 
      {path:'Actividades/Actividades',component:ActividadesComponent},
      {path:'Actividades/Listado',component:ListadoActividadComponent},
      {path:'Apoyos/Apoyos',component:ApoyosComponent},
      {path:'Apoyos/Listado',component:ListadoComponent},
      { path: 'inicio', component: DashboardComponent },
      { path: 'joven/CrearJovenes', component: JovenesComponent },
      { path: 'CrearUsuarios', component: UsuariosComponent },
      { path: 'editarJoven/:id', component: EditorComponent},
      { path: 'joven/RegistrarJoven', component: RegistroComponent },


    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild( rutas )
  ],
  exports: [
    RouterModule
  ]
})


export class ModuloRoutingModule { }
