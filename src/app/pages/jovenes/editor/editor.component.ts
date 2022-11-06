import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { DatePipe } from '@angular/common';

import { environment } from 'src/environments/environment';

const url = environment.urlimg
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  styles: [`
  :host ::ng-deep button {
      margin-right: .25em;
  }
`],
  providers: [ConfirmationService, MessageService]
})
export class EditorComponent implements OnInit {
  public verimage: any = []
  public filterName: any
  public Foto: any
  public editor: any
  public nombre1: any
  public nombre2: any
  public apellido1: any
  public apellido2: any
  public Cedula: any
  public sexo: any
  public Nacimiento: any
  public Familiar: any
  public Direccion: any
  public Organo: any
  public FechaIngreso: any
  public Escolaridad: any
  public Etnia: any
  public Motivo: any
  public imagen: any
  public seccionimg = ''
  public id: any
  public idMuchacho: any



  constructor(private sanitizer: DomSanitizer,
    private _activatedRoute: ActivatedRoute, private service: UsuariosService, private messageService: MessageService) {



  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(parameter => {
      this.id = parameter['id']
    })

this.data()


  }



  data(){
    const body = {
      id: this.id
    }
    this.service.muchachoId(body).subscribe((res) => {
      this.idMuchacho= res["mensaje"][0].id
      this.nombre1 = res["mensaje"][0].Nombre
      this.nombre2 = res["mensaje"][0].Nombre2
      this.apellido1 = res["mensaje"][0].Apellido
      this.apellido2 = res["mensaje"][0].Apellido2
      this.Cedula = res["mensaje"][0].Cedula
      this.sexo = res["mensaje"][0].Sexo
      this.Nacimiento = this.convert(res["mensaje"][0].Nacimiento)
      this.Familiar = res["mensaje"][0].Acudiente
      this.Direccion = res["mensaje"][0].Direccion
      this.Organo = res["mensaje"][0].Organo_referente
      this.FechaIngreso = this.convert(res["mensaje"][0].Fecha_ingreso)
      this.Escolaridad = res["mensaje"][0].Escolaridad
      this.Etnia = res["mensaje"][0].Etnia
      this.Motivo = res["mensaje"][0].Motivo
      const Foto = res['mensaje'][0].Foto
      if (Foto == undefined || Foto == '') {
        this.seccionimg = ''
      } else {
        this.Foto = `${url}/${res['mensaje'][0].Foto}`
        this.seccionimg = this.Foto
      }


    })
  }

  evento(event: any) {
    const prueba = event.target.files[0]
    this.extraerbase64(prueba).then((image: any) => {
      this.seccionimg = image.base
    })
    this.verimage.push(prueba)
  }


  extraerbase64 = async ($event: any) => new Promise((resolve, reject) => {

    try {
      const undafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(undafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {

        resolve({
          base: reader.result
        })
      };
      reader.onerror = error => {
        resolve({
          base: null
        })
      }
    } catch (err) {
      return
    }
  })












  convert(str: any) {
    var date = new Date(str), mnth = ("0" + (date.getMonth() + 1)).slice(-2), day = ("0" + date.getDate()).slice(-2); return [date.getFullYear(), mnth, day].join("-");
  }



  Modificar() {
    const body = {
      id: this.idMuchacho,
      nombre1: this.nombre1,
      nombre2: this.nombre2,
      apellido1: this.apellido1,
      apellido2: this.apellido2,
      Cedula: this.Cedula,
      sexo: this.sexo,
      Nacimiento: this.Nacimiento,
      Familiar: this.Familiar,
      Direccion: this.Direccion,
      Organo: this.Organo,
      FechaIngreso: this.FechaIngreso,
      Escolaridad: this.Escolaridad,
      Etnia: this.Etnia,
      Motivo: this.Motivo
    }

    this.service.EditarSinImg(body,this.verimage[0]).subscribe((res) => {

      if (res.ok == true) {
        this.data()
        this.Completado('Usuario modificado con exito')
      } else {
        this.Fallido('No se pudo modificar el usuario')
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
