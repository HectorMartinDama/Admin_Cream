import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt"; // verifica si el token es correcto.
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  

  constructor(private router: Router, private http: HttpClient) { }


  // Cierra la sesion, borrando el localStorage "session" en el que esta guardado el token.
  logOut(){
    localStorage.removeItem('session')
    this.router.navigate(['/'])
  }

  login_admin(data): Observable<any>{
    return this.http.post('http://localhost:4201/api/login_admin', data);
  }

  // Devuelve el token.
  getToken(){
    return localStorage.getItem('session');
  }

  // Comprueba si el token (sessión) es valido.
  verifyToken(){
    const token= localStorage.getItem('session');
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    
    if(!decodedToken || !token){
      return false;
    }
    return true;
  }

  



  
}
