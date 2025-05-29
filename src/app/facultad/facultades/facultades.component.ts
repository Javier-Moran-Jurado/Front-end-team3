import { Component, OnInit } from '@angular/core';
import { Facultad } from '../model/facultad';
import { FacultadService } from '../service/facultad.service';
import { faUserPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Usuario } from '../model/usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-facultades',
  templateUrl: './facultades.component.html',
  styleUrls: ['./facultades.component.css']
})
export class FacultadesComponent implements OnInit {
  facultadArr: { facultades: Facultad[] } = { facultades: [] };
  // Lista hardcodeada de decanos (puedes cambiarla)
  decanos: { usuarios: Usuario[]} = { usuarios: [] };
  faEdit = faEdit;
  faTrash = faTrash;
  faUserPlus = faUserPlus;

  constructor(private facultadService: FacultadService) {}

  ngOnInit(): void {
    this.loadFacultades();
    this.loadDecanos();
  }

  confirmDelete(facultad: Facultad): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esta acción',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.facultadService.deleteFacultad(facultad).subscribe(() => {
          this.loadFacultades();
          Swal.fire('Eliminado!', 'La facultad ha sido eliminada.', 'success');
        });
      }
    });
  }

  editFacultad(facultad: Facultad): void {
    this.loadDecanos();
    const options = this.decanos.usuarios.map(d =>
      `<option value="${d.id}" ${d.id === facultad.id_decano ? 'selected' : ''}>
        ${d.nombreCompleto} (CC: ${d.cedula})
      </option>`
    ).join('');

    Swal.fire({
      title: 'Editar Facultad',
      html: `
        <input type="text" id="nombre" class="swal2-input" value="${facultad.nombre}">
        <select id="id_decano" class="swal2-select">
          ${options}
        </select>
      `,
      showCancelButton: true,
      confirmButtonText: 'Actualizar',
      preConfirm: () => {
        const nombre = (document.getElementById('nombre') as HTMLInputElement).value;
        const id_decano = (document.getElementById('id_decano') as HTMLSelectElement).value;

        if (!nombre || !id_decano) {
          Swal.showValidationMessage('Todos los campos son obligatorios');
          return;
        }

        return { nombre, id_decano: Number(id_decano) };
      }
    }).then((result) => {
      if (result.isConfirmed) {
        facultad.nombre = result.value!.nombre;
        facultad.id_decano = result.value!.id_decano;
        this.facultadService.updateFacultad(facultad).subscribe(() => {
          this.loadFacultades();
          Swal.fire('Actualizado!', 'La facultad ha sido actualizada.', 'success');
        });
      }
    });
  }

  addFacultad(): void {
    this.loadDecanos();
    const options = this.decanos.usuarios.map(d =>
      `<option value="${d.id}">${d.nombreCompleto} (CC: ${d.cedula})</option>`
    ).join('');

    Swal.fire({
      title: 'Añadir Facultad',
      html: `
        <input type="text" id="nombre" class="swal2-input" placeholder="Nombre">
        <select id="id_decano" class="swal2-select">
          <option value="" selected disabled>Seleccione decano</option>
          ${options}
        </select>
      `,
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      preConfirm: () => {
        const nombre = (document.getElementById('nombre') as HTMLInputElement).value.trim();
        const id_decano = (document.getElementById('id_decano') as HTMLSelectElement).value;

        if (!nombre || !id_decano) {
          Swal.showValidationMessage('Todos los campos son obligatorios');
          return;
        }
        return { nombre, id_decano: Number(id_decano) };
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const nuevoFacultad: Facultad = {
          nombre: result.value!.nombre,
          id_decano: result.value!.id_decano
        };

        this.facultadService.createFacultad(nuevoFacultad).subscribe({
          next: () => {
            this.loadFacultades();
            Swal.fire('¡Éxito!', 'Facultad creada.', 'success');
          },
          error: (err) => {
            Swal.fire('Error', err.error?.message || 'Error al crear', 'error');
          }
        });
      }
    });
  }

  private loadFacultades() {
    this.facultadService.getFacultades().subscribe(data => this.facultadArr = data);
  }

  private loadDecanos(){
    this.facultadService.getDecanos().subscribe(data => this.decanos = data);
  }
}
