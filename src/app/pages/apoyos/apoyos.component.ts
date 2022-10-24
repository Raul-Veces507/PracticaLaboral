import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { environment } from 'src/environments/environment';

const url=environment.urlimg
@Component({
  selector: 'app-apoyos',
  templateUrl: './apoyos.component.html',
  styleUrls: ['./apoyos.component.scss'],
  styles: [`
  :host ::ng-deep button {
      margin-right: .25em;
  }
`],
  providers: [ConfirmationService, MessageService]
})

export class ApoyosComponent implements OnInit {
  public date1: any
  public Foto:any
  public cardnino: boolean = false
  public cedula: any
  public nombre: any
  public Apellido: any
  public Material: any
  public Donador: any
  public TipoApoyo: any
  public Monto: any
  public apoyoMaterial: boolean = false
  public apoyoEconomico: boolean = false

  constructor(private service: UsuariosService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,) { }

  ngOnInit(): void {
  }


  buscar() {
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

  capturar(data: any) {
    const evento = data.target.value

    if (evento == 1) {
      this.apoyoEconomico = true
      this.apoyoMaterial = false
      this.TipoApoyo = ''
      this.Monto = ''
    } else {
      this.Donador = ''
      this.Material = ''
      this.apoyoMaterial = true
      this.apoyoEconomico = false
    }
  }


  RegistrarMAterial() {
    const body = {
      cedula: this.cedula,
      donador: this.Donador,
      material: this.Material
    }
    this.service.registrarApoyoMateral(body).subscribe((res) => {
      if (res.ok == true) {

        this.Completado('Apoyo Registrado con exito')
      } else {
        this.Fallido('No se pudo registrar el Apoyo')
      }

    })

  }


  RegistrarApoyoEconomico() {
    const body = {
      cedula: this.cedula,
      Tipo: this.TipoApoyo,
      Monto: this.Monto
    }
    this.service.registrarApoyoEconomico(body).subscribe((res) => {
      if (res.ok == true) {
        this.Completado('Apoyo Registrado con exito')
      } else {
        this.Fallido('No se pudo registrar el Apoyo')
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
