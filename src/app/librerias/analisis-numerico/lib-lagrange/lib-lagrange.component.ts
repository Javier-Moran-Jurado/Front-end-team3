import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lib-lagrange',
  templateUrl: './lib-lagrange.component.html',
  styleUrls: ['./lib-lagrange.component.css']
})
export class LibLagrangeComponent {
  xValues: string = '';
  yValues: string = '';
  evalPoint: string = '';
  error: string = '';

  constructor(private http: HttpClient) {}

  calcular() {
    this.error = '';


    const contieneLetras = /[a-zA-Z]/;

    if (
      contieneLetras.test(this.xValues) ||
      contieneLetras.test(this.yValues) ||
      contieneLetras.test(this.evalPoint)
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Entrada inválida',
        text: 'Solo se permiten números y comas.',
        confirmButtonText: 'Entendido'
      });
      return;
    }

    const xArray = this.xValues.split(',').map(val => val.trim()).map(Number);
    const yArray = this.yValues.split(',').map(val => val.trim()).map(Number);
    const value = parseFloat(this.evalPoint);

    const xParam = xArray.join(',');
    const yParam = yArray.join(',');

    const url = `http://34.74.83.192/api/analisis-numerico-service/interpolacion/${xParam}/${yParam}/${value}`;

    this.http.get<number>(url).subscribe({
      next: res => {
        Swal.fire({
          icon: 'success',
          title: 'Interpolación de Lagrange',
          text: `Resultado: ${res}`,
          confirmButtonText: 'Aceptar'
        });
      },
      error: err => {
        this.error = 'Error al calcular la interpolación.';
        console.error(err);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudo calcular la interpolación.',
          confirmButtonText: 'Cerrar'
        });
      }
    });
  }

  limpiar() {
    this.xValues = '';
    this.yValues = '';
    this.evalPoint = '';
    this.error = '';
  }
}
