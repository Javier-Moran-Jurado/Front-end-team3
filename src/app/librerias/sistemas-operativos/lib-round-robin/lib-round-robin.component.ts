import { Component, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-round-robin',
  templateUrl: './lib-round-robin.component.html',
  styleUrls: ['./lib-round-robin.component.css']
})
export class RoundRobinComponent {
  cantidadProcesos: number | undefined;
  quantum: number | undefined;
  tiempoLlegada: string = '';
  tiempoRafaga: string = '';
  idProcesos: string = '';
  prioridad: string = '';
  procesos: any[] = [];
  diagrama: number[][] = [];
  error: string = '';
  apiUrl: string = 'http://api.mewings.joptionpane.software/api/sistemas-operativos/roundrobin';

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  calcular() {
    this.error = '';
    if (
      this.cantidadProcesos === undefined ||
      this.quantum === undefined ||
      !this.tiempoLlegada ||
      !this.tiempoRafaga ||
      !this.idProcesos
    ) {
      this.error = 'Por favor complete todos los campos requeridos';
      return;
    }

    const llegadas: number[] = this.tiempoLlegada.split(',').map((x: string) => Number(x.trim()));
    const rafagas: number[] = this.tiempoRafaga.split(',').map((x: string) => Number(x.trim()));
    const ids: string[] = this.idProcesos.split(',').map((id: string) => id.trim());
    const prioridades: number[] = this.prioridad
      ? this.prioridad.split(',').map((x: string) => Number(x.trim()))
      : Array(ids.length).fill(0);

    if (
      llegadas.length !== this.cantidadProcesos ||
      rafagas.length !== this.cantidadProcesos ||
      ids.length !== this.cantidadProcesos
    ) {
      this.error = `Debe ingresar exactamente ${this.cantidadProcesos} valores en cada campo`;
      return;
    }
    if (llegadas.some(isNaN) || rafagas.some(isNaN) || prioridades.some(isNaN)) {
      this.error = 'Todos los valores numéricos deben ser válidos';
      return;
    }
    if (llegadas.some(t => t < 0) || rafagas.some(t => t <= 0) || prioridades.some(p => p < 0)) {
      this.error = 'Los tiempos de llegada deben ser ≥ 0 y ráfagas > 0';
      return;
    }

    const procesosDTO = ids.map((id: string, i: number) => ({
      id,
      llegada: llegadas[i],
      rafaga: rafagas[i],
      prioridad: prioridades[i]
    }));

    const url = `${this.apiUrl}/${this.quantum}`;
    console.log('Llamando a la API:', url, procesosDTO);

    this.http.post<any>(url, procesosDTO).subscribe({
      next: (res: any) => this.procesarRespuestaAPI(res),
      error: (err: any) => this.manejarErrorAPI(err)
    });
  }

  private obtenerProcesosDesdeInputs(): any[] {
    const llegadas: number[] = this.tiempoLlegada.split(',').map((x: string) => Number(x.trim()));
    const rafagas: number[] = this.tiempoRafaga.split(',').map((x: string) => Number(x.trim()));
    const ids: string[] = this.idProcesos.split(',').map((id: string) => id.trim());
    const prioridades: number[] = this.prioridad
      ? this.prioridad.split(',').map((x: string) => Number(x.trim()))
      : Array(ids.length).fill(0);
    return ids.map((id: string, i: number) => ({
      id,
      llegada: llegadas[i],
      rafaga: rafagas[i],
      prioridad: prioridades[i],
      tiempoFin: 0,
      tiempoEspera: 0,
      tiempoInicio: 0
    }));
  }

  private procesarRespuestaAPI(res: any) {
    console.log('Respuesta de la API:', res);
    const procesosInputs = this.obtenerProcesosDesdeInputs();

    if (!res || !res.Procesos) {
      this.error = 'La API no devolvió los datos esperados';
      this.procesos = procesosInputs;
      this.diagrama = [[0, 0, 0, 0, 0]];
      return;
    }
    this.procesos = Object.keys(res.Procesos).map((key: string, i: number) => {
      const p = res.Procesos[key];
      return {
        id: key,
        llegada: p.llegada !== undefined ? p.llegada : procesosInputs[i].llegada,
        rafaga: p.rafaga !== undefined ? p.rafaga : procesosInputs[i].rafaga,
        prioridad: p.prioridad !== undefined ? p.prioridad : procesosInputs[i].prioridad,
        tiempoFin: p.tiempo_sistema ? p.tiempo_sistema : 0,
        tiempoEspera: p.tiempo_espera,
        tiempoInicio: 0
      };
    });
    this.diagrama = Array.isArray(res.Diagrama) ? res.Diagrama : [];
    this.error = '';
    this.cdr.detectChanges();
    this.mostrarResultados();
  }

  private manejarErrorAPI(err: any) {
    console.error('Error en la API:', err);
    this.error = err.error?.message || 'Error al procesar la solicitud. Verifica los datos e intenta nuevamente.';
    this.procesos = [];
    this.diagrama = [];
  }

  limpiar() {
    this.cantidadProcesos = undefined;
    this.quantum = undefined;
    this.tiempoLlegada = '';
    this.tiempoRafaga = '';
    this.idProcesos = '';
    this.prioridad = '';
    this.procesos = [];
    this.diagrama = [];
    this.error = '';
  }
  mostrarResultados() {
    if (this.procesos.length === 0) return;

    const tablaHTML = `
    <div class="card mb-4 shadow-sm">
      <div class="card-header bg-primary text-white">
        Detalles de los Procesos
      </div>
      <div class="card-body p-2">
        <div class="table-responsive">
          <table class="table table-hover table-bordered table-sm mb-0">
            <thead class="thead-dark">
              <tr>
                <th class="text-center">ID</th>
                <th class="text-center">Llegada</th>
                <th class="text-center">Ráfaga</th>
                <th class="text-center">Prioridad</th>
                <th class="text-center">Finalización</th>
                <th class="text-center">Espera</th>
              </tr>
            </thead>
            <tbody>
              ${this.procesos.map((proceso: any) => `
                <tr>
                  <td class="text-center">${proceso.id}</td>
                  <td class="text-center">${proceso.llegada}</td>
                  <td class="text-center">${proceso.rafaga}</td>
                  <td class="text-center">${proceso.prioridad}</td>
                  <td class="text-center">${proceso.tiempoFin}</td>
                  <td class="text-center">${proceso.tiempoEspera}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

    const maxAnchoDiagrama = 800;
    const tiempoTotal: number = this.diagrama[0]?.length || 20;
    const anchoCelda: number = Math.min(25, maxAnchoDiagrama / tiempoTotal);

    const diagramaHTML = `
    <div class="border rounded p-3 bg-light">
      <h6 class="font-weight-bold mb-2">Diagrama de Gantt</h6>
      <small class="text-muted d-block mb-2">Verde: Ejecución | Amarillo: Espera | Blanco: Inactivo</small>
      <div style="overflow-x: auto;">
        <div style="min-width: ${tiempoTotal * anchoCelda}px;">
          ${this.diagrama.map((fila: number[], index: number) => `
            <div class="d-flex align-items-center mb-1">
              <div class="text-nowrap mr-2" style="width: 40px; font-size: 12px; font-family: Helvetica, sans-serif; color: #333;">
                ${this.procesos[index]?.id || ('P' + (index + 1))}:
              </div>
              <div class="d-flex">
                ${fila.map((estado: number) => {
      let clase = '';
      if (estado === 1) { clase = 'bg-warning'; }
      if (estado === 2) { clase = 'bg-success text-white'; }
      return `<div class="border gantt-cell ${clase} text-center"
                      style="width: ${anchoCelda}px; height: 25px; line-height: 25px; font-size: 10px;"
                      title="Proceso ${this.procesos[index]?.id || ('P' + (index + 1))}">
                      </div>`;
    }).join('')}
              </div>
            </div>
          `).join('')}
          <div class="d-flex mt-1">
            ${Array.from({ length: tiempoTotal }, (_: any, i: number) => `
              <div class="text-center" style="width: ${anchoCelda}px; font-size: 10px; font-family: Helvetica, sans-serif;">
                ${i % 5 === 0 ? i : ''}
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;

    Swal.fire({
      title: 'Resultados del Round Robin',
      html: tablaHTML + diagramaHTML,
      width: '90%',
      confirmButtonText: 'Cerrar',
      customClass: { popup: 'swal-wide' }
    });
  }
  private obtenerEstadoTexto(estado: number): string {
    switch (estado) {
      case 0: return 'Inactivo';
      case 1: return 'En espera';
      case 2: return 'En ejecución';
      default: return 'Desconocido';
    }
  }
}
