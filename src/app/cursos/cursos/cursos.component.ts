import { Component, OnInit } from '@angular/core';
import { Curso } from '../model/curso';
import { CursoService } from '../service/curso.service';
import Swal from 'sweetalert2';
import { faUserPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cursos',
  standalone: false,
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent implements OnInit {
  public cursos: Curso[] = [];

  faEdit = faEdit;
  faTrash = faTrash;
  faUserPlus = faUserPlus;

  constructor(private cursoService: CursoService) {}

  ngOnInit(): void {
    this.loadCursos();
  }

  loadCursos(): void {
    this.cursoService.getCursos().subscribe(data => this.cursos = data);
  }

  addCurso(): void {
    Swal.fire({
      title: 'Añadir Curso',
      html: `
      <input type="text" id="nombre" class="swal2-input" placeholder="Nombre">
      <input type="text" id="descripcion" class="swal2-input" placeholder="Descripción">
      <input type="number" id="cuposDisponibles" class="swal2-input" placeholder="Cupos Disponibles">
      <input type="text" id="horario" class="swal2-input" placeholder="Horario">
      <input type="text" id="modalidad" class="swal2-input" placeholder="Modalidad">
      <input type="number" id="numeroCreditos" class="swal2-input" placeholder="Número de Créditos">
      <input type="number" id="duracion" class="swal2-input" placeholder="Duración">
      <input type="date" id="fechaCreacion" class="swal2-input" placeholder="Fecha de Creación">
      <input type="number" id="idDocente" class="swal2-input" placeholder="ID Docente">
      <input type="number" id="idSemestre" class="swal2-input" placeholder="ID Semestre">
      <label><input type="checkbox" id="activo"> Activo</label>
      `,
      focusConfirm: false,
      preConfirm: () => {
        return {
          nombre: (document.getElementById('nombre') as HTMLInputElement).value,
          descripcion: (document.getElementById('descripcion') as HTMLInputElement).value,
          cuposDisponibles: +(document.getElementById('cuposDisponibles') as HTMLInputElement).value,
          horario: (document.getElementById('horario') as HTMLInputElement).value,
          modalidad: (document.getElementById('modalidad') as HTMLInputElement).value,
          numeroCreditos: +(document.getElementById('numeroCreditos') as HTMLInputElement).value,
          duracion: +(document.getElementById('duracion') as HTMLInputElement).value,
          fechaCreacion: (document.getElementById('fechaCreacion') as HTMLInputElement).value,
          idDocente: +(document.getElementById('idDocente') as HTMLInputElement).value,
          idSemestre: +(document.getElementById('idSemestre') as HTMLInputElement).value,
          activo: (document.getElementById('activo') as HTMLInputElement).checked
        };
      }
    }).then((result) => {
      if (result.isConfirmed && result.value) {
        this.cursoService.createCurso(result.value).subscribe(() => this.loadCursos());
      }
    });
  }

  deleteCurso(curso: Curso): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esto',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.cursoService.deleteCurso(curso).subscribe(() => {
          Swal.fire('¡Eliminado!', 'El curso ha sido eliminado.', 'success');
          this.loadCursos();
        });
      }
    });
  }
}
