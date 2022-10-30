import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BuscarProductoComponent } from './components/buscar-producto/buscar-producto.component';
// componentes
import { LoginComponent } from './components/login/login.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
// UserGuard
import { UserGuard } from './guards/user.guard';

const routes: Routes = [
  { path: 'dashboard', component: BuscarProductoComponent, canActivate: [UserGuard] }, // Ruta Vigilada/Protegida
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent },
  { path: '**', component: LoginComponent }
];



@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
