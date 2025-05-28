import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lib-crearproblema',
  templateUrl: './lib-crearproblema.component.html',
  styleUrls: ['./lib-crearproblema.component.css']
})
export class LibCrearproblemaComponent {
  nombre: string = '';
  descripcion: string = '';
  inputs: string = '';
  outputs: string = '';
  tiempo: number = 1000;
  resultado: string = '';

  constructor(private http: HttpClient) {}

  crearProblema() {
    if (!this.nombre || !this.descripcion || !this.outputs || !this.tiempo) {
      this.mostrarError('Todos los campos son obligatorios.');
      return;
    }

    const problema = {
      nombre: this.nombre,
      descripcion: this.descripcion,
      inputs: this.inputs,
      outputs: this.outputs,
      tiempo: this.tiempo
    };

    this.http.post<{ resultado: string }>('http://api.mewings.joptionpane.software/api/ovaweb-service/problemas', problema).subscribe({
      next: (res) => {
        this.resultado = res.resultado;
        this.mostrarExito('Problema creado exitosamente.');
      },
      error: () => {
        this.resultado = '';
        this.mostrarError('Error al crear el problema.');
      }
    });
  }

  limpiar() {
    this.nombre = '';
    this.descripcion = '';
    this.inputs = '';
    this.outputs = '';
    this.tiempo = 1000;
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
