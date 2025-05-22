import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './cursos.component';

const routes: Routes = [{ path: '', component: CursosComponent }, { path: 'agregar', loadChildren: () => import('./agregar-curso/agregar-curso.module').then(m => m.AgregarCursoModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
