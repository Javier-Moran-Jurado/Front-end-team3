import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lib-escitala',
  templateUrl: './lib-escitala.component.html',
  styleUrls: ['./lib-escitala.component.css']
})
export class LibEscitalaComponent {
  mensaje: string = '';
  filas: number = 0;
  resultado: string = '';

  constructor(private http: HttpClient) {}

  codificar() {
    const url = `/api/SpartanScytale/codificar/${this.filas}/${encodeURIComponent(this.mensaje)}`;
    this.http.get(url, { responseType: 'text' }).subscribe(
      res => this.resultado = res,
      err => this.resultado = 'Error al codificar.'
    );
  }

  descodificar() {
    const url = `/api/SpartanScytale/descodificar/${this.filas}/${encodeURIComponent(this.mensaje)}`;
    this.http.get(url, { responseType: 'text' }).subscribe(
      res => this.resultado = res,
      err => this.resultado = 'Error al descodificar.'
    );
  }
}
