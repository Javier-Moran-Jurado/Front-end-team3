import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeProgramaComponent } from './home-programa/home-programa.component';
import { ProgramasComponent } from './programas.component'; // Asegúrate que esta ruta es correcta
import { ProgramaDetalleComponent } from './programa-detalle/programa-detalle.component';
import { ProgramasFormComponent } from './programas-form/programas-form.component';

const routes: Routes = [
  {
    path: '',
    component: HomeProgramaComponent,
    children: [
      { path: 'lista', component: ProgramasComponent },
      { path: 'detalle/:id', component: ProgramaDetalleComponent },
      { path: 'nuevo', component: ProgramasFormComponent },
      { path: 'editar/:id', component: ProgramasFormComponent },
      { path: '', redirectTo: 'lista', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramasRoutingModule { }
