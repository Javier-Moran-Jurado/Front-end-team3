// problemas.component.ts
import { Component, OnInit } from '@angular/core';
import { Solucion } from '../model/solucion';
import { SolucionService } from '../service/solucion.service';
import { ProblemaService } from '../../lib-problema/service/problema.service';
import { TestCaseResult } from '../model/status';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-soluciones',
  templateUrl: './soluciones.component.html',
  imports: [CommonModule],
  standalone: true,
  styleUrls: ['./soluciones.component.css']
})
export class SolucionesComponent implements OnInit {
  soluciones: Solucion[] = [];
  problemaNames: Map<number, string> = new Map();

  constructor(
    private solucionService: SolucionService,
    private problemaService: ProblemaService,
  ) {}

  ngOnInit(): void {
    this.loadSoluciones();
    this.loadProblemNames();
  }

  private loadSoluciones(): void {
    this.solucionService.getSoluciones().subscribe({
      next: (data) => {
        this.soluciones = data.soluciones;
        this.loadProblemNames();
      },
      error: (err) => {
        console.error('Error loading solutions:', err);
      }
    });
  }

  private loadProblemNames(): void {
    this.soluciones.forEach((solucion) => {
      if (!this.problemaNames.has(solucion.idProblema)) {
        this.problemaService.getProblema(solucion.idProblema.toString()).subscribe({
          next: (data) => {
            this.problemaNames.set(solucion.idProblema, data.problema.nombre);
          },
          error: (err) => {
            console.error(`Error loading problem ${solucion.idProblema}:`, err);
            this.problemaNames.set(solucion.idProblema, `Problema ${solucion.idProblema}`);
          }
        });
      }
    });
  }

  getProblemName(idProblema: number): string {
    return this.problemaNames.get(idProblema) || `Problema ${idProblema}`;
  }

  viewDetails(solucion: Solucion): void {
    try {
      console.log(solucion.estadosJson);
      const statuses: TestCaseResult[] = JSON.parse(solucion.estadosJson);
      console.log(statuses);
      Swal.fire({
        title: `Detalles de la solución`,
        html: `
          <div class="text-start">
            <p><strong>Problema:</strong> ${this.getProblemName(solucion.idProblema)}</p>
            <p><strong>Estado:</strong> <span class="badge ${this.getStatusClass(solucion.status)}">${solucion.status}</span></p>
            <p><strong>Tiempo de ejecución:</strong> ${solucion.time} ms</p>
            <hr>
            <h6>Resultados de Pruebas:</h6>
            <div class="table-responsive mb-3 overflow-y-auto" style="max-height: 300px">
              <table class="table table-bordered table-sm small">
                <thead class="table-light">
                  <tr>
                    <th>#</th>
                    <th>Estado</th>
                    <th>Tiempo</th>
                    <th>Comparacion</th>
                  </tr>
                </thead>
                <tbody>
                  ${this.formatTestCases(statuses)}
                </tbody>
              </table>
            </div>
            <hr>
            <h6>Código:</h6>
            <pre class="bg-light p-2">${solucion.contenido}</pre>
          </div>
        `,
        width: '800px',
        confirmButtonText: 'Cerrar',
        showCloseButton: true
      });
    } catch (error) {
      Swal.fire('Error', 'No se pudo mostrar el detalle de la solución', 'error');
    }
  }

  private getStatusClass(status: string): string {
    if(status.toLowerCase() === 'accepted') {
       return 'bg-success';
    }else{
      return 'bg-danger';
    }
  }

  private formatTestCases(testCases: TestCaseResult[]): string {
    return testCases.map(testCase => `
    <tr>
      <td>${testCase.testCase}</td>
      <td class="text-center">${testCase.status === 'Ok' ? '✅' : '❌'}</td>
      <td>${testCase.time} ms</td>
      <td style="max-width: 250px; white-space: nowrap; overflow-x: auto;">
        <div class="d-flex flex-nowrap">
          <pre class="m-0 p-1 bg-light text-nowrap">Salidas: ${testCase.outputs.join(' ; ')}</pre>
        </div>
        <div class="d-flex flex-nowrap mt-1">
          <pre class="m-0 p-1 bg-light text-nowrap">Respuestas: ${testCase.answers.join(' ; ')}</pre>
        </div>
      </td>
    </tr>
  `).join('');
  }
}
