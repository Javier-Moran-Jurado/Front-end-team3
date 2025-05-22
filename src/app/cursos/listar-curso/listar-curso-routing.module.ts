import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarCursoComponent } from './listar-curso.component';

const routes: Routes = [{ path: '', component: ListarCursoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListarCursoRoutingModule { }
