import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullLayoutComponent } from './template/full-layout/full-layout.component';
import { EmptyLayoutComponent } from './template/empty-layout/empty-layout.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNoFoundComponent } from './page-no-found/page-no-found.component';
import {HomeOvaComponent} from './home-ova/home-ova.component';
import {LibEscitalaComponent} from './librerias/matematicas-discretas/lib-escitala/lib-escitala.component';
import {LibInversaComponent} from './librerias/matematicas-discretas/lib-inversa/lib-inversa.component';
import {
  LibSoprioridadesComponent
} from './librerias/sistemas-operativos/lib-soprioridades/lib-soprioridades.component';

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
      { path: 'lib-escitala', component:LibEscitalaComponent},
      { path: 'lib-inversa', component: LibInversaComponent},
      { path: 'lib-soprioridades', component: LibSoprioridadesComponent}
      //{ path: '', redirectTo: '/home', pathMatch: 'full' }
    ]
  },
  { path: '', component: PageNoFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
