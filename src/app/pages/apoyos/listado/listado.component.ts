import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  public ApoyoEconomico:boolean=false
  public ApoyoMaterial:boolean=false
  public ActividatesMAteriales:any
  public ActividatesEconomicas:any
  constructor() { }

  ngOnInit(): void {
  }


  Economico(){
    this.ApoyoEconomico=true
    this.ApoyoMaterial=false

  }

  
  Material(){
    this.ApoyoEconomico=false
    this.ApoyoMaterial=true
  }
}
