import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TRISTATECHECKBOX_VALUE_ACCESSOR } from 'primeng/tristatecheckbox';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
  styles: [`
  :host ::ng-deep button {
      margin-right: .25em;
  }
`],
  providers: [ConfirmationService, MessageService]
})
export class RegistroComponent implements OnInit {


  @ViewChild('takeInput', { static: false })
  InputVar: any;
  public verimage: any = []
  public filterName = '';
  public formulari: any
  public seccionimg = ''
  public Parentesco: any
  public displayModal: boolean = false;
  public Familares: boolean = false;
  public parent: any
  public name: any
  public edad: any
  public Familia: any = []
  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private sanitizer: DomSanitizer,
    private fb: FormBuilder,
    private service: UsuariosService) { }


  ngOnInit(): void {

  }





  miFormulario: FormGroup = this.fb.group({
    nombre1: ['', [Validators.required]],
    nombre2: ['',],
    apellido1: ['', [Validators.required]],
    apellido2: ['',],
    Cedula: ['', [Validators.required]],
    sexo: ['', [Validators.required]],
    Nacimiento: ['', [Validators.required]],
    Familiar: ['', [Validators.required]],
    Direccion: ['', [Validators.required]],
    Organo: ['', [Validators.required]],
    FechaIngreso: ['', [Validators.required]],
    Escolaridad: ['', [Validators.required]],
    Etnia: ['', [Validators.required]],
    Motivo: ['', [Validators.required]],
    imagen: ['', []],




  })

  campoNoValido(nombreCampo: string) {
    return this.miFormulario.controls[nombreCampo].errors &&
      this.miFormulario.controls[nombreCampo].touched
  }



  registrase() {

    this.service.registro(this.miFormulario.getRawValue(), this.verimage[0]).subscribe((res) => {
      if (res.ok == true) {

        const bod2y={
          Familia:this.Familia
        }
          
            this.service.RegistraFamiliar(bod2y).subscribe((res)=>{
       if(res.ok==true){
        this.Completado('Usuario registrado con exito')
        this.miFormulario.reset()
        this.InputVar.nativeElement.value = "";
        this.seccionimg = ""
        this.Familares = false
        this.Familia=''
       }else{
        this.Fallido('No se pudo registrar el usuario')
        this.InputVar.nativeElement.value = "";
        this.seccionimg = ""
       }
          
        })
      
      } else {
        this.Fallido('No se pudo registrar el usuario')
        this.InputVar.nativeElement.value = "";
        this.seccionimg = ""
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
  ///toast

  Completado(titulo: any) {

    this.messageService.add({ severity: 'success', summary: 'success', detail: titulo });
  }

  Fallido(titulo: any) {

    this.messageService.add({ severity: 'error', summary: 'Error', detail: titulo });
  }

  Canceldado(titulo: any) {

    this.messageService.add({ severity: 'info', summary: 'info', detail: titulo });
  }

  // obtenerimage


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


  Capturar(data: any) {
    const valor = data.target.value

    if (valor == 1) {
      this.Familares = true
    } else {
      this.Familares = false
    }



  }

  showModalDialog() {

    this.displayModal = true
    this.service.ObtenerParentesco().subscribe((res) => {
      this.Parentesco = res['mensaje']
    })
  }


  RegistrarFamiliar() {
   
    const Data = this.miFormulario.getRawValue()

    if (Data['Cedula'] == '' || Data['Cedula'] == undefined) {
      this.Fallido('Ingrese la cedula del muchacho al formulario')
    } else {

      if(this.parent==0 ||this.parent=='' ||this.name=='' ||this.name==undefined ||this.edad==0 ||this.edad==''){
        this.Fallido('Debe llenar todo los campos')
      }else{
        let nombreValue:any;
      
        switch (this.parent) {
          case "1":
            nombreValue = "Padre";
            break;
          case "2":
            nombreValue = "Madre  o paterna";
            break;
          case "3":
            nombreValue = "Abuela materna o paterna";
            break;
          case "4":
            nombreValue = "Abuelo materna o paterno";
            break;
          case "5":
            nombreValue = "Tía";
            break;
          case "6":
            nombreValue = "Tío";
            break;
          case "7":
            nombreValue = "Hermanos";
            break;
          case "8":
            nombreValue = "Hermanastros";
            break;
          case "9":
            nombreValue = "Abuelastro";
            break;
          case "10":
            nombreValue = "Abuelastra";
     
        }
  
        const body = {
          cedula: Data['Cedula'],
          Parentesco: this.parent,
          ParentescoNomb: nombreValue,
          Nombre: this.name,
          Edad: this.edad
        }

  
        this.Familia.push(body)
        
        this.parent=0,
  
        this.name='',
        this.edad=''

       
      }
  
  



    }

  }




  Eliminar(data:any){
  
    var indice = this.Familia.indexOf(data); 
    this.Familia.splice(indice, 1);
  }
}
