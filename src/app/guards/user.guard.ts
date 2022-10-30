import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor (private router: Router) {}

  /* Compruebo que tengo el token guardado en el localstorage ('session'),
    si no lo tengo significa que el usuario no ha iniciado sesion y le
    redirijo hacia el login. Y si tiene el token le dejo pasar a la ruta
    que esta protegida por el Guard. Para ver las rutas protegidas ir a ('app-routing')
  */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const session= localStorage.getItem('session')
    if(session == undefined){
      this.router.navigate(['/login'])
      return false;
    }
    return true;
  }
}
