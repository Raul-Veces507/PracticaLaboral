import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-jovenes',
  templateUrl: './jovenes.component.html',
  styleUrls: ['./jovenes.component.scss'],
  styles: [`
  :host ::ng-deep button {
      margin-right: .25em;
  }
`],
  providers: [ConfirmationService, MessageService]
})
export class JovenesComponent implements OnInit {

  public usuario: any
  constructor(private service: UsuariosService, private nav: Router, private confirmationService: ConfirmationService,
    private messageService: MessageService,) { }

  ngOnInit(): void {
    this.table()
  }

  table() {
    this.service.muchachos().subscribe((res) => {
      console.log(res);
      if (res.ok == true) {

        this.usuario = res['mensaje']
      }

    })
  }

  Editar(data: any) {
    this.nav.navigate([`/editarJoven/${data}`])
  }





  Completado(titulo: any) {

    this.messageService.add({ severity: 'success', summary: 'success', detail: titulo });
  }

  Fallido(titulo: any) {

    this.messageService.add({ severity: 'error', summary: 'Error', detail: titulo });
  }

  Canceldado(titulo: any) {

    this.messageService.add({ severity: 'info', summary: 'info', detail: titulo });
  }

}
