import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lib-operaciones-conjuntos',
  templateUrl: './lib-operaciones-conjuntos.component.html',
  styleUrls: ['./lib-operaciones-conjuntos.component.css']
})
export class LibOperacionesConjuntosComponent {
  conjuntoA: string = '';
  conjuntoB: string = '';
  operacion: string = 'union';
  resultado: string = '';
  error: string = '';

  calcular() {
    this.error = '';
    let setA: Set<string>;
    let setB: Set<string>;
    try {
      setA = new Set(this.conjuntoA.split(',').map(x => x.trim()).filter(x => x !== ''));
      setB = new Set(this.conjuntoB.split(',').map(x => x.trim()).filter(x => x !== ''));
    } catch {
      this.error = 'Error en el formato de los conjuntos.';
      return;
    }
    let res: Set<string>;
    switch (this.operacion) {
      case 'union':
        res = new Set([...setA, ...setB]);
        break;
      case 'interseccion':
        res = new Set([...setA].filter(x => setB.has(x)));
        break;
      case 'diferencia':
        res = new Set([...setA].filter(x => !setB.has(x)));
        break;
      case 'diferenciaSimetrica':
        res = new Set([...setA, ...setB]);
        for (const x of setA) if (setB.has(x)) res.delete(x);
        for (const x of setB) if (setA.has(x)) res.delete(x);
        break;
      default:
        this.error = 'Operación no soportada.';
        return;
    }
    this.resultado = Array.from(res).join(', ');
    Swal.fire({
      icon: 'success',
      title: 'Resultado',
      text: `Resultado: {${this.resultado}}`,
      confirmButtonText: 'Aceptar'
    });
  }

  limpiar() {
    this.conjuntoA = '';
    this.conjuntoB = '';
    this.resultado = '';
    this.error = '';
  }
}
