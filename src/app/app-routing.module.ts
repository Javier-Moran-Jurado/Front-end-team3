import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PageNoFoundComponent} from './page-no-found/page-no-found.component';
import {OvasComponent} from './ova/ovas/ovas.component';
import {OvaDetalleComponent} from './ova/ova-detalle/ova-detalle.component';
import {HomeOvaComponent} from './home-ova/home-ova.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: "full"},
  {path: 'home', component: HomeComponent},
  { path: 'home-ova', component: HomeOvaComponent },
  { path: 'ova/detalle/:id', component: OvaDetalleComponent },
  /*{path: 'home', loadChildren: () =>
      import('./home/home.module').then(m => m.HomeModule)}*/
  {path: '**', component: PageNoFoundComponent},
  {
    path: 'home-ova',
    loadChildren: () =>
      import('./home-ova/home-ova.module').then((m) => m.HomeOvaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
