import { Component, HostBinding, OnInit } from '@angular/core';
import { ClickOutsideModule } from 'ng-click-outside';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  toggleButton = document.getElementById("nav-toggle");
  masterhead = document.getElementById("masterhead");
  //menuNavigation: nativeElement = document.querySelector("nav li:first");
  menuCollapsed: boolean = false;

  @HostBinding('class') class = 'js-toggle-menu';
  
  constructor() { }
  
  ngOnInit(): void {
    
    this.toggleNavigation()
    
  }
  
  toggleNavigation(): void{
    this.menuCollapsed = !this.menuCollapsed;
  }
  
  onClickedOutside(e: Event) {
    this.menuCollapsed = true;
  }
}
