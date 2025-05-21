import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Facultad} from '../model/facultad';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-facultad-form',
  imports: [
    FormsModule
  ],
  standalone: true,
  templateUrl: './facultad-form.component.html'
})
export class FacultadFormComponent {
  @Input() facultad: Facultad = { id: 0, nombre: '', descripcion: '', id_curso: 0};
  @Output() onSave = new EventEmitter<Facultad>();

  constructor(public activeModal: NgbActiveModal) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  saveFacultad(): void {
    this.onSave.emit(this.facultad);
  }
}
