import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface client{
  nombre: string,
  apellidos: string,
  pais: string,
  telefono: string
}


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }


  // crea un cliente
  createClient(data): Observable<any>{
    return this.http.post('http://localhost:4201/api/createProveedor_admin', data);
  }

  // Devuelve todos los clientes de la bdd.
  allClients(): Observable<client[]>{
    return this.http.get<client[]>('http://localhost:4201/api/allClient_admin');
  }


}
