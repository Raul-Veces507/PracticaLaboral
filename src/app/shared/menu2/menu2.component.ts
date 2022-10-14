import { Component, OnInit } from '@angular/core';
interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.css']
})
export class Menu2Component implements OnInit {

  constructor() { }
  isSideNavCollapsed = false;
  screenWidth = 0;
  ngOnInit(): void {
  }
  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
