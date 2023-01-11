import { MarcaModel } from "./marca.interface";

export interface MarcaState {
    loading: boolean,
    marcas: MarcaModel[]
}