import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Curso } from '../model/curso';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cursos-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cursos-form.component.html'
})
export class CursosFormComponent {
  @Input() curso: Curso = {
    id: 0,
    activo: true,
    cuposDisponibles: 0,
    descripcion: '',
    duracion: 0,
    fechaCreacion: '',
    horario: '',
    idDocente: 0,
    idSemestre: 0,
    modalidad: '',
    nombre: '',
    numeroCreditos: 0
  };

  @Output() onSave = new EventEmitter<Curso>();

  constructor(public activeModal: NgbActiveModal) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  saveCurso(): void {
    this.onSave.emit(this.curso);
  }
}
