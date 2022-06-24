import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/models/cliente';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    private http: HttpClient
  ) { }

  listarTodo(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${environment.url_api_java}cliente`);
  }

  buscarPorId(idCliente: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${environment.url_api_java}cliente/${idCliente}`);
  }

  registrar(objCliente: Cliente): Observable<Cliente> {
    objCliente.eliminado = false;
    console.log(objCliente);
    return this.http.post<Cliente>(`${environment.url_api_java}cliente`, objCliente);
  }
}