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

  listar(): Observable<Promocion[]> {
    return this.http.get<Promocion[]>(`${environment.url_api_java}promocion`);
  }
}
