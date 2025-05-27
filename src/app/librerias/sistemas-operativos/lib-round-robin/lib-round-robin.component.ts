import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lib-round-robin',
  templateUrl: './lib-round-robin.component.html',
  styleUrls: ['./lib-round-robin.component.css']
})
export class LibRoundRobinComponent {
  cantidadProcesos: number | undefined;
  quantum: number | undefined;
  tiempoLlegada: string = '';
  tiempoRafaga: string = '';
  idProcesos: string = '';
  procesos: any[] = [];
  error: string = '';

  constructor(private http: HttpClient) {}

  calcular() {
    this.error = '';

    // Validación de campos vacíos
    if (!this.cantidadProcesos || !this.quantum || !this.tiempoLlegada || !this.tiempoRafaga || !this.idProcesos) {
      Swal.fire({
        icon: 'error',
        title: 'Campos incompletos',
        text: 'Por favor, completa todos los campos.',
        confirmButtonText: 'Entendido'
      });
      return;
    }

    // Conversión de entradas a arreglos
    const llegadaArray = this.tiempoLlegada.split(',').map(val => parseInt(val.trim(), 10));
    const rafagaArray = this.tiempoRafaga.split(',').map(val => parseInt(val.trim(), 10));
    const idArray = this.idProcesos.split(',').map(val => val.trim());

    // Validación de datos inconsistentes
    if (llegadaArray.length !== this.cantidadProcesos || rafagaArray.length !== this.cantidadProcesos || idArray.length !== this.cantidadProcesos) {
      Swal.fire({
        icon: 'error',
        title: 'Datos inconsistentes',
        text: 'La cantidad de procesos no coincide con los datos ingresados.',
        confirmButtonText: 'Entendido'
      });
      return;
    }

    // Validación de valores numéricos
    if (llegadaArray.some(isNaN) || rafagaArray.some(isNaN)) {
      Swal.fire({
        icon: 'error',
        title: 'Datos inválidos',
        text: 'Asegúrate de que los tiempos de llegada y ráfaga sean números válidos.',
        confirmButtonText: 'Entendido'
      });
      return;
    }

    // Construcción de la URL con parámetros
    const url = `http://34.74.83.192/api/sistemas-operativos/roundrobin/${this.quantum}?idProcesos=${idArray.join(',')}&tiempoLlegada=${llegadaArray.join(',')}&tiempoRafaga=${rafagaArray.join(',')}`;

    // Solicitud GET
    this.http.get<any>(url).subscribe({
      next: res => {
        this.procesos = res; // Ajustar según la respuesta del backend
        Swal.fire({
          icon: 'success',
          title: 'Cálculo exitoso',
          text: 'El algoritmo Round Robin se ejecutó correctamente.',
          confirmButtonText: 'Aceptar'
        });
      },
      error: err => {
        this.error = 'Error al ejecutar el algoritmo Round Robin.';
        console.error(err);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudo ejecutar el algoritmo Round Robin.',
          confirmButtonText: 'Cerrar'
        });
      }
    });
  }

  limpiar() {
    this.cantidadProcesos = undefined;
    this.quantum = undefined;
    this.tiempoLlegada = '';
    this.tiempoRafaga = '';
    this.idProcesos = '';
    this.procesos = [];
    this.error = '';
  }
}
