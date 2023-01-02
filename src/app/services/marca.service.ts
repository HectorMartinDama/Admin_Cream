import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface marca{
  nombre: String
}

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  constructor(private http: HttpClient) { }

  // crea marca
  createMarca(data): Observable<any>{
    return this.http.post<any>('http://localhost:4201/api/marcas/createMarca', data);
  }

  // devuelve todas las marcas
  allMarcas(): Observable<marca[]>{
    return this.http.get<marca[]>('http://localhost:4201/api/marcas/allMarcas');
  }

  // borrar la marca
  borrarMarca(id): Observable<any>{
    return this.http.delete('http://localhost:4201/api/marcas/borrarMarca/'+id);
  }
}
