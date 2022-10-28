import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// cookie service
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  error: Error | null = null

  constructor(private http: HttpClient, private router: Router, private cookieService: CookieService) { }

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

  // Cierra la sesion, borrando la cookie "session" que esta guardado el token.
  logOut(){
    this.cookieService.delete('session')
  }
}
