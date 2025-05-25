import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FullLayoutComponent} from './template/full-layout/full-layout.component';
import {HomeComponent} from './home/home.component';
import {HomeOvaComponent} from './home-ova/home-ova.component';
import {InformacionComponent} from './informacion/informacion.component';
import {PageNoFoundComponent} from './page-no-found/page-no-found.component';
import {EmptyLayoutComponent} from './template/empty-layout/empty-layout.component';
import {LoginComponent} from './login/login.component';

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
      { path: 'informacion', component: InformacionComponent },
      { path: '', component: PageNoFoundComponent},
      { path: '', redirectTo: '/facultad', pathMatch: 'full' },
      { path: 'facultad', loadChildren: () => import('./facultad/facultad.module').then(m => m.FacultadModule) }
      //{ path: '', redirectTo: '/home', pathMatch: 'full' }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
