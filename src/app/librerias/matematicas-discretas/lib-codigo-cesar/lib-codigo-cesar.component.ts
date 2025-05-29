// File: src/app/librerias/matematicas-discretas/lib-codigo-cesar/lib-codigo-cesar.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lib-codigo-cesar',
  templateUrl: './lib-codigo-cesar.component.html',
  styleUrls: ['./lib-codigo-cesar.component.css']
})
export class LibCodigoCesarComponent {
  mensaje: string = '';
  codigo: number = 0;
  resultado: string = '';
  error: string = '';
  apiUrl: string = 'http://api.mewings.joptionpane.software/api/codificador-service';

  constructor(private http: HttpClient) {}

  codificar(): void {
    if (!this.mensaje || this.codigo === 0) {
      this.error = 'Ingrese un mensaje y un código válido.';
      return;
    }
    this.error = '';
    const url = `${this.apiUrl}/codificar/${this.mensaje}/${this.codigo}`;
    this.http.get(url, { responseType: 'text' }).subscribe({
      next: res => this.resultado = res,
      error: err => {
        console.error(err);
        this.error = 'Ocurrió un error al procesar la solicitud.';
      }
    });
  }

  copiarResultado() {
    navigator.clipboard.writeText(this.resultado).then(() => {
      // Puedes mostrar un mensaje de éxito si quieres
    });
  }

  decodificar(): void {
    if (!this.mensaje || this.codigo === 0) {
      this.error = 'Ingrese un mensaje y un código válido.';
      return;
    }
    this.error = '';
    const url = `${this.apiUrl}/decodificar/${this.mensaje}/${this.codigo}`;
    this.http.get(url, { responseType: 'text' }).subscribe({
      next: res => this.resultado = res,
      error: err => {
        console.error(err);
        this.error = 'Ocurrió un error al procesar la solicitud.';
      }
    });
  }
}
