import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Ova} from '../model/ova';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-ova-form',
  imports: [
    FormsModule
  ],
  standalone: true,
  templateUrl: './ova-form.component.html'
})
export class OvaFormComponent {
  @Input() ova: Ova = { id: 0, nombre: '', descripcion: '', id_curso: 0};
  @Output() onSave = new EventEmitter<Ova>();

  constructor(public activeModal: NgbActiveModal) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  saveOva(): void {
    this.onSave.emit(this.ova);
  }
}
