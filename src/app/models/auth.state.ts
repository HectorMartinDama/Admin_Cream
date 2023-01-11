import { LoginModel } from "./auth.interface";


// estado incial
export interface AuthState {
    loginData: LoginModel | null,
    isLoading: boolean,
    isError: string | null
}