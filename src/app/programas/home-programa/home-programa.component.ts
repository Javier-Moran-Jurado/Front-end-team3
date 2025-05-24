import { Component, OnInit } from '@angular/core';
import { Programa } from '../model/programa';
import { ProgramaService } from '../service/programa.service';
import { faList, faPlus, faTimes, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProgramasFormComponent } from '../programas-form/programas-form.component';

@Component({
  selector: 'app-home-programa',
  templateUrl: './home-programa.component.html',
  styleUrls: ['./home-programa.component.css']
})
export class HomeProgramaComponent implements OnInit {
  programas: Programa[] = [];
  programaSeleccionadoId: number | null = null;
  mostrarForm = false;
  programaEditando: Programa | null = null;

  // Objeto para nuevo programa
  programaNuevo: Programa = {
    id: 0,
    nombre: '',
    activo: true,
    duracion: 0,
    idCoordinador: 0,
    idFacultad: 0
  };

  // Iconos
  faList = faList;
  faPlus = faPlus;
  faTimes = faTimes;
  faGraduationCap = faGraduationCap;

  constructor(
    private programaService: ProgramaService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.cargarProgramas();
  }

  cargarProgramas(): void {
    this.programaService.getProgramas().subscribe({
      next: (data) => this.programas = data,
      error: (err) => console.error('Error cargando programas:', err)
    });
  }

  seleccionarPrograma(id: number): void {
    this.programaSeleccionadoId = id;
    this.mostrarForm = false;
  }

  cerrarDetalle(): void {
    this.programaSeleccionadoId = null;
  }

  mostrarFormulario(): void {
    this.programaEditando = null;
    this.programaSeleccionadoId = null;
    this.mostrarForm = true;
  }

  cerrarFormulario(): void {
    this.mostrarForm = false;
  }

  editarPrograma(programa: Programa): void {
    this.programaEditando = { ...programa };
    this.programaSeleccionadoId = null;
    this.mostrarForm = true;
  }

  guardarPrograma(programa: Programa): void {
    if (programa.id && programa.id !== 0) {
      // Actualización de programa existente
      this.programaService.updatePrograma(programa.id, programa).subscribe({
        next: () => {
          this.cargarProgramas();
          this.cerrarFormulario();
        },
        error: (err) => console.error('Error actualizando programa:', err)
      });
    } else {
      // Creación de nuevo programa
      this.programaService.createPrograma(programa).subscribe({
        next: () => {
          this.cargarProgramas();
          this.cerrarFormulario();
        },
        error: (err) => console.error('Error creando programa:', err)
      });
    }
  }

  eliminarPrograma(id: number): void {
    if (confirm('¿Estás seguro de eliminar este programa?')) {
      this.programaService.deletePrograma(id).subscribe({
        next: () => {
          this.cargarProgramas();
          if (this.programaSeleccionadoId === id) {
            this.programaSeleccionadoId = null;
          }
        },
        error: (err) => console.error('Error eliminando programa:', err)
      });
    }
  }

  abrirFormularioModal(programa?: Programa): void {
    const modalRef = this.modalService.open(ProgramasFormComponent, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg'
    });

    modalRef.componentInstance.programa = programa || {
      id: 0,
      nombre: '',
      activo: true,
      duracion: 0,
      idCoordinador: 0,
      idFacultad: 0
    };

    modalRef.componentInstance.onSave.subscribe((savedPrograma: Programa) => {
      this.guardarPrograma(savedPrograma);
      modalRef.close();
    });
  }
}
