import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lib-costos-xp',
  templateUrl: './lib-costos-xp.component.html',
  styleUrls: ['./lib-costos-xp.component.css']
})
export class LibCostosXpComponent {
  costos: number[] = [0, 0];
  unidades: number = 0;
  resultado: { costoTotal: number; costoUnitario: number } | null = null;

  constructor(private http: HttpClient) {}

  agregarProceso(): void {
    this.costos.push(0);
  }

  calcular(): void {
    const payload = {
      costos: this.costos,
      unidades: this.unidades
    };

    this.http.post('http://api.chacaleo.joptionpane.software/api/v1/libcostos-service/calcularCostoProduccion', payload)
      .subscribe((res: any) => {
        this.resultado = res;
      });
  }
  trackByIndex(index: number, item: any): number {
    return index;
  }

}
