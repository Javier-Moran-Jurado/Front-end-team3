import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibOperacionesConjuntosComponent } from './lib-operaciones-conjuntos.component';

const routes: Routes = [
  { path: '', component: LibOperacionesConjuntosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibOperacionesConjuntosRoutingModule { }
