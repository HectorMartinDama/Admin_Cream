import { createReducer, on } from "@ngrx/store";
import { AuthState } from "src/app/models/auth.state";
import * as authActions from '../actions/auth.actions';



export const initialState: AuthState = {
    loginData: null,
    isLoading: false,
    isError: null
}


export const authReducer= createReducer(
    initialState,
    on(authActions.loginAction, (state, {data}) =>{
        return {...state, loginData: data, isLoading: true, isError: null};
    }),
    on(authActions.loginSuccessAction, (state) => {
        return {...state, isLoading: false};
    }),
    on(authActions.loginErrorAction, (state, {message}) => {
        return {...state, isLoading: false, isError: message};
    })
)