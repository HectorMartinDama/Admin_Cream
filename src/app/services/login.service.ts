import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  

  constructor(private http: HttpClient, private router: Router) { }


  // Cierra la sesion, borrando la cookie "session" que esta guardado el token.
  logOut(){
    localStorage.removeItem('session')
    this.router.navigate(['/login'])
  }

  // Devuelve el nombre de usuario y el email apartir del token.
  infoUserName(){
    this.http.get<any>('http://localhost:3000/api/users/info').subscribe({
      next: data =>{
       return data.username;
      }
    })
  }

  infoUserEmail(){
    this.http.get<any>('http://localhost:3000/api/users/info').subscribe({
      next: data =>{
       return data.email;
      }
    })
  }



  /*login(email: string, password: string){
    this.http.post<any>('http://localhost:3000/api/users/login', {email, password}).subscribe({
      next: data =>{
        console.log(data)
        this.router.navigate(['/dashboard'])
      },
      error: error =>{
        this.error= error.error.errors[0].msg;
      }
    })
  }*/

  
}
