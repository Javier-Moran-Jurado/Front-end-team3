import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Add this import
import { Ova } from '../model/ova';
import { OvaService } from '../service/ova.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // Add this if using FontAwesome
import { faUserPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ovas',
  templateUrl: './ovas.component.html',
  styleUrls: ['./ovas.component.css'],
  standalone: true, // Mark as standalone
  imports: [CommonModule, FontAwesomeModule] // Add required imports
})
export class OvasComponent implements OnInit {
  ovaArr: { ovas: Ova[] } = { ovas: [] };
  faEdit = faEdit;
  faTrash = faTrash;
  faUserPlus = faUserPlus;

  constructor(private ovaService: OvaService) {}

  ngOnInit(): void {
    this.loadOvas();
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
        <input type="text" id="descripcion" class="swal2-input" placeholder="Descripción" value="${ova.descripcion}">
        <input type="number" id="id_curso" class="swal2-input" placeholder="ID Curso" value="${ova.id_curso}">
      `,
      showCancelButton: true,
      confirmButtonText: 'Actualizar',
      preConfirm: () => {
        const nombre = (document.getElementById('nombre') as HTMLInputElement).value;
        const descripcion = (document.getElementById('descripcion') as HTMLInputElement).value;
        const id_curso = (document.getElementById('id_curso') as HTMLInputElement).value;

        if (!nombre || !descripcion || !id_curso) {
          Swal.showValidationMessage('Todos los campos son obligatorios');
          return;
        }

        return { nombre, descripcion, id_curso };
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedOva: Ova = {
          ...ova,
          nombre: result.value!.nombre,
          descripcion: result.value!.descripcion,
          id_curso: result.value!.id_curso
        };

        this.ovaService.updateOva(updatedOva).subscribe(() => {
          this.loadOvas();
          Swal.fire('Actualizado!', 'El ova ha sido actualizado.', 'success');
        });
      }
    });
  }

  addOva(): void {
    Swal.fire({
      title: 'Añadir Ova',
      html: `
        <input type="text" id="nombre" class="swal2-input" placeholder="Nombre">
        <input type="text" id="descripcion" class="swal2-input" placeholder="Descripción">
        <input type="number" id="id_curso" class="swal2-input" placeholder="ID Curso">
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

        return { nombre, descripcion, id_curso };
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const nuevoOva: Ova = {
          nombre: result.value!.nombre,
          descripcion: result.value!.descripcion,
          id_curso: result.value!.id_curso,
        };

        this.ovaService.createOva(nuevoOva).subscribe(() => {
          this.loadOvas();
          Swal.fire('¡Creado!', 'El ova ha sido creado exitosamente.', 'success');
        });
      }
    });
  }

  private loadOvas(): void {
    this.ovaService.getOvas().subscribe(data => {
      this.ovaArr = data;
    });
  }
}
