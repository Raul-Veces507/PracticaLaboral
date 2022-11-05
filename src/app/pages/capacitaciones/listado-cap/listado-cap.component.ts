import { Component, OnInit } from '@angular/core';

import { ConfirmationService, MessageService } from 'primeng/api';
import { UsuariosService } from '../../../services/usuarios.service';

@Component({
  selector: 'app-listado-cap',
  templateUrl: './listado-cap.component.html',
  styleUrls: ['./listado-cap.component.scss'],
  styles: [`
  :host ::ng-deep button {
      margin-right: .25em;
  }
`],
  providers: [ConfirmationService, MessageService]
})
export class ListadoCapComponent implements OnInit {

  public pendiente: any
  public finaliaza: any
  public ActPendiente: boolean = false
  public ActFinalizadas: boolean = false
  constructor(private service: UsuariosService,   private confirmationService: ConfirmationService,
    private messageService: MessageService) { }

  ngOnInit(): void {

  }
  pendientes() {
    this.ActPendiente = true
    this.ActFinalizadas = false
   this.actividadPEndiente()
  }

  actividadPEndiente(){
    this.service.CapacitacionesPendientes().subscribe((res) => {


      this.pendiente = res['mensaje']
    })
  }

  finalizadas() {

    this.service.CapacitacionesFinalizadas().subscribe((res) => {    
      this.ActFinalizadas = true
      this.ActPendiente = false
      this.finaliaza = res['mensaje']
    })
  }

  Finalizar(data: any) {

    const body={
      id:data
    }
    this.service.FinalizarCapacitacion(body).subscribe((res)=>{
      if(res.ok==true){
        this.actividadPEndiente()
        this.Completado('Actividad Finalizada')
      }else{
        this.Fallido('No se pudo Finalizar la Actividad')
      }
    
    })
  }


  Completado(titulo: any) {

    this.messageService.add({ severity: 'success', summary: 'success', detail: titulo });
  }

  Fallido(titulo: any) {

    this.messageService.add({ severity: 'error', summary: 'Error', detail: titulo });
  }
}
