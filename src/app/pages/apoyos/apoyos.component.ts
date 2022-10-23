import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apoyos',
  templateUrl: './apoyos.component.html',
  styleUrls: ['./apoyos.component.scss']
})
export class ApoyosComponent implements OnInit {
public date1:any
public cardnino:boolean=false
  constructor() { }

  ngOnInit(): void {
  }


  buscar(){
    this.cardnino=true
  }

}
