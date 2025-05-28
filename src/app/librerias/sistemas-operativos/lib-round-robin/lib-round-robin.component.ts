import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-round-robin',
  templateUrl: './lib-round-robin.component.html',
  styleUrls: ['./lib-round-robin.component.css']
})
export class RoundRobinComponent {
  cantidadProcesos: number = 0;
  quantum: number = 0;
  tiempoLlegada: string = '';
  tiempoRafaga: string = '';
  idProcesos: string = '';
  prioridad: string = '';
  procesos: any[] = [];
  error: string = '';
  diagrama: number[][] = [];

  calcular() {
    // Validaciones
    if (!this.cantidadProcesos || !this.quantum || !this.tiempoLlegada || !this.tiempoRafaga) {
      this.error = 'Por favor complete todos los campos requeridos';
      return;
    }

    // Lógica de cálculo (simplificada para el ejemplo)
    try {
      // Procesar los datos de entrada
      const llegadas = this.tiempoLlegada.split(',').map(Number);
      const rafagas = this.tiempoRafaga.split(',').map(Number);
      const ids = this.idProcesos.split(',');
      const prioridades = this.prioridad ? this.prioridad.split(',').map(Number) : [];

      // Aquí iría tu implementación del algoritmo Round Robin
      // Esto es solo un ejemplo simplificado
      this.procesos = [];
      let tiempoActual = 0;

      for (let i = 0; i < this.cantidadProcesos; i++) {
        const proceso = {
          id: ids[i] || `P${i+1}`,
          tiempoLlegada: llegadas[i],
          tiempoRafaga: rafagas[i],
          prioridad: prioridades[i] || 0,
          tiempoFin: llegadas[i] + rafagas[i],
          tiempoRetorno: (llegadas[i] + rafagas[i]) - llegadas[i],
          tiempoEspera: 0 // Cálculo real dependerá del algoritmo
        };
        this.procesos.push(proceso);
        tiempoActual += rafagas[i];
      }

      // Generar diagrama de Gantt simplificado (ejemplo)
      this.generarDiagrama();

      this.error = '';
    } catch (e) {
      this.error = 'Error en el formato de los datos';
    }
  }

  limpiar() {
    this.cantidadProcesos = 0;
    this.quantum = 0;
    this.tiempoLlegada = '';
    this.tiempoRafaga = '';
    this.idProcesos = '';
    this.prioridad = '';
    this.procesos = [];
    this.error = '';
    this.diagrama = [];
  }

  generarDiagrama() {
    // Esta es una implementación simplificada
    // En una implementación real, esto generaría el diagrama basado en el algoritmo RR
    this.diagrama = [];

    for (let i = 0; i < this.cantidadProcesos; i++) {
      const fila = [];
      const duracion = this.procesos[i].tiempoRafaga;

      for (let j = 0; j < 20; j++) { // 20 unidades de tiempo de ejemplo
        if (j < this.procesos[i].tiempoLlegada) {
          fila.push(0); // Inactivo
        } else if (j < this.procesos[i].tiempoLlegada + duracion) {
          fila.push(j % 2 === 0 ? 2 : 1); // Alternar entre ejecución y espera
        } else {
          fila.push(0); // Inactivo
        }
      }
      this.diagrama.push(fila);
    }
  }

  mostrarResultados() {
    if (this.procesos.length === 0) return;

    // Generar tabla de resultados
    let tablaHTML = `
      <div class="table-responsive mb-4" style="max-height: 300px;">
        <table class="table table-bordered table-striped table-sm">
          <thead class="bg-light">
            <tr>
              <th class="text-center">ID</th>
              <th class="text-center">Llegada</th>
              <th class="text-center">Ráfaga</th>
              <th class="text-center">Prioridad</th>
              <th class="text-center">Finalización</th>
              <th class="text-center">Retorno</th>
              <th class="text-center">Espera</th>
            </tr>
          </thead>
          <tbody>
            ${this.procesos.map(proceso => `
              <tr>
                <td class="text-center">${proceso.id}</td>
                <td class="text-center">${proceso.tiempoLlegada}</td>
                <td class="text-center">${proceso.tiempoRafaga}</td>
                <td class="text-center">${proceso.prioridad}</td>
                <td class="text-center">${proceso.tiempoFin}</td>
                <td class="text-center">${proceso.tiempoRetorno}</td>
                <td class="text-center">${proceso.tiempoEspera}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>`;

    // Generar diagrama de Gantt
    const maxAnchoDiagrama = 800;
    const tiempoTotal = this.diagrama[0]?.length || 20;
    const anchoCelda = Math.min(25, maxAnchoDiagrama / tiempoTotal);

    let diagramaHTML = `
      <div class="border rounded p-3 bg-light mb-3">
        <h6 class="font-weight-bold mb-2">Diagrama de Gantt</h6>
        <small class="text-muted d-block mb-2">Verde: Ejecución | Amarillo: Espera | Blanco: Inactivo</small>

        <div style="overflow-x: auto;">
          <div style="min-width: ${tiempoTotal * anchoCelda}px;">
            ${this.diagrama.map((fila, index) => `
              <div class="d-flex align-items-center mb-1">
                <div class="font-weight-bold text-nowrap mr-2" style="width: 40px;">${this.procesos[index]?.id || 'P'+(index+1)}:</div>
                <div class="d-flex">
                  ${fila.map((estado, tiempo) => {
      let clase = '';
      if (estado === 1) clase = 'bg-warning';
      if (estado === 2) clase = 'bg-success text-white';

      return `
                    <div class="border gantt-cell ${clase} text-center"
                         style="width: ${anchoCelda}px; height: 25px; line-height: 25px; font-size: 10px;"
                         title="Proceso ${this.procesos[index]?.id || 'P'+(index+1)}, Tiempo ${tiempo}: ${this.obtenerEstadoTexto(estado)}">
                      ${tiempo === 0 || tiempo === fila.length - 1 || tiempo % 5 === 0 ? tiempo : ''}
                    </div>`;
    }).join('')}
                </div>
              </div>
            `).join('')}

            <!-- Eje X -->
            <div class="d-flex ml-5 mt-1">
              ${Array.from({length: tiempoTotal}, (_, i) => `
                <div class="text-center" style="width: ${anchoCelda}px; font-size: 10px;">
                  ${i % 5 === 0 ? i : ''}
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>`;

    // Mostrar JSON
    const jsonHTML = `
      <div class="mt-3">
        <h6 class="font-weight-bold">Datos en formato JSON</h6>
        <pre style="background: #f8f9fa; padding: 10px; border-radius: 4px; max-height: 200px; overflow-y: auto;">
${JSON.stringify({ Procesos: this.procesos, Diagrama: this.diagrama }, null, 2)}
        </pre>
      </div>`;

    Swal.fire({
      title: 'Resultados del Round Robin',
      html: tablaHTML + diagramaHTML + jsonHTML,
      width: '90%',
      confirmButtonText: 'Cerrar',
      customClass: {
        popup: 'swal-wide'
      }
    });
  }

  private obtenerEstadoTexto(estado: number): string {
    switch(estado) {
      case 0: return 'Inactivo';
      case 1: return 'En espera';
      case 2: return 'En ejecución';
      default: return 'Desconocido';
    }
  }
}
