import { Component } from '@angular/core';

interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Cream Kicks';


  isSidenavCollapsed= false;
  screenWidth= 0;

  onToggleSideNav(data: SideNavToggle): void{
    this.screenWidth= data.screenWidth;
    this.isSidenavCollapsed= data.collapsed;
  }
}
