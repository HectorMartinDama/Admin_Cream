import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, exhaustMap, map, mergeMap, of } from "rxjs";
import { MarcaService } from "src/app/services/marca.service";
import * as marcaActions from '../actions/marca.actions';


@Injectable()
export class MarcaEffects {

    constructor(private actions$: Actions, private marcaService: MarcaService){};

    

    addMarca$= createEffect(() => {
        return this.actions$.pipe(
            ofType(marcaActions.createMarca), mergeMap(action =>{
                return this.marcaService.createMarca(action.marca).pipe(
                    map(data => {
                        const marca= {...action.marca, id: data.nombre};
                        return marcaActions.createMarcaSuccess({marca});
                    })
                )
            })
        )
    });


    loadMarcas$= createEffect(() => {
        return this.actions$.pipe(
            ofType(marcaActions.loadMarcas),
            mergeMap((action) => {
                return this.marcaService.allMarcas().pipe(
                    map ((marcas) =>{
                        return marcaActions.loadMarcasSuccess({marcas})
					})	
                );
            })
        )
    }, {dispatch: false})





}


