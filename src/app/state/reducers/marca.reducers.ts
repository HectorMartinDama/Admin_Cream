import { createReducer, on } from "@ngrx/store";
import { MarcaModel } from "src/app/models/marca.interface";
import { MarcaState } from "src/app/models/marca.state";
import * as marcaActions from '../actions/marca.actions';


export const initialState: MarcaState = {
    marcas: [],
    loading: false
};


export const marcaReducer= createReducer(
    initialState,
    on(marcaActions.createMarcaSuccess, (state, action) => {
        let marcas= { ...action.marca};
        return {...state, marcas: [...state.marcas, marcas]};
    }),
    on(marcaActions.loadMarcasSuccess, (state, action) =>{
        return {...state, marcas: action.marcas}
    })

    

)





