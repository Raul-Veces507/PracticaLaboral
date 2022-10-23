import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jovenes',
  templateUrl: './jovenes.component.html',
  styleUrls: ['./jovenes.component.scss']
})
export class JovenesComponent implements OnInit {

  public usuario:any
  constructor(private service:UsuariosService,private nav:Router) { }

  ngOnInit(): void {
    this.service.muchachos().subscribe((res)=>{
      console.log(res);
      if(res.ok==true){

        this.usuario=res['mensaje']
      }
   
    })
  }

  Editar(data:any){
this.nav.navigate([`/editarJoven/${data}`])
  }

  Eliminar(data:any){

  }
}
