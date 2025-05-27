import {Component, OnInit} from '@angular/core';
import {Ova} from '../model/ova';
import {OvaService} from '../service/ova.service';
import { faUserPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ovas',
  templateUrl: './ovas.component.html',
  standalone: false,
  styleUrl: './ovas.component.css'
})
export class OvasComponent implements OnInit {
  ovaArr: {ovas: Ova[]} = {ovas:[]};
  faEdit = faEdit;
  faTrash = faTrash;
  faUserPlus = faUserPlus;


  constructor(
    private ovaService: OvaService
  ) {}

  ngOnInit(): void {
    this.ovaService.getOvas().subscribe(data => this.ovaArr = data);
  }

  confirmDelete(ova: Ova): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esta acción',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.ovaService.deleteOva(ova).subscribe(() => {
          this.loadOvas();
          Swal.fire('Eliminado!', 'El ova ha sido eliminado.', 'success');
        });
      }
    });
  }


  editOva(ova: Ova): void {
    Swal.fire({
      title: 'Editar Ova',
      html: `
        <input type="text" id="nombre" class="swal2-input" placeholder="Nombre" value="${ova.nombre}">
      <input type="text" id="descripcion" class="swal2-input" placeholder="Apellido" value="${ova.descripcion}">
      <input type="id_curso" id="id_curso" class="swal2-input" placeholder="Email" value="${ova.id_curso}">
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
        ova.nombre = result.value!.nombre;
        ova.descripcion = result.value!.descripcion;
        ova.id_curso = result.value!.id_curso;
        this.ovaService.updateOva(ova).subscribe(() => {
          Swal.fire('Actualizado!', 'El ova ha sido actualizado.', 'success');
        });
      }
    });
  }

  addOva(): void {
    // Cargar regiones desde el backend antes de mostrar el modal

    // Mostrar el formulario en SweetAlert2
    Swal.fire({
      title: 'Añadir Ova',
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
        const nuevoOva: Ova = {
          nombre: result.value!.nombre,
          descripcion: result.value!.descripcion,
          id_curso: result.value!.id_curso,
        };

        // Guardar el ova usando el servicio
        this.ovaService.createOva(nuevoOva).subscribe(() => {
          this.loadOvas(); // Recargar la lista de ovas
          Swal.fire('¡Creado!', 'El ova ha sido creado exitosamente.', 'success');
        });
      }
    });
  }


  private loadOvas() {
    console.log("cargando ovas");
    this.ovaService.getOvas().subscribe(data => this.ovaArr = data);
  }
}
