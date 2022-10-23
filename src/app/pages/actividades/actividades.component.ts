import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.scss']
})
export class ActividadesComponent implements OnInit {

  public date1:any
  public cardnino:boolean=false
    constructor() { }
  
    ngOnInit(): void {
    }
  
  
    buscar(){
      this.cardnino=true
    }
  
}
