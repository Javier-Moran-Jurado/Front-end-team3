import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramasRoutingModule } from './programas-routing.module';
import { ProgramasComponent } from './programas.component'; // Importación directa
import { HomeProgramaComponent } from './home-programa/home-programa.component';
import { ProgramaDetalleComponent } from './programa-detalle/programa-detalle.component';
import { ProgramasFormComponent } from './programas-form/programas-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProgramasComponent,
    HomeProgramaComponent,
    ProgramaDetalleComponent,
  ],
  imports: [
    CommonModule,
    ProgramasFormComponent,
    ProgramasRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ]
})
export class ProgramasModule { }
