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

  constructor(private http: HttpClient) {}

  calcularInverso() {
    if (this.numeroA === null || this.numeroB === null) {
      this.resultado = 'Por favor ingrese ambos números';
      return;
    }

    const url = `/api/inversojni-service/inverso/${this.numeroA}/${this.numeroB}`;
    this.http.get(url, { responseType: 'text' }).subscribe(
      res => this.resultado = res,
      err => this.resultado = 'Error al calcular el inverso. Asegúrese que los números son válidos.'
    );
  }
}
