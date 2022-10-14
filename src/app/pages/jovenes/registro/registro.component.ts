import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ConfirmationService, MessageService } from 'primeng/api';

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


ngOnInit(): void {
  
}
  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private sanitizer: DomSanitizer) { }

  
  InputVar: any;

  public verimage: any = []
  public productos: any;
  public Seccioncrear = ''
  public filterName = '';
  public bodega = localStorage.getItem('bodega');
  public displayModal: boolean = false;
  public displayModal1: boolean = false;
  public categorias: any

  public seccionimg = ''
  public idmenu: any









  Cancelarmodal() {
    this.InputVar.nativeElement.value = "";
    this.filterName = ""
    this.Seccioncrear = ""
    this.displayModal1 = false
    this.seccionimg = ""

    this.displayModal = false
    const titulo = 'Creacion de registro cancelada'
    this.Canceldado(titulo)
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


  
}
