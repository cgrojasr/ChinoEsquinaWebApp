import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/core/cliente/cliente.service';
import { DocumentoIdentidadService } from 'src/app/core/documento-identidad/documento-identidad.service';
import { Cliente } from 'src/app/models/cliente';
import { DocumentoIdentidad } from 'src/app/models/documentoIdentidad';

@Component({
  selector: 'app-cliente-gestionar',
  templateUrl: './cliente-gestionar.component.html',
  styleUrls: ['./cliente-gestionar.component.css']
})
export class ClienteGestionarComponent implements OnInit {
  lstDocumentoIdentidad: DocumentoIdentidad[];
  objCliente: Cliente = { 
    idCliente: 0,
    nombre: "",
    apellido: "",
    email: "",
    documentoIdentidad: { 
      idDocumentoIdentidad: 0,
      nombre: "",
      abreviatura: "",
      activo: false,
      eliminado: true
    },
    nroDocumento: "",
    activo: false,
    eliminado: true,
    idUsuarioRegistro: 0,
    idUsuarioModifico: 0
  };
  idCliente?: number;

  constructor(
    private documentoIdentidadService: DocumentoIdentidadService,
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.lstDocumentoIdentidad = [];
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idCliente = params['id'];
    });

    this.listarTodo_DocumentoIdentidad();

    if(this.idCliente != null) {
      this.buscarPorId_Cliente(this.idCliente);
    }
  }

  listarTodo_DocumentoIdentidad(): void {
    this.documentoIdentidadService.listarTodo().subscribe(
      response => {
        this.lstDocumentoIdentidad = response
      }
    );
  }

  buscarPorId_Cliente(idCliente: number): void {
    this.clienteService.buscarPorId(idCliente).subscribe(
      response => {
        this.objCliente = response
      }
    );
    console.log(idCliente);
    console.log(this.objCliente);
  }

  actualizar(): void {}

  registrar(): void {
    this.objCliente.idUsuarioRegistro = 1;
    this.clienteService.registrar(this.objCliente).subscribe(
      result => this.objCliente = result
    );
    this.router.navigate(['/mantenimiento/cliente']);
  }

  onChange(value: number):void {
    this.objCliente.documentoIdentidad.idDocumentoIdentidad = value;
  }
}
