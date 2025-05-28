import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibCostos5Component } from './lib-costos5.component';

const routes: Routes = [
  { path: '', component: LibCostos5Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibCostos5RoutingModule { }
