import { createAction, props } from "@ngrx/store";
import { ProductoModel } from "src/app/models/producto.interface";


// accion para cargar los productos
export const loadProductos= createAction(
    '[Producto List] Load productos'
)

// acccion para cuando los cupones se ha cargado
export const loadedProductos= createAction(
    '[Producto List] Loaded success',
    props<{productos: ProductoModel[]}>()
)