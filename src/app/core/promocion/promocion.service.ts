import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Promocion } from 'src/app/models/promocion';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PromocionService {

  constructor(
    private http: HttpClient
  ) { }

  listar(descripcion:string): Observable<Promocion[]> {
    return this.http.get<Promocion[]>(`${environment.url_api_java}promocion/filtros?descripcion=${descripcion}`);
  }

  registrar(objPromocion:Promocion): Observable<Promocion> { 
    return this.http.post<Promocion>(`${environment.url_api_java}promocion`, objPromocion);
  }

  buscarPorId(idPromocion: number): Observable<Promocion> {   
    return this.http.get<Promocion>(`${environment.url_api_java}promocion/${idPromocion}`);
  }

  actualizar(objPromocion: Promocion): Observable<Promocion> { 
    return this.http.put<Promocion>(`${environment.url_api_java}promocion`, objPromocion);
  }
}
