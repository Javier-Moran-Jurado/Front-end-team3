import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OvasComponent} from './ovas/ovas.component';
import {OvaDetalleComponent} from './ova-detalle/ova-detalle.component';

const routes: Routes = [
  { path: '', component: OvasComponent },
  { path: 'detalle/:id', component: OvaDetalleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OvaRoutingModule { }
