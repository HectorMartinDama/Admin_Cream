import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
// cookie service
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor (private cookieService: CookieService, private router: Router) {}

  /* Compruebo que tengo el token guardado en la cookie ('session'),
    si no lo tengo significa que el usuario no ha iniciado sesion y le
    redirijo hacia el login. Y si tiene el token le dejo pasar a la ruta
    que esta protegida por el Guard. Para ver las rutas protegidas ir a ('app-routing')
  */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const session= this.cookieService.check('session')
    if(!session){
      this.router.navigate(['/login'])
    }
    return true;
  }
}
