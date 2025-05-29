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
      <input type="text" id="nombre" class="swal2-input" placeholder="Nombre">
      <input type="text" id="descripcion" class="swal2-input" placeholder="Descripción">
      <input type="text" id="perfilEgreso" class="swal2-input" placeholder="Perfil de Egreso">
      <select id="nivelAcademico" class="swal2-input">
        <option value="Técnico">Técnico</option>
        <option value="Tecnológico">Tecnológico</option>
        <option value="Profesional">Profesional</option>
        <option value="Especialización">Especialización</option>
        <option value="Maestría">Maestría</option>
        <option value="Doctorado">Doctorado</option>
      </select>
      <input type="number" id="numeroCreditos" class="swal2-input" placeholder="Número de Créditos">
      <input type="number" id="duracion" class="swal2-input" placeholder="Duración (1 a 10)">
      <input type="number" id="idCoordinador" class="swal2-input" placeholder="ID Coordinador">
      <input type="number" id="idFacultad" class="swal2-input" placeholder="ID Facultad">
      <select id="activo" class="swal2-input">
        <option value="true">Activo</option>
        <option value="false">Inactivo</option>
      </select>
    `,
      focusConfirm: false,
      preConfirm: () => {
        const nombre = (document.getElementById('nombre') as HTMLInputElement).value;
        const descripcion = (document.getElementById('descripcion') as HTMLInputElement).value;
        const perfilEgreso = (document.getElementById('perfilEgreso') as HTMLInputElement).value;
        const nivelAcademico = (document.getElementById('nivelAcademico') as HTMLSelectElement).value;
        const numeroCreditos = +(document.getElementById('numeroCreditos') as HTMLInputElement).value;
        const duracion = +(document.getElementById('duracion') as HTMLInputElement).value;
        const idCoordinador = +(document.getElementById('idCoordinador') as HTMLInputElement).value;
        const idFacultad = +(document.getElementById('idFacultad') as HTMLInputElement).value;
        const activo = (document.getElementById('activo') as HTMLSelectElement).value === 'true';

        if (!nombre || !descripcion || !perfilEgreso || !nivelAcademico || !numeroCreditos || !duracion || !idCoordinador || !idFacultad) {
          Swal.showValidationMessage('Todos los campos son obligatorios');
          return;
        }

        return {
          nombre,
          descripcion,
          perfilEgreso,
          nivelAcademico,
          numeroCreditos,
          duracion,
          idCoordinador,
          idFacultad,
          activo
        };
      }
    }).then(result => {
      if (result.isConfirmed) {
        const nuevoPrograma: Programa = result.value!;
        console.log('Datos enviados:', result.value);
        console.log('Programa a enviar:', nuevoPrograma);
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
      <input type="text" id="nombre" class="swal2-input" placeholder="Nombre" value="${programa.nombre}">
      <input type="text" id="descripcion" class="swal2-input" placeholder="Descripción" value="${programa.descripcion}">
      <input type="text" id="perfilEgreso" class="swal2-input" placeholder="Perfil de Egreso" value="${programa.perfilEgreso}">
      <select id="nivelAcademico" class="swal2-input">
        <option value="Tecnico" ${programa.nivelAcademico === 'Tecnico' ? 'selected' : ''}>Técnico</option>
        <option value="Tecnologico" ${programa.nivelAcademico === 'Tecnologico' ? 'selected' : ''}>Tecnológico</option>
        <option value="Profesional" ${programa.nivelAcademico === 'Profesional' ? 'selected' : ''}>Profesional</option>
        <option value="Especializacion" ${programa.nivelAcademico === 'Especializacion' ? 'selected' : ''}>Especialización</option>
        <option value="Maestria" ${programa.nivelAcademico === 'Maestria' ? 'selected' : ''}>Maestría</option>
        <option value="Doctorado" ${programa.nivelAcademico === 'Doctorado' ? 'selected' : ''}>Doctorado</option>
      </select>
      <input type="number" id="numeroCreditos" class="swal2-input" placeholder="Número de Créditos" value="${programa.numeroCreditos}">
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
        const nombre = (document.getElementById('nombre') as HTMLInputElement).value;
        const descripcion = (document.getElementById('descripcion') as HTMLInputElement).value;
        const perfilEgreso = (document.getElementById('perfilEgreso') as HTMLInputElement).value;
        const nivelAcademico = (document.getElementById('nivelAcademico') as HTMLSelectElement).value;
        const numeroCreditos = +(document.getElementById('numeroCreditos') as HTMLInputElement).value;
        const duracion = +(document.getElementById('duracion') as HTMLInputElement).value;
        const idCoordinador = +(document.getElementById('idCoordinador') as HTMLInputElement).value;
        const idFacultad = +(document.getElementById('idFacultad') as HTMLInputElement).value;
        const activo = (document.getElementById('activo') as HTMLSelectElement).value === 'true';

        if (!nombre || !descripcion || !perfilEgreso || !nivelAcademico || !numeroCreditos || !duracion || !idCoordinador || !idFacultad) {
          Swal.showValidationMessage('Todos los campos son obligatorios');
          return;
        }

        return {
          nombre,
          descripcion,
          perfilEgreso,
          nivelAcademico,
          numeroCreditos,
          duracion,
          idCoordinador,
          idFacultad,
          activo
        };
      }
    }).then(result => {
      if (result.isConfirmed) {
        const valores = result.value!;
        // Actualiza el objeto original
        programa.nombre = valores.nombre;
        programa.descripcion = valores.descripcion;
        programa.perfilEgreso = valores.perfilEgreso;
        programa.nivelAcademico = valores.nivelAcademico;
        programa.numeroCreditos = valores.numeroCreditos;
        programa.duracion = valores.duracion;
        programa.idCoordinador = valores.idCoordinador;
        programa.idFacultad = valores.idFacultad;
        programa.activo = valores.activo;

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
