import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Facultad} from '../model/facultad';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class FacultadService {
  private apiUrl = 'http://api.mewings.joptionpane.software/api/v1/facultad-service';

  constructor(private http: HttpClient) {}

  getFacultades(): Observable<{facultades: Facultad[]}> {
    return this.http.get<{facultades: Facultad[]}>(`${this.apiUrl}/facultades`);
  }

  getDecanos(): Observable<{usuarios: Usuario[]}> {
    return this.http.get<{usuarios: Usuario[]}>(`${this.apiUrl}/decanos`);
  }

  getFacultad(id: string | null): Observable<Facultad> {
    return this.http.get<Facultad>(`${this.apiUrl}/facultades/${id}`);
  }

  // Crear un nuevo facultad
  createFacultad(facultad: Facultad): Observable<Facultad> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Facultad>(`${this.apiUrl}/facultades`, facultad, { headers });
  }

  // Actualizar un facultad existente
  updateFacultad(facultad: Facultad): Observable<Facultad> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Facultad>(`${this.apiUrl}/facultades`, facultad, { headers });
  }

  // Eliminar un facultad por ID
  deleteFacultad(facultad: Facultad): Observable<Facultad> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete<Facultad>(`${this.apiUrl}/facultades`, { body: facultad });
  }
}
