import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteService } from './cliente/cliente.service';
import { DocumentoIdentidadService } from './documento-identidad/documento-identidad.service';
import { PromocionService } from './promocion/promocion.service';
import { VentaService } from './venta/venta.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ClienteService,
    DocumentoIdentidadService,
    PromocionService,
    VentaService
  ]
})
export class CoreModule { }
