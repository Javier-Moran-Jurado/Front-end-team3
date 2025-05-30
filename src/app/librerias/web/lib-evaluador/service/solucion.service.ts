import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Solucion} from '../model/solucion';
import {EvaluadorDTO} from '../model/evaluadordto';

@Injectable({
  providedIn: 'root'
})

export class SolucionService {
  private apiUrl = 'http://api.mewings.joptionpane.software/api/ovaweb-service';

  constructor(private http: HttpClient) {}

  getSoluciones(): Observable<{soluciones: Solucion[]}> {
    return this.http.get<{soluciones: Solucion[]}>(`${this.apiUrl}/soluciones`);
  }

  getSolucion(id: string | null): Observable<{solucion: Solucion}> {
    return this.http.get<{solucion: Solucion}>(`${this.apiUrl}/soluciones/${id}`);
  }

  evaluar(dto: EvaluadorDTO, signal?: AbortSignal): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options: {
      headers?: HttpHeaders;
      signal?: AbortSignal;
    } = { headers };

    if (signal) {
      options.signal = signal;
    }
    return this.http.post(`${this.apiUrl}/evaluar`, dto, options);
  }

  updateSolucion(solucion: Solucion): Observable<Solucion> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Solucion>(`${this.apiUrl}/soluciones`, solucion, { headers });
  }

  deleteSolucion(solucion: Solucion): Observable<Solucion> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete<Solucion>(`${this.apiUrl}`, { body: solucion });
  }
}
