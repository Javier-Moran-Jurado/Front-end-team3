import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Programa } from '../model/programa';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-programas-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './programas-form.component.html'
})
export class ProgramasFormComponent {
  @Input() programa: Programa = {
    id: 0,
    activo: true,
    duracion: 0,
    idCoordinador: 0,
    idFacultad: 0
  };

  @Output() onSave = new EventEmitter<Programa>();

  constructor(public activeModal: NgbActiveModal) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  savePrograma(): void {
    this.onSave.emit(this.programa);
  }
}
