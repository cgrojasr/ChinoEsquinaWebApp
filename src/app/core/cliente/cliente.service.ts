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

  findAll(): Observable<Cliente[]> {
    console.log("Estoy en el servicio");
    return this.http.get<Cliente[]>(`${environment.url_api}cliente/findAll`);
  }
}