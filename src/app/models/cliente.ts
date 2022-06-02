export interface Cliente {
    id_cliente: number;
    nombre: string;
    apellido: string;
    id_documento_identidad: number;
    nro_documento: string;
    email: string;
    activo: boolean;
    id_usuario_registro: number;
    fecha_registro: Date;
    id_usuario_modifico: number;
    fecha_modifico: Date;
    eliminado: boolean;
}