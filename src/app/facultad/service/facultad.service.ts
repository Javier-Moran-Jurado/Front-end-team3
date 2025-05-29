import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Facultad} from '../model/facultad';

@Injectable({
  providedIn: 'root'
})
export class FacultadService {
  private apiUrl = 'http://api.mewings.joptionpane.software/api/v1/facultad-service/facultades';

  constructor(private http: HttpClient) {}

  getFacultades(): Observable<{facultades: Facultad[]}> {
    return this.http.get<{facultades: Facultad[]}>(this.apiUrl);
  }

  getFacultad(id: string | null): Observable<Facultad> {
    return this.http.get<Facultad>(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo facultad
  createFacultad(facultad: Facultad): Observable<Facultad> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Facultad>(this.apiUrl, facultad, { headers });
  }

  // Actualizar un facultad existente
  updateFacultad(facultad: Facultad): Observable<Facultad> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Facultad>(`${this.apiUrl}`, facultad, { headers });
  }

  // Eliminar un facultad por ID
  deleteFacultad(facultad: Facultad): Observable<Facultad> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete<Facultad>(`${this.apiUrl}`, { body: facultad });
  }
}
