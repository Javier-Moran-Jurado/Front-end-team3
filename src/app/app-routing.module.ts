import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullLayoutComponent } from './template/full-layout/full-layout.component';
import { HomeComponent } from './home/home.component';
import {HomeOvaComponent} from './home-ova/home-ova.component';
import {InformacionComponent} from './informacion/informacion.component';
import {OvaTemplateComponent} from './template/ova-template/ova-template.component';
import {LibLagrangeComponent} from './librerias/analisis-numerico/lib-lagrange/lib-lagrange.component';
import { ProblemaFormComponent } from './librerias/web/lib-problema/problema/problema-form.component';
import { SolucionesComponent } from './librerias/web/lib-evaluador/soluciones/soluciones.component';
import {ProblemaDetalleComponent} from './librerias/web/lib-problema/problema-detalle/problema-detalle.component';
import {ProblemasComponent} from './librerias/web/lib-problema/problemas/problemas.component';
import {LibEvaluadorComponent} from './librerias/web/lib-evaluador/evaluador/lib-evaluador.component';
import {LibMinimoscuadradosComponent} from './librerias/costos-presupuestos/lib-minimoscuadrados/lib-minimoscuadrados.component';
import {OvasComponent} from './ova/ovas/ovas.component';
import {PageNoFoundComponent} from './page-no-found/page-no-found.component';
import {EmptyLayoutComponent} from './template/empty-layout/empty-layout.component';
import {LoginComponent} from './login/login.component';
import {LibCodigoCesarComponent} from './librerias/matematicas-discretas/lib-codigo-cesar/lib-codigo-cesar.component';
import {RoundRobinComponent} from './librerias/sistemas-operativos/lib-round-robin/lib-round-robin.component';

const routes: Routes = [
  { path: '',
    component: EmptyLayoutComponent,
    children: [
      {path: '', redirectTo: '/login', pathMatch: "full"},
      {path: 'login', component: LoginComponent },
      {path: 'ova', component: OvasComponent }
    ]
  },
  {
    path: '',
    component: OvaTemplateComponent,  // MOVER ESTE BLOQUE ARRIBA DE FullLayoutComponent
    children: [
      { path: 'home-ova', component: HomeOvaComponent },
      { path: 'lib-lagrange', component: LibLagrangeComponent },
      { path: 'lib-codigo-cesar', component: LibCodigoCesarComponent},
      { path: 'lib-newton', component: LibLagrangeComponent },
      { path: 'lib-round-robin', component: RoundRobinComponent },
      { path: 'lib-minimoscuadrados', component: LibMinimoscuadradosComponent},
      { path: '', component: PageNoFoundComponent},
      //{ path: '', redirectTo: '/home', pathMatch: 'full' }
      { path: 'lib-lagrange', component: LibLagrangeComponent },
      { path: 'problemas', component: ProblemasComponent },
      { path: 'problema/:id', component: ProblemaDetalleComponent },
      { path: 'usuario', loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule) },
      { path: 'soluciones', component: SolucionesComponent },
      { path: 'evaluar/:id', component: LibEvaluadorComponent},
      { path: 'problema-form', component: ProblemaFormComponent }
    ]
  },
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'informacion', component: InformacionComponent},
      {path: '', component: PageNoFoundComponent},
      {path: '', redirectTo: '/facultad', pathMatch: 'full'},
      {path: 'facultad', loadChildren: () => import('./facultad/facultad.module').then(m => m.FacultadModule)},
      //{ path: '', redirectTo: '/home', pathMatch: 'full' }
      {path: 'usuario', loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule)},
      {path: 'programas', loadChildren: () => import('./programas/programas.module').then(m => m.ProgramasModule)},
      { path: '', redirectTo: '/programas', pathMatch: 'full' },
      { path: 'cursos', loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule) }
    ]
  },
  {path:'**', component: PageNoFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
