import { AuditoriaData } from "./auditoria_data";
import { DocumentoIdentidad } from "./documentoIdentidad";

export interface Cliente extends AuditoriaData {
    idCliente: number;
    nombre: string;
    apellido: string;
    documentoIdentidad: DocumentoIdentidad;
    nroDocumento: string;
    email: string;
}