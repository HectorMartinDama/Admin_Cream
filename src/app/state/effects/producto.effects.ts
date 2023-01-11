import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, map, mergeMap } from "rxjs";
import { ProductService } from "src/app/services/product.service";


@Injectable()
export class ProductoEffects {

    constructor(private actions$: Actions, private productService: ProductService){};

    loadProductos$= createEffect(() => this.actions$.pipe(
        ofType('[Producto List] Load productos'), // encargado de escuchar la accion
        mergeMap(() => this.productService.allProducts() // retorna la data
            .pipe(
                map(productos => ({type: '[Producto List] Loaded success', productos})),
                catchError(() => EMPTY)
            ))    
        )
    );
}