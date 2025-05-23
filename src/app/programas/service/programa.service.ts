import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Programa} from '../model/programa';

@Injectable({
  providedIn: 'root'
})
export class ProgramaService {
  private apiUrl = 'http://localhost:8082/api/v1/programa-service/programas';


  constructor(private  http: HttpClient) { }

  getPrograma(id: number | string): Observable<Programa> {
    return this.http.get<Programa>(`${this.apiUrl}/${id}`);
  }

  getProgramas():Observable<{programas: Programa[]}> {
    return this.http.get<{programas: Programa[]}>(this.apiUrl);
  }

  // Crear un nuevo programa
  createPrograma(programa: Programa): Observable<Programa> {
    return this.http.post<Programa>(this.apiUrl, programa);
  }

  // Actualizar un programa existente
  updatePrograma(programa: Programa): Observable<Programa> {
    return this.http.put<Programa>(`${this.apiUrl}/${programa.id}`, programa);
  }

  // Eliminar un programa por ID
  deletePrograma(programa: Programa): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${programa.id}`);
  }

}
