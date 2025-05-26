import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lib-minimoscuadrados',
  templateUrl: './lib-minimoscuadrados.component.html',
  styleUrls: ['./lib-minimoscuadrados.component.css']
})
export class LibMinimoscuadradosComponent {
  xValues: string = '';
  yValues: string = '';
  pendiente: number | null = null;
  ordenada: number | null = null;
  resultado: string = '';
  xForecast: string = ''; // valores futuros a pronosticar ingresados por el usuario

  constructor(private http: HttpClient) {}

  validarEntrada(...entradas: string[]) {
    const contieneLetras = /[a-zA-Z]/;
    return entradas.some(e => contieneLetras.test(e));
  }

  calcularPendiente() {
    if (this.validarEntrada(this.xValues, this.yValues)) {
      this.mostrarError('Solo se permiten números y comas.');
      return;
    }

    const x = this.xValues.split(',').map(Number).join(',');
    const y = this.yValues.split(',').map(Number).join(',');
    const url = `http://34.74.83.192/api/costos/minimos-cuadrados/calcular-pendiente/${x}/${y}`;

    this.http.get<number>(url).subscribe({
      next: res => {
        this.pendiente = res;
        this.mostrarExito(`Pendiente calculada: ${res}`);
      },
      error: err => this.mostrarError('Error al calcular la pendiente.')
    });
  }

  calcularOrdenada() {
    if (this.validarEntrada(this.xValues, this.yValues) || this.pendiente === null) {
      this.mostrarError('Verifica los valores de entrada y asegúrate de haber calculado la pendiente.');
      return;
    }

    const x = this.xValues.split(',').map(Number).join(',');
    const y = this.yValues.split(',').map(Number).join(',');
    const url = `http://34.74.83.192/api/costos/minimos-cuadrados/calcular-ordenada/${x}/${y}/${this.pendiente}`;

    this.http.get<number>(url).subscribe({
      next: res => {
        this.ordenada = res;
        this.mostrarExito(`Ordenada al origen: ${res}`);
      },
      error: err => this.mostrarError('Error al calcular la ordenada.')
    });
  }

  pronosticar() {
    if (
      this.validarEntrada(this.xForecast) ||
      this.pendiente === null ||
      this.ordenada === null
    ) {
      this.mostrarError('Verifica las entradas y asegúrate de haber calculado pendiente y ordenada.');
      return;
    }

    const x = this.xForecast.split(',').map(Number).join(',');
    const url = `http://34.74.83.192/api/costos/minimos-cuadrados/pronosticar/${x}/${this.pendiente}/${this.ordenada}`;

    this.http.get<number[]>(url).subscribe({
      next: res => {
        this.resultado = res.join(', ');
        this.mostrarExito(`Pronóstico: ${this.resultado}`);
      },
      error: err => this.mostrarError('Error al calcular el pronóstico.')
    });
  }


  limpiar() {
    this.xValues = '';
    this.yValues = '';
    this.pendiente = null;
    this.ordenada = null;
    this.resultado = '';
  }

  private mostrarError(mensaje: string) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: mensaje,
      confirmButtonText: 'Cerrar'
    });
  }

  private mostrarExito(mensaje: string) {
    Swal.fire({
      icon: 'success',
      title: 'Éxito',
      text: mensaje,
      confirmButtonText: 'Aceptar'
    });
  }
}
