import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Problema} from '../model/problema';

@Injectable({
  providedIn: 'root'
})
export class ProblemaService {
  private apiUrl = 'http://api.mewings.joptionpane.software/api/ovaweb-service/problemas';

  constructor(private http: HttpClient) {}

  getProblemas(): Observable<{problemas: Problema[]}> {
    return this.http.get<{problemas: Problema[]}>(this.apiUrl);
  }

  getProblema(id: string | null): Observable<{problema: Problema}> {
    return this.http.get<{problema: Problema}>(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo problema
  createProblema(problema: Problema): Observable<Problema> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Problema>(this.apiUrl, problema, { headers });
  }

  // Actualizar un problema existente
  updateProblema(problema: Problema): Observable<Problema> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Problema>(`${this.apiUrl}`, problema, { headers });
  }

  // Eliminar un problema por ID
  deleteProblema(problema: Problema): Observable<Problema> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete<Problema>(`${this.apiUrl}`, { body: problema });
  }
}
