import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DocumentoIdentidad } from 'src/app/models/documentoIdentidad';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentoIdentidadService {

  constructor(
    private http: HttpClient
  ) { }

  listarTodo(): Observable<DocumentoIdentidad[]> {
    return this.http.get<DocumentoIdentidad[]>(`${environment.url_api_java}documentoidentidad`);
  }
}
