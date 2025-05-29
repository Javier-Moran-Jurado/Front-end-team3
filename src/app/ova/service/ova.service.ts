import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ova} from '../model/ova';

@Injectable({
  providedIn: 'root'
})
export class OvaService {
  private apiUrl = 'http://34.46.118.150/api/v1/ova-service/ovas';

  constructor(private http: HttpClient) {}

  getOvas(): Observable<{ovas: Ova[]}> {
    return this.http.get<{ovas: Ova[]}>(this.apiUrl);
  }

  getOva(id: string | null): Observable<Ova> {
    return this.http.get<Ova>(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo ova
  createOva(ova: Ova): Observable<Ova> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Ova>(this.apiUrl, ova, { headers });
  }

  // Actualizar un ova existente
  updateOva(ova: Ova): Observable<Ova> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Ova>(`${this.apiUrl}`, ova, { headers });
  }

  // Eliminar un ova por ID
  deleteOva(ova: Ova): Observable<Ova> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete<Ova>(`${this.apiUrl}`, { body: ova });
  }
}
