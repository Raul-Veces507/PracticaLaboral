import { Component, OnInit } from '@angular/core';
import { ActividadesService } from '../../../services/actividades.service';

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
  constructor(private sevice:ActividadesService) { }

  ngOnInit(): void {
  }


  Economico(){
    this.sevice.ayudaEconomica().subscribe((res)=>{
      this.ActividatesEconomicas=res['mensaje']
    })
    this.ApoyoEconomico=true
    this.ApoyoMaterial=false

  }

  
  Material(){
    this.sevice.ayudaMaterial().subscribe((res)=>{
      this.ActividatesMAteriales=res['mensaje']
    })
    this.ApoyoEconomico=false
    this.ApoyoMaterial=true
  }
}
