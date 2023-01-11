import { createReducer, on } from "@ngrx/store";
import { ProductoState } from "src/app/models/producto.state";
import { loadedProductos, loadProductos } from "../actions/producto.actions";

// estado inicial
export const initialState: ProductoState= { loading: false, productos: []};

// funciones reducers
export const productoReducer= createReducer(
    initialState,
    on(loadProductos, (state) =>{
        return {...state, loading: true};
    }),
    on(loadedProductos, (state, {productos}) => { // acciones
        return {...state, loading: false, productos};
    })
)