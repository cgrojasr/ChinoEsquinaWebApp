import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/core/cliente/cliente.service';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-cliente-listar',
  templateUrl: './cliente-listar.component.html',
  styleUrls: ['./cliente-listar.component.css']
})
export class ClienteListarComponent implements OnInit {
  lstClientes: Cliente[];

  constructor(
    private clienteService: ClienteService
  ) { 
    this.lstClientes = [];
  }

  ngOnInit(): void {
    this.listarTodo_Cliente();
  }

  listarTodo_Cliente(): void {
    this.clienteService.listarTodo().subscribe(
      response => {
        this.lstClientes = response
      }
    );
  }

  onClick_Lupa(): void {
    
  }
}
