import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { navbarData } from './nav-data';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  collapsed= false;
  navData= navbarData;



  constructor() { }

  
  



  

}
