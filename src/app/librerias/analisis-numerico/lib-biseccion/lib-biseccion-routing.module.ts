import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibBiseccionComponent } from './lib-biseccion.component';

const routes: Routes = [
  { path: '', component: LibBiseccionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibBiseccionRoutingModule { }
