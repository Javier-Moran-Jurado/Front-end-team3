import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/facultad', pathMatch: 'full' },
  { path: 'facultad', loadChildren: () => import('./facultad/facultad.module').then(m => m.FacultadModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
