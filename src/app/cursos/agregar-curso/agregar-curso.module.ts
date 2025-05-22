import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgregarCursoRoutingModule } from './agregar-curso-routing.module';
import { AgregarCursoComponent } from './agregar-curso.component';


@NgModule({
  declarations: [
    AgregarCursoComponent
  ],
  imports: [
    CommonModule,
    AgregarCursoRoutingModule
  ]
})
export class AgregarCursoModule { }
