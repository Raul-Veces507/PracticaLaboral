import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Menu2Component } from './menu2/menu2.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkMenuModule } from '@angular/cdk/menu';
import { ModuloRoutingModule } from '../pages/modulo-routing.module';
import { HeaderComponent } from '../pages/header/header.component';
import { BodyComponent } from '../pages/body/body.component';
import { PrimeModuleModule } from '../prime-module/prime-module.module';



@NgModule({
  declarations: [

    Menu2Component,
    SidenavComponent,
    BodyComponent,
    SublevelMenuComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    PrimeModuleModule,
   ModuloRoutingModule,
    OverlayModule,
    CdkMenuModule,
  ]
})
export class SharedModule { }
