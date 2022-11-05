import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { environment } from 'src/environments/environment';

const url=environment.urlimg
@Component({
  selector: 'app-capacitaciones',
  templateUrl: './capacitaciones.component.html',
  styleUrls: ['./capacitaciones.component.scss'],
  styles: [`
  :host ::ng-deep button {
      margin-right: .25em;
  }
`],
  providers: [ConfirmationService, MessageService]
})
export class CapacitacionesComponent implements OnInit {
  public date1: any
  public Foto:any
  public cardnino: boolean = false
  public cedula: any
  public nombre: any
  public Apellido: any
  public TipoCap: any=0
  public Capacitacion:any
  public ListCapacitacion:any
  public ListCap: any=0
  
  constructor(private service: UsuariosService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,) { }

  ngOnInit(): void {
    this.service.capacitacion().subscribe((res)=>{
      this.Capacitacion=res['mensaje']
   
      
    })
  }


  buscar() {
    if(this.cedula==''|| this.cedula==undefined){
      this.Fallido('Ingrese un numero de cedula')
    }else{
      const body = {
        Cedula: this.cedula
      }
  
      this.service.buscarJoven(body).subscribe((res) => {
    
  
        if (res.ok == true) {
          this.nombre = res['mensaje'][0].Nombre
          this.Apellido = res['mensaje'][0].Apellido
          this.Foto = `${url}/${res['mensaje'][0].Foto}`
          this.cardnino = true
        } else {
          this.cedula=''
          this.Fallido('usuario no encontrado')
        }
      })
    }
   

  }

  capturar(data: any) {
    const evento = data.target.value
    const body={
      id:evento
    }
    this.service.Listcapacitacion(body).subscribe((res)=>{
      console.log(res);
      this.ListCapacitacion=res['mensaje']
    })
  }




  registrarCap(){


    if(this.TipoCap==0 || this.ListCap==0 ||this.date1=='' || this.date1==undefined){
      this.Fallido('Rellenar todo los campos')
    }else{
      const body = {
        cedula: this.cedula,
        Capacitacio:this.TipoCap,
        LisCap:this.ListCap,
        FechaInicio:this.date1
       
      }

      this.service.registrarCap(body).subscribe((res)=>{
        console.log(res);
        
        if(res.ok==true){
          this.cardnino = false
           this.cedula=''
          this.TipoCap=0
          this.ListCap=0
         this.date1=''
          this.Completado('Capacitacion completada')
        }else{
          this.Fallido('No se pudo registrar la accion')
        }
      })
    }

   
  }

  Completado(titulo: any) {

    this.messageService.add({ severity: 'success', summary: 'success', detail: titulo });
  }

  Fallido(titulo: any) {

    this.messageService.add({ severity: 'error', summary: 'Error', detail: titulo });
  }
}
