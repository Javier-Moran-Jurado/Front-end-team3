import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProgramasComponent} from './programas/programas.component';
import {ProgramaDetalleComponent} from './programa-detalle/programa-detalle.component';

const routes: Routes = [
  { path: '',component: ProgramasComponent },
  { path: 'detalle/:id', component: ProgramaDetalleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramasRoutingModule { }
