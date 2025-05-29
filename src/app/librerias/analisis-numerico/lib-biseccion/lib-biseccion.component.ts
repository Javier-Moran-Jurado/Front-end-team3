import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lib-biseccion',
  templateUrl: './lib-biseccion.component.html',
  styleUrls: ['./lib-biseccion.component.css']
})
export class LibBiseccionComponent {
  a: string = '';
  b: string = '';
  tol: string = '';
  maxIter: string = '';
  funcion: string = '';
  error: string = '';
  path: string = '';

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.route.url.subscribe(segments => {
      this.path = segments[0]?.path;
    });
  }

  calcular() {
    this.error = '';
    if (!this.funcion || !this.a || !this.b || !this.tol || !this.maxIter) {
      Swal.fire({
        icon: 'error',
        title: 'Campos requeridos',
        text: 'Por favor, complete todos los campos.',
        confirmButtonText: 'Entendido'
      });
      return;
    }
    const contieneLetras = /[a-zA-Z]/;
    if (
      contieneLetras.test(this.a) ||
      contieneLetras.test(this.b) ||
      contieneLetras.test(this.tol) ||
      contieneLetras.test(this.maxIter)
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Entrada inválida',
        text: 'Solo se permiten números en los campos numéricos.',
        confirmButtonText: 'Entendido'
      });
      return;
    }
    const aNum = parseFloat(this.a);
    const bNum = parseFloat(this.b);
    const tolNum = parseFloat(this.tol);
    const maxIterNum = parseInt(this.maxIter, 10);
    const url = `/api/analisis-numerico-service/biseccion/${encodeURIComponent(this.funcion)}/${aNum}/${bNum}/${tolNum}/${maxIterNum}`;
    this.http.get<any>(url).subscribe({
      next: res => {
        Swal.fire({
          icon: 'success',
          title: `Método de Bisección`,
          text: `Resultado: ${res.resultado}`,
          confirmButtonText: 'Aceptar'
        });
      },
      error: err => {
        this.error = 'Error al calcular la bisección.';
        console.error(err);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudo calcular la bisección.',
          confirmButtonText: 'Cerrar'
        });
      }
    });
  }

  limpiar() {
    this.a = '';
    this.b = '';
    this.tol = '';
    this.maxIter = '';
    this.funcion = '';
    this.error = '';
  }
}
