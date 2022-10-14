import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {ToastModule} from 'primeng/toast';
import {TableModule} from 'primeng/table';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {MultiSelectModule} from 'primeng/multiselect';

import {OverlayPanelModule} from 'primeng/overlaypanel';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    DialogModule,
    TableModule,
    ConfirmDialogModule,
    MenubarModule,
    InputTextModule,
    CascadeSelectModule,
    ToastModule,
    CalendarModule,
    MultiSelectModule,

    OverlayPanelModule,
    DropdownModule

  ],
  exports:[
    CardModule,
    ButtonModule,
    DialogModule,
    TableModule,
    ConfirmDialogModule,
    MenubarModule,
    InputTextModule,
    CascadeSelectModule,
    ToastModule,
    CalendarModule,
    MultiSelectModule,

    OverlayPanelModule,
    DropdownModule

  ]
})
export class PrimeModuleModule { }
