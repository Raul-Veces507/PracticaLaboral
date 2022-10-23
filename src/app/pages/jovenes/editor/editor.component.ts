import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router,NavigationEnd, ActivatedRoute  } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { DatePipe } from '@angular/common';


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
public filterName:any
public editor:any
public nombre1:any
public nombre2:any
public apellido1:any
public apellido2:any
public Cedula:any
public sexo:any
public Nacimiento:any
public Familiar:any
public Direccion:any
public Organo:any
public FechaIngreso:any
public Escolaridad:any
public Etnia:any
public Motivo:any
public imagen:any
public seccionimg = ''
public id:any
pipe=new DatePipe('en-US');


  constructor( private sanitizer: DomSanitizer,
    private _activatedRoute: ActivatedRoute,private service:UsuariosService) { 
   
  
    
  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(parameter => {
      this.id = parameter['id']
    })
    const body={
      id:this.id}
    this.service.muchachoId(body).subscribe((res)=>{
      console.log(res);
       this.nombre1=res["mensaje"][0].Nombre
 this.nombre2=res["mensaje"][0].Nombre2
 this.apellido1=res["mensaje"][0].Apellido
 this.apellido2=res["mensaje"][0].Apellido2
 this.Cedula=res["mensaje"][0].Cedula
 this.sexo=res["mensaje"][0].Sexo
 this.Nacimiento=res["mensaje"][0].Nacimiento
 this.Familiar=res["mensaje"][0].Acudiente
 this.Direccion=res["mensaje"][0].Direccion
 this.Organo=res["mensaje"][0].Organo_referente
this.FechaIngreso=this.pipe.transform(Date.now(),'dd/MM/yyyy'),res["mensaje"][0].Fecha_ingreso
 this.Escolaridad=res["mensaje"][0].Escolaridad
 this.Etnia=res["mensaje"][0].Etnia
 this.Motivo=res["mensaje"][0].Motivo
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
















}
