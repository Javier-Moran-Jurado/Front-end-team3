import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullLayoutComponent } from './template/full-layout/full-layout.component';
import { EmptyLayoutComponent } from './template/empty-layout/empty-layout.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNoFoundComponent } from './page-no-found/page-no-found.component';
import {HomeOvaComponent} from './home-ova/home-ova.component';
import {InformacionComponent} from './informacion/informacion.component';
import {LibLagrangeComponent} from './librerias/analisis-numerico/lib-lagrange/lib-lagrange.component';
import {
  LibMinimoscuadradosComponent
} from './librerias/costos-presupuestos/lib-minimoscuadrados/lib-minimoscuadrados.component';
import { ProblemaFormComponent } from './librerias/web/lib-problema/problema/problema-form.component';
import { SolucionesComponent } from './librerias/web/lib-evaluador/soluciones/soluciones.component';
import {ProblemaDetalleComponent} from './librerias/web/lib-problema/problema-detalle/problema-detalle.component';
import {ProblemasComponent} from './librerias/web/lib-problema/problemas/problemas.component';
import {LibEvaluadorComponent} from './librerias/web/lib-evaluador/evaluador/lib-evaluador.component';

const routes: Routes = [

  { path: '',
    component: EmptyLayoutComponent,
    children: [
      {path: '', redirectTo: '/login', pathMatch: "full"},
      {path: 'login', component: LoginComponent }
    ]
  },
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'home-ova', component: HomeOvaComponent },
      { path: 'lib-lagrange', component: LibLagrangeComponent },
      { path: 'lib-minimoscuadrados', component: LibMinimoscuadradosComponent},
      { path: 'home-ova', component: HomeOvaComponent },
      { path: 'problema-form', component:  ProblemaFormComponent},
      { path: 'informacion', component: InformacionComponent },
      { path: '', component: PageNoFoundComponent},
      { path: '', redirectTo: '/facultad', pathMatch: 'full' },
      { path: 'facultad', loadChildren: () => import('./facultad/facultad.module').then(m => m.FacultadModule) },
      { path: 'problemas', component: ProblemasComponent },
      { path: 'problema/:id', component: ProblemaDetalleComponent },
      { path: 'usuario', loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule) },
      { path: 'soluciones', component: SolucionesComponent },
      { path: 'evaluar/:id', component: LibEvaluadorComponent}
    ]
  },
  { path: '', component: PageNoFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
