import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FacultadesComponent} from './facultades/facultades.component';
import {FacultadDetalleComponent} from './facultad-detalle/facultad-detalle.component';

const routes: Routes = [
  { path: '', component: FacultadesComponent },
  { path: 'detalle/:id', component: FacultadDetalleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacultadRoutingModule { }
