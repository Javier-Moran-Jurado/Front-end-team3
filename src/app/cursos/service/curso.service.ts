import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from '../model/curso';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private apiUrl = '/api/v1/curso-service/cursos';

  constructor(private http: HttpClient) { }

  getCurso(id: number | string): Observable<Curso> {
    return this.http.get<Curso>(`${this.apiUrl}/${id}`);
  }

  getCursos(): Observable<Curso[]> {
    return this.http.get<{ cursos: Curso[] }>(this.apiUrl)
      .pipe(
        map(response => response.cursos)
      );
  }

  createCurso(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(this.apiUrl, curso);
  }

  updateCurso(curso: Curso): Observable<Curso> {
    return this.http.put<Curso>(this.apiUrl, curso);
  }

  deleteCurso(curso: Curso): Observable<void> {
    return this.http.request<void>('delete', this.apiUrl, {
      body: curso
    });
  }
}
