import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; // peticiones http
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service'; // cookies service
// services
import { LoginService } from 'src/app/services/login.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  error: Error | null = null

  constructor(private http: HttpClient, private loginSvc: LoginService, private cookieService: CookieService, private router: Router){}

  // Controla que todos los campos del formulario son validos
  public formValidator= new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(20)])
  })

  //https://stackblitz.com/edit/angular-mjkpy9?file=src%2Fapp%2Fmessage.service.ts
  // https://jasonwatmore.com/post/2020/07/06/angular-10-communicating-between-components-with-observable-subject
  // https://jasonwatmore.com/post/2019/11/21/angular-http-post-request-examples

  
  login(){
    this.http.post<any>('http://localhost:3000/api/users/login', this.formValidator.value).subscribe({
      next: data =>{
        this.cookieService.set('session', data.token) // guardo el token
        this.router.navigate(['/dashboard'])
      },
      error: error =>{
        this.error= error.error.errors[0].msg;
      }
    })
  }

  newProduct(){
    this.http.post<any>('http://localhost:3000/api/products/createProduct', {model: "NikeRojas", brand: "Adias", uid: "32423434D"
    }).subscribe({
      next: data =>{
        console.log('Registro Completado')
      },
      error: error =>{
        console.log(error)
      }
    })
  }

  
  logOut(){
   this.loginSvc.logOut()
  }



  



  

  

  

  

    

  
}