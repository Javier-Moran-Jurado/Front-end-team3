import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Programa} from '../model/programa';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProgramaService {
  private apiUrl = '/api/v1/programa-service/programas';


  constructor(private  http: HttpClient) { }

  getPrograma(id: number | string): Observable<Programa> {
    return this.http.get<Programa>(`${this.apiUrl}/${id}`);
  }

  getProgramas(): Observable<Programa[]> {
    return this.http.get<{ programas: Programa[] }>(this.apiUrl)
      .pipe(
        map(response => response.programas)
      );
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
