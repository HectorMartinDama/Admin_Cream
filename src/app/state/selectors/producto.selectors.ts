import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { ProductoState } from "src/app/models/producto.state";



// el selector obtiene los datos
export const selectProductoFeature= (state: AppState) => state.productos; // padre

export const selectListProductos= createSelector(
    selectProductoFeature,
    (state: ProductoState) => state.productos //hijo
);

export const selectLoadingProductos= createSelector(
    selectProductoFeature,
    (state: ProductoState) => state.loading // hijo
)