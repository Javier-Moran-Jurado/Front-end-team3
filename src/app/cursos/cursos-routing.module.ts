import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalleComponent } from './curso-detalle/curso-detalle.component';

const routes: Routes = [
  { path: '', component: CursosComponent },
  { path: 'detalle/:id', component: CursoDetalleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
