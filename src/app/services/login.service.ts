import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt"; // verifica si el token es correcto.
import { Observable } from 'rxjs';
import { LoginModel, LoginResponse } from '../models/auth.interface';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  

  constructor(private router: Router, private http: HttpClient) { }


  // Cierra la sesion, borrando el localStorage "session" en el que esta guardado el token.
  logOut(){
    localStorage.removeItem('session');
    localStorage.removeItem('idSession');
    this.router.navigate(['/']);
  }

  login_admin(data: LoginModel): Observable<LoginResponse>{
    return this.http.post<LoginResponse>('http://localhost:4201/api/login_admin', data);
  }

  /* Obtiene informacion del usuario que ha iniciado session.
  getInfoAdmin(id){
    return this.http.get('http://localhost:4201/api/obtenerAdmin/'+id);
  }*/

  // Devuelve el token.
  getToken(){
    return localStorage.getItem('session');
  }

  // Comprueba si el token (sessión) es valido.
  verifyToken(){
    const token= localStorage.getItem('token');
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);

    if(!token){
      return false;
    }else if(!decodedToken){
      localStorage.removeItem('token');
      return false;
    }
    return true;
  }
}
