import { Component, OnInit } from '@angular/core';
import { Programa } from '../model/programa';
import { ProgramaService } from '../service/programa.service';
import Swal from 'sweetalert2';
import { faUserPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-programas',
  standalone: false,
  templateUrl: './programas.component.html',
  styleUrl: './programas.component.css'
})
export class ProgramasComponent implements OnInit {
  public programas: Programa[] = [];

  faEdit = faEdit;
  faTrash = faTrash;
  faUserPlus = faUserPlus;

  constructor(private programaService: ProgramaService) {}

  ngOnInit(): void {
    this.loadProgramas();
  }

  loadProgramas(): void {
    this.programaService.getProgramas().subscribe(data => this.programas = data);
  }

  addPrograma(): void {
    Swal.fire({
      title: 'Añadir Programa',
      html: `
        <input type="number" id="duracion" class="swal2-input" placeholder="Duración">
        <input type="number" id="idCoordinador" class="swal2-input" placeholder="ID Coordinador">
        <input type="number" id="idFacultad" class="swal2-input" placeholder="ID Facultad">
        <select id="activo" class="swal2-input">
          <option value="true">Activo</option>
          <option value="false">Inactivo</option>
        </select>
      `,
      focusConfirm: false,
      preConfirm: () => {
        const duracion = (document.getElementById('duracion') as HTMLInputElement).value;
        const idCoordinador = (document.getElementById('idCoordinador') as HTMLInputElement).value;
        const idFacultad = (document.getElementById('idFacultad') as HTMLInputElement).value;
        const activo = (document.getElementById('activo') as HTMLSelectElement).value;

        if (!duracion || !idCoordinador || !idFacultad) {
          Swal.showValidationMessage('Todos los campos son obligatorios');
          return;
        }

        return {
          duracion: +duracion,
          idCoordinador: +idCoordinador,
          idFacultad: +idFacultad,
          activo: activo === 'true'
        };
      }
    }).then(result => {
      if (result.isConfirmed) {
        const nuevoPrograma: Programa = result.value!;
        this.programaService.createPrograma(nuevoPrograma).subscribe(() => {
          this.loadProgramas();
          Swal.fire('¡Creado!', 'El programa ha sido creado exitosamente.', 'success');
        });
      }
    });
  }

  editPrograma(programa: Programa): void {
    Swal.fire({
      title: 'Editar Programa',
      html: `
        <input type="number" id="duracion" class="swal2-input" placeholder="Duración" value="${programa.duracion}">
        <input type="number" id="idCoordinador" class="swal2-input" placeholder="ID Coordinador" value="${programa.idCoordinador}">
        <input type="number" id="idFacultad" class="swal2-input" placeholder="ID Facultad" value="${programa.idFacultad}">
        <select id="activo" class="swal2-input">
          <option value="true" ${programa.activo ? 'selected' : ''}>Activo</option>
          <option value="false" ${!programa.activo ? 'selected' : ''}>Inactivo</option>
        </select>
      `,
      showCancelButton: true,
      confirmButtonText: 'Actualizar',
      preConfirm: () => {
        const duracion = (document.getElementById('duracion') as HTMLInputElement).value;
        const idCoordinador = (document.getElementById('idCoordinador') as HTMLInputElement).value;
        const idFacultad = (document.getElementById('idFacultad') as HTMLInputElement).value;
        const activo = (document.getElementById('activo') as HTMLSelectElement).value;

        return {
          duracion: +duracion,
          idCoordinador: +idCoordinador,
          idFacultad: +idFacultad,
          activo: activo === 'true'
        };
      }
    }).then(result => {
      if (result.isConfirmed) {
        programa.duracion = result.value!.duracion;
        programa.idCoordinador = result.value!.idCoordinador;
        programa.idFacultad = result.value!.idFacultad;
        programa.activo = result.value!.activo;

        this.programaService.updatePrograma(programa).subscribe(() => {
          this.loadProgramas();
          Swal.fire('¡Actualizado!', 'El programa ha sido actualizado.', 'success');
        });
      }
    });
  }

  confirmDelete(programa: Programa): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esta acción',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.isConfirmed) {
        this.programaService.deletePrograma(programa).subscribe(() => {
          this.loadProgramas();
          Swal.fire('Eliminado!', 'El programa ha sido eliminado.', 'success');
        });
      }
    });
  }
}
