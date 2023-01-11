import { createAction, props } from "@ngrx/store";
import { LoginModel } from "src/app/models/auth.interface";


/* Resumen de las acciones 
    - Cuando el usuario se logea (inicia session)
    - Success login
    - Error login
*/


export const loginAction= createAction(
    '[Auth] LoginAction',
    props<{data: LoginModel}>()
)

export const loginSuccessAction= createAction('[Auth] LoginSuccessAction')

export const loginErrorAction= createAction(
    '[Auth] LoginErrorAction',
    props<{ message: string}>()
)