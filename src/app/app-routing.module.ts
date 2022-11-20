import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

// componentes
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


// UserGuard
import { UserGuard } from './guards/user.guard';
import { DashboardGuard } from './guards/dashboard.guard';
import { NotLoginGuard } from './guards/not-login.guard';



const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, 
    canActivate: [UserGuard], // protege la propia ruta (/dashboard)
    canActivateChild: [DashboardGuard], // protege las rutas que cuelgan de ella (rutas hijas)
    children: [
      {
        path: 'products/addProduct', // Ruta Completa: dashboard/products/addProduct
        component: DashboardComponent
      }
    ]  
  },
  { path: '', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
];



@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
