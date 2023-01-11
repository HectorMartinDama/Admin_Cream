import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private loginSvc: LoginService) { }

  ngOnInit(): void {
    /*this.loginSvc.getInfoAdmin(localStorage.getItem('idSession')).subscribe({
      next: data =>{
        console.log(data);
      },
      error: error =>{
        console.log(error);
      }
    })*/
  }
    

}
