import { Component, OnInit } from '@angular/core';
import { ActividadesService } from '../../../services/actividades.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-listado-actividad',
  templateUrl: './listado-actividad.component.html',
  styleUrls: ['./listado-actividad.component.scss'],
  styles: [`
  :host ::ng-deep button {
      margin-right: .25em;
  }
`],
  providers: [ConfirmationService, MessageService]
})
export class ListadoActividadComponent implements OnInit {
  public pendiente: any
  public finaliaza: any
  public ActPendiente: boolean = false
  public ActFinalizadas: boolean = false
  constructor(private service: ActividadesService,   private confirmationService: ConfirmationService,
    private messageService: MessageService) { }

  ngOnInit(): void {

  }
  pendientes() {
    this.ActPendiente = true
    this.ActFinalizadas = false
   this.actividadPEndiente()
  }

  actividadPEndiente(){
    this.service.ActividadesPendientes().subscribe((res) => {


      this.pendiente = res['mensaje']
    })
  }

  finalizadas() {

    this.service.ActividadesFinalizadas().subscribe((res) => {    
      this.ActFinalizadas = true
      this.ActPendiente = false
      this.finaliaza = res['mensaje']
    })
  }

  Finalizar(data: any) {

    const body={
      id:data
    }
    this.service.FinalizarActividad(body).subscribe((res)=>{
      if(res.ok==true){
        this.actividadPEndiente()
        this.Completado('Actividad Finalizada')
      }else{
        this.Completado('No se pudo Finalizar la Actividad')
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
