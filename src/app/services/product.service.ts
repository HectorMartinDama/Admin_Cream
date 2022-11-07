import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface product{
  model: string,
  brand: string,
  uid: string
}


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }



  // Devuelve todos los productos del usuario.
  allProducts(): Observable<product[]>{
    return this.http.get<product[]>('http://localhost:3000/api/products/allProducts');
  }
}
