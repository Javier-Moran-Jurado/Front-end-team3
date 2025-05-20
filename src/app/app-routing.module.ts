import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PageNoFoundComponent} from './page-no-found/page-no-found.component';
import {OvasComponent} from './ova/ovas/ovas.component';
import {OvaDetalleComponent} from './ova/ova-detalle/ova-detalle.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: "full"},
  {path: 'home', component: HomeComponent},
  { path: 'ova', component: OvasComponent },
  { path: 'ova/detalle/:id', component: OvaDetalleComponent },
  /*{path: 'home', loadChildren: () =>
      import('./home/home.module').then(m => m.HomeModule)}*/
  {path: '**', component: PageNoFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
