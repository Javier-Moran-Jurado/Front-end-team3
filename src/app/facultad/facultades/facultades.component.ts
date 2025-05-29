import {Component, OnInit} from '@angular/core';
import {Facultad} from '../model/facultad';
import {FacultadService} from '../service/facultad.service';
import { faUserPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { FacultadFormComponent } from '../facultad-form/facultad-form.component';



@Component({
  selector: 'app-facultades',
  templateUrl: './facultades.component.html',
  standalone: false,
  styleUrl: './facultades.component.css'
})
export class FacultadesComponent implements OnInit {
  facultadArr: {facultades: Facultad[]} = {facultades:[]};
  faEdit = faEdit;
  faTrash = faTrash;
  faUserPlus = faUserPlus;


  constructor(
    private facultadService: FacultadService
  ) {}

  ngOnInit(): void {
    this.facultadService.getFacultades().subscribe(data => this.facultadArr = data);
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
          Swal.fire('Eliminado!', 'El facultad ha sido eliminado.', 'success');
        });
      }
    });
  }


  editFacultad(facultad: Facultad): void {
    Swal.fire({
      title: 'Editar Facultad',
      html: `
        <input type="text" id="nombre" class="swal2-input" placeholder="Nombre" value="${facultad.nombre}">
      <input type="text" id="descripcion" class="swal2-input" placeholder="Apellido" value="${facultad.descripcion}">
      <input type="id_curso" id="id_curso" class="swal2-input" placeholder="Email" value="${facultad.id_curso}">
      `,
      showCancelButton: true,
      confirmButtonText: 'Actualizar',
      preConfirm: () => {
        const nombre = (<HTMLInputElement>Swal.getPopup()!.querySelector('#nombre')).value;
        const descripcion = (<HTMLInputElement>Swal.getPopup()!.querySelector('#descripcion')).value;
        const id_curso = (<HTMLInputElement>Swal.getPopup()!.querySelector('#id_curso')).value;
        return { nombre, descripcion, id_curso };
      }
    }).then((result) => {
      if (result.isConfirmed) {
        facultad.nombre = result.value!.nombre;
        facultad.descripcion = result.value!.descripcion;
        facultad.id_curso = result.value!.id_curso;
        this.facultadService.updateFacultad(facultad).subscribe(() => {
          Swal.fire('Actualizado!', 'El facultad ha sido actualizado.', 'success');
        });
      }
    });
  }

  addFacultad(): void {
    // Cargar regiones desde el backend antes de mostrar el modal

    // Mostrar el formulario en SweetAlert2
    Swal.fire({
      title: 'Añadir Facultad',
      html: `
          <input type="text" id="nombre" class="swal2-input" placeholder="Nombre">
          <input type="text" id="descripcion" class="swal2-input" placeholder="Descripcion">
          <input type="number" id="id_curso" class="swal2-input" placeholder="Id curso">
        `,
      focusConfirm: false,
      preConfirm: () => {
        const nombre = (document.getElementById('nombre') as HTMLInputElement).value;
        const descripcion = (document.getElementById('descripcion') as HTMLInputElement).value;
        const id_curso = (document.getElementById('id_curso') as HTMLInputElement).value;

        if (!nombre || !descripcion || !id_curso) {
          Swal.showValidationMessage('Todos los campos son obligatorios');
          return;
        }

        return {
          nombre,
          descripcion,
          id_curso,
        };
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const nuevoFacultad: Facultad = {
          nombre: result.value!.nombre,
          descripcion: result.value!.descripcion,
          id_curso: result.value!.id_curso,
        };

        // Guardar el facultad usando el servicio
        this.facultadService.createFacultad(nuevoFacultad).subscribe(() => {
          this.loadFacultades(); // Recargar la lista de facultades
          Swal.fire('¡Creado!', 'El facultad ha sido creado exitosamente.', 'success');
        });
      }
    });
  }


  private loadFacultades() {
    console.log("cargando facultades");
    this.facultadService.getFacultades().subscribe(data => this.facultadArr = data);
  }
}
