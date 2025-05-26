import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CostosRequest } from './costos-request.model';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CostosService {

  private apiUrl = '/api/costos-jni/calcular';

  constructor(private http: HttpClient) {
  }

  calcularCostos(request: CostosRequest): Observable<any> {
    const params = {
      cfijo: request.costoFijo,
      cvariable: request.costoVariable,
      cindirecto: request.costoIndirecto,
      unidades: request.unidades,
      margen: request.margenGananciaPorcentaje
    };
    return this.http.get(this.apiUrl, { params });
  }
}
