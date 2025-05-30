import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursoDetalleComponent } from './curso-detalle/curso-detalle.component';
import { CursosComponent } from './cursos/cursos.component';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { CursosFormComponent } from './cursos-form/cursos-form.component';

@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    FaIconComponent,
    CursoDetalleComponent,
    CursosFormComponent
  ]
})
export class CursosModule { }
