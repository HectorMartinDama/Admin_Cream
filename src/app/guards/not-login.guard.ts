import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ignoreElements, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotLoginGuard implements CanActivate {



  constructor(private router: Router){}


  /* Compruebo si tengo token, si lo tengo no le dejo acceder a la pagina
    de login hasta que no se desloge (logout), es decir que no tenga la sessionç
    en el localStorage.
  */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const session= localStorage.getItem('session')
    if(session){
      this.router.navigate(['/dashboard'])
      return false;
    }
    return true;
  }
}
