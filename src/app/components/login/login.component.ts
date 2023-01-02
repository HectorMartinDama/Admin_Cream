import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; // peticiones http
import { Router } from '@angular/router';
// services
import { LoginService } from 'src/app/services/login.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  error: Error | null = null
  userName: String | null= null
  userEmail: String | null= null

  constructor(private http: HttpClient, private loginSvc: LoginService, private router: Router){}

  // Controla que todos los campos del formulario son validos
  public formValidator= new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(20)])
  });

  //https://stackblitz.com/edit/angular-mjkpy9?file=src%2Fapp%2Fmessage.service.ts
  // https://jasonwatmore.com/post/2020/07/06/angular-10-communicating-between-components-with-observable-subject
  // https://jasonwatmore.com/post/2019/11/21/angular-http-post-request-examples

  
  login(){
    this.loginSvc.login_admin(this.formValidator.value).subscribe({
      next: data =>{
        localStorage.setItem('session', data.token) // guardo el token.
        localStorage.setItem('idSession', data._id) // guardo el id de la session
        this.router.navigate(['/dashboard']);
      },
      error: error =>{
        this.error= error.error.error;
      }
    })
  }

  

 

  // cierra session
  logOut(){
   this.loginSvc.logOut()
  }

}