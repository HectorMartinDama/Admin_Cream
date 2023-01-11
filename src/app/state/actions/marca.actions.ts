import { createAction, props } from "@ngrx/store";
import { MarcaModel } from "src/app/models/marca.interface";





export const createMarca= createAction(
    '[Marca] Crear Marca',
    props<{marca: MarcaModel}>()
);

export const createMarcaSuccess= createAction(
    '[Marca] Crear Marca Success',
    props<{marca: MarcaModel}>()
);

export const loadMarcas= createAction(
    '[Marca] Load Marcas',
)

export const loadMarcasSuccess= createAction(
    '[Marca] Load Success Marcas',
    props<{marcas: MarcaModel[]}>()
)






