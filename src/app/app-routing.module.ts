import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
// componentes
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
// UserGuard
import { UserGuard } from './guards/user.guard';

const routes: Routes = [
  { path: '', redirectTo: 'sidenav', pathMatch: 'full' },
  { path: 'dashboard', component: NavbarComponent},
  { path: 'login', component: LoginComponent },
  { path: '**', component: AppComponent },
  { path: 'sidenav', component: SidenavComponent, canActivate: [UserGuard] } // Ruta Vigilada/Protegida
];



@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
