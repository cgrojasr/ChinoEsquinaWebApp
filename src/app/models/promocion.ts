import { AuditoriaData } from "./auditoria_data";

export interface Promocion extends AuditoriaData {
    idPromocion: number,
    nombre: string,
    descripcion: string,
    fechaInicio: Date,
    fechaFinal: Date
}