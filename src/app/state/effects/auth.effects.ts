import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, exhaustMap, map, mergeMap, of, tap } from "rxjs";
import { LoginService } from "src/app/services/login.service";
import * as authActions from '../actions/auth.actions';


@Injectable()
export class AuthEffects {

    constructor(private actions$: Actions, private _loginService: LoginService, private _router: Router){};



    login$= createEffect(() => this.actions$.pipe(
        ofType(authActions.loginAction),
        exhaustMap((action) =>
            this._loginService.login_admin(action.data).pipe(
                map((response) =>{ // todo ok
                    localStorage.setItem('token', response.token);
                    localStorage.setItem('id', response._id)
                    return authActions.loginSuccessAction();
                }),
                catchError((error) =>
                    of( authActions.loginErrorAction({message: 'Email o Contraseña incorrecta'}))
                )
            )
        )
    ))

    // si el login es correcto, redirige a la home page
    loginSuccess$= createEffect(() =>
        this.actions$.pipe(
            ofType(authActions.loginSuccessAction),
            tap(() => { // se pone tap, porque este efecto no retorna una accion
                this._router.navigate(['/dashboard']);
            })
        ),
        {dispatch: false}
    );


}