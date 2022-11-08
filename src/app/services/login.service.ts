import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  

  constructor(private router: Router) { }


  // Cierra la sesion, borrando la cookie "session" que esta guardado el token.
  logOut(){
    localStorage.removeItem('session')
    this.router.navigate(['/'])
  }

  



  

  
}
