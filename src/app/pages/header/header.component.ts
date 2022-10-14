import { Component, HostListener, Input, OnInit } from '@angular/core';
import { lenguages, notificacions, userItems } from './header-dumy.data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() collapsed=false;
  @Input() screenWidth=0;

  canShowSearchAsOverlay=false

  selectLanguage:any;

  lenguages=lenguages
  notificacions=notificacions
  userItems=userItems


  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkCanShowSearchAsOverlay(window.innerWidth)
  }

  ngOnInit(): void {
    this.checkCanShowSearchAsOverlay(window.innerWidth)
    this.selectLanguage=lenguages[0]
  }

  getHeadClass(){
    let styleClass='';
    if(this.collapsed && this.screenWidth>768){
      styleClass='head-trimmed'
    }else{
      styleClass='head-md-screen'
    }
    return  styleClass;
  }

  checkCanShowSearchAsOverlay(innerWidth:number){
    if(innerWidth<845){
      this.canShowSearchAsOverlay=true
    }else{
      this.canShowSearchAsOverlay=false
    }
  }

}
