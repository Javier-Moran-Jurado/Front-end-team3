import { Component, ElementRef, AfterViewInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
interface Proceso {
  id: number | null;
  llegada: number | null;
  rafaga: number | null;
  prioridad: number | null;
  tiempo_sistema?: number;
  tiempo_espera?: number;
}

@Component({
  selector: 'app-lib-so-sjf',
  templateUrl: './lib-so-sjf.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule],
  styleUrls: ['./lib-so-sjf.component.css']
})

export class LibSoSJComponent {
  constructor(private http: HttpClient, private elRef: ElementRef) {
  }

  procesos: Proceso[] = [
    {id: null, llegada: null, rafaga: null, prioridad: null}
  ];


  expulsivo: boolean = false;
  error = '';
  loading = false;

  matrizDiagrama: number[][] = [];

  agregarProceso(): void {
    this.procesos.push({id: null, llegada: null, rafaga: null, prioridad: null});
  }

  eliminarProceso(): void {
    if (this.procesos.length > 1) {
      this.procesos.pop();
    }
  }

  ejecutar(): void {
    const payload = {
      procesos: this.procesos.map(p => ({
        id: p.id,
        llegada: p.llegada,
        rafaga: p.rafaga,
        prioridad: p.prioridad
      }))
    };
    const url = `http://localhost:8083/api/libProcesos/sjf?expulsivo=${this.expulsivo}`;

    this.http.post(url, payload).subscribe({
      next: (response) => {
        this.actualizarResultados(response);
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error al calcular los tiempos: ' + err.message;
        this.loading = false;
      }
    });
  }


  actualizarResultados(response: any) {
    try {
      const parsedData = typeof response == 'string' ? JSON.parse(response) : response;
      if (parsedData.Procesos) {
        Object.keys(parsedData.Procesos).forEach(id => {
          const datos = parsedData.Procesos[id];
          const idNum = parseInt(id, 10);
          // Busca el proceso en tu array local con ese id
          const proceso = this.procesos.find(p => p.id === idNum);
          if (proceso) {
            proceso.tiempo_sistema = datos.tiempo_sistema;
            proceso.tiempo_espera = datos.tiempo_espera;
          }
        });
      }
      if (parsedData.Diagrama) {
        this.matrizDiagrama = parsedData.Diagrama;
        console.log("Diagrama recibido:", this.matrizDiagrama);
      }
    } catch (error) {
      console.error("Error al parsear la respuesta JSON:", error);
      this.error = "Error procesando los datos.";
    }
  }

  trackByIndex(index: number): number {
    return index; // Usa el índice como identificador único
  }

  protected readonly indexedDB = indexedDB;
}
