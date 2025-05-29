import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lib-inversa',
  templateUrl: './lib-inversa.component.html',
  styleUrls: ['./lib-inversa.component.css']
})
export class LibInversaComponent {
  numeroA: number | null = null;
  numeroB: number | null = null;
  resultado: string = '';
  error: string = '';

  constructor(private http: HttpClient) {}

  calcularInverso() {
    const url = `http://localhost:8082/api/inversojni-service/inverso/${this.numeroA}/${this.numeroB}`;

    this.http.get(url, { responseType: 'text' }).subscribe({
      next: (res) => {
        try {
          const response = JSON.parse(res);
          this.resultado = response.inverso; // Solo muestra el valor inverso
        } catch {
          this.resultado = res; // Si ya es solo el número
        }
      },
      error: (err) => {
        this.error = 'Error al calcular';
      }
    });
  }

}
