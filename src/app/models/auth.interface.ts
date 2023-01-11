export interface LoginModel{
    email: string, 
    password: string
}


// lo que devuelve el backend
export interface LoginResponse{
    token: string,
    _id: string
}