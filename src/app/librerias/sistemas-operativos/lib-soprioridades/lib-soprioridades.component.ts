import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

interface Proceso {
  id: number | null;
  llegada: number | null;
  rafaga: number | null;
  prioridad: number | null;
}

@Component({
  selector: 'app-lib-soprioridades',
  templateUrl: './lib-soprioridades.component.html',
  styleUrls: ['./lib-soprioridades.component.css']
})
export class LibSoprioridadesComponent {
  procesos: Proceso[] = Array(5).fill(null).map(() => ({
    id: null,
    llegada: null,
    rafaga: null,
    prioridad: null
  }));

  resultado: string = '';
  error: string = '';
  loading: boolean = false;

  constructor(private http: HttpClient) {}

  validarProcesos(): boolean {
    for (let i = 0; i < this.procesos.length; i++) {
      const p = this.procesos[i];
      if (
        p.id === null || p.llegada === null || p.rafaga === null || p.prioridad === null ||
        p.id < 0 || p.llegada < 0 || p.rafaga <= 0 || p.prioridad < 0
      ) {
        this.error = `Revisa el proceso #${i + 1}. Asegúrate de completar todos los campos correctamente.`;
        return false;
      }
    }
    return true;
  }

  calcularPrioridades() {
    this.resultado = '';
    this.error = '';

    if (!this.validarProcesos()) {
      return;
    }

    this.loading = true;

    // Construir la URL con los parámetros
    let params = this.procesos
      .map(p =>
        `id=${p.id}&llegada=${p.llegada}&rafaga=${p.rafaga}&prioridad=${p.prioridad}`
      )
      .join('&');

    const url = `http://localhost:8081/api/prioridades-service/prioridades?${params}`;

    console.log("URL final construida:", url);

    this.http.get(url, { responseType: 'text' }).subscribe({
      next: (res: string) => {
        try {
          const parsed = JSON.parse(res);
          this.resultado = JSON.stringify(parsed, null, 2);
        } catch (e) {
          this.resultado = res;
        }
        this.loading = false;
      },
      error: (err: HttpErrorResponse) => {
        console.error("Error detallado:", err);
        this.resultado = '';
        this.error = 'Error al calcular prioridades.';
        this.loading = false;
      }
    });
  }




}
