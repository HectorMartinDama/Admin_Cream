import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button'; 
import {MatFormFieldModule} from '@angular/material/form-field';
// animaciones del navegador
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// peticiones http
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// cookie serivice
import { CookieService } from 'ngx-cookie-service';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
// componentes
import { LoginErrorComponent } from './components/login/login-error/login-error.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BodyComponent } from './components/body/body.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SublevelMenuComponent } from './components/sidenav/sublevel-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginErrorComponent,
    SidenavComponent,
    BodyComponent,
    NavbarComponent,
    SublevelMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  providers: [CookieService, { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
