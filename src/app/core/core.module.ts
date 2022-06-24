import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteService } from './cliente/cliente.service';
import { DocumentoIdentidadService } from './documento-identidad/documento-identidad.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ClienteService,
    DocumentoIdentidadService
  ]
})
export class CoreModule { }
