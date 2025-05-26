import { Component } from '@angular/core';
import { CostosRequest } from './costos-request.model';
import { CostosService } from './costos.service';

@Component({
  selector: 'app-lib-costos5',
  templateUrl: './lib-costos5.component.html',
  styleUrls: ['./lib-costos5.component.css']
})

export class LibCostos5Component {
  request: CostosRequest = {
    costoFijo: 0,
    costoVariable: 0,
    costoIndirecto: 0,
    unidades: 0,
    margenGananciaPorcentaje: 0
  };

  resultado: any = null;

  constructor(private costosService: CostosService) {
  }

  operar(): void {
    console.log('Request enviado:', this.request);
    this.costosService.calcularCostos(this.request).subscribe({
      next: (res) => {
        console.log('Respuesta recibida:', res);
        this.resultado = res;
      },
      error: (err) => {
        console.error('Error:', err);
        this.resultado = {error: 'No se pudo calcular.'};
      }
    });
  }
}

