import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddProductoComponent } from './components/add-producto/add-producto.component';

// componentes
import { LoginComponent } from './components/login/login.component';
import { BuscarProductoComponent } from './components/buscar-producto/buscar-producto.component';
// UserGuard
import { UserGuard } from './guards/user.guard';
import { DashboardGuard } from './guards/dashboard.guard';
import { HomeComponent } from './components/home/home.component';
import { NotLoginGuard } from './guards/not-login.guard';

const routes: Routes = [
  { path: 'dashboard', component: BuscarProductoComponent, 
    canActivate: [UserGuard], // protege la propia ruta (/dashboard)
    canActivateChild: [DashboardGuard], // protege las rutas que cuelgan de ella (rutas hijas)
    children: [
      {
        path: 'products/addProduct', // Ruta Completa: dashboard/products/addProduct
        component: AddProductoComponent
      }
    ]  
  },
  { path: '', component: AddProductoComponent},
  { path: 'login', component: LoginComponent, canActivate: [NotLoginGuard] },
  { path: '**', component: LoginComponent },
];



@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
