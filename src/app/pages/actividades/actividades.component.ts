import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { environment } from 'src/environments/environment';

const url=environment.urlimg
@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.scss'],
  styles: [`
  :host ::ng-deep button {
      margin-right: .25em;
  }
`],
  providers: [ConfirmationService, MessageService]
})
export class ActividadesComponent implements OnInit {
public Foto:any
  public date1:any
  public cardnino:any
  public cedula:any
  public nombre:any
  public apellido:any
  public Apellido:boolean=false
  public TipoActividad:any
  public inicio:any

    constructor(private service:UsuariosService,
      private confirmationService: ConfirmationService,
    private messageService: MessageService) { }
    
  
    ngOnInit(): void {
    }
  
  
    buscar(){
   
        if(this.cedula==''|| this.cedula==undefined){
          this.Fallido('Ingrese un numero de cedula')
        }else{
          const body = {
            Cedula: this.cedula
          }
      
          this.service.buscarJoven(body).subscribe((res) => {
            console.log(res);
      
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

    RegistrarActividad(){
const body={
  cedula:this.cedula,
  actividad:this.TipoActividad,
  inicio:this.inicio
}

this.service.registrarActividad(body).subscribe((res)=>{

  if (res.ok == true) {
    this.cedula=''
    this.TipoActividad=''
    this.inicio=''
    this.cardnino = false

    this.Completado('Actividad Registrada con exito')
  } else {
    this.Fallido('No se pudo registrar La Actividad')
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
