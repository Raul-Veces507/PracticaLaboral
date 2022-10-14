import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { ApoyosComponent } from './apoyos/apoyos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { JovenesComponent } from './jovenes/jovenes.component';
import { Menu2Component } from '../shared/menu2/menu2.component';

const rutas: Routes = [
  {
    path: '',
    component: Menu2Component,
    children: [
 
      {path:'Actividades',component:ActividadesComponent},
      {path:'Apoyos',component:ApoyosComponent},
      { path: 'inicio', component: DashboardComponent },
      { path: 'CrearJovenes', component: JovenesComponent },
      { path: 'CrearUsuarios', component: UsuariosComponent },



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
export class ModuloPrincipalModule { }
