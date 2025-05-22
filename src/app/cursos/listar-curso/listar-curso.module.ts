import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarCursoRoutingModule } from './listar-curso-routing.module';
import { ListarCursoComponent } from './listar-curso.component';


@NgModule({
  declarations: [
    ListarCursoComponent
  ],
  imports: [
    CommonModule,
    ListarCursoRoutingModule
  ]
})
export class ListarCursoModule { }
