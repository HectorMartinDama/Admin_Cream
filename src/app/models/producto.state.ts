import { ProductoModel } from "./producto.interface";


export interface ProductoState{
    loading: boolean,
    productos: ReadonlyArray<ProductoModel>;
}