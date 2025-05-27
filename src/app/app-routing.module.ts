import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullLayoutComponent } from './template/full-layout/full-layout.component';
import { EmptyLayoutComponent } from './template/empty-layout/empty-layout.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNoFoundComponent } from './page-no-found/page-no-found.component';
import {HomeOvaComponent} from './home-ova/home-ova.component';
import {OvaTemplateComponent} from './template/ova-template/ova-template.component';
import {InformacionComponent} from './informacion/informacion.component';
import {LibLagrangeComponent} from './librerias/analisis-numerico/lib-lagrange/lib-lagrange.component';
import { LibRoundRobinComponent } from './librerias/sistemas-operativos/lib-round-robin/lib-round-robin.component';
import {
  LibMinimoscuadradosComponent
} from './librerias/costos-presupuestos/lib-minimoscuadrados/lib-minimoscuadrados.component';

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
      { path: 'lib-round-robin', component : LibRoundRobinComponent },
      { path: 'lib-lagrange', component: LibLagrangeComponent },
      { path: 'lib-minimoscuadrados', component: LibMinimoscuadradosComponent},
      { path: 'home-ova', component: HomeOvaComponent },
      { path: 'informacion', component: InformacionComponent },
      { path: '', component: PageNoFoundComponent},
      { path: '', redirectTo: '/facultad', pathMatch: 'full' },
      { path: 'facultad', loadChildren: () => import('./facultad/facultad.module').then(m => m.FacultadModule) },
      { path: 'informacion', component: InformacionComponent },

      //{ path: '', redirectTo: '/home', pathMatch: 'full' }
      { path: 'usuario', loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule) }

    ]
  },
  {
    path: '',
    component: OvaTemplateComponent,
    children: [
      { path: 'home-ova', component: HomeOvaComponent },
      { path: 'lib-round-robin', component : LibLagrangeComponent },
      { path: 'lib-lagrange', component: LibLagrangeComponent },
      { path: 'lib-newton', component: LibLagrangeComponent }
    ]
  },
  { path: '', component: PageNoFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
