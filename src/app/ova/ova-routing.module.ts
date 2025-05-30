import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeOvaComponent } from '../home-ova/home-ova.component';
import { LibLagrangeComponent } from '../librerias/analisis-numerico/lib-lagrange/lib-lagrange.component';

const routes: Routes = [
  { path: 'home-ova', component: HomeOvaComponent },
  { path: 'lib-lagrange', component: LibLagrangeComponent },
  { path: 'lib-newton', component: LibLagrangeComponent },
  { path: '', redirectTo: 'home-ova', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OvaRoutingModule { }
