import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullLayoutComponent } from './template/full-layout/full-layout.component';
import { EmptyLayoutComponent } from './template/empty-layout/empty-layout.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNoFoundComponent } from './page-no-found/page-no-found.component';
import {HomeOvaComponent} from './home-ova/home-ova.component';
import {InformacionComponent} from './informacion/informacion.component';
import {OvaTemplateComponent} from './template/ova-template/ova-template.component';

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
      { path: 'informacion', component: InformacionComponent }

      //{ path: '', redirectTo: '/home', pathMatch: 'full' }
    ]
  },
  {
    path: '',
    component: OvaTemplateComponent,
    children: [
      { path: 'home-ova', component: HomeOvaComponent },
    ]
  },
  { path: '', component: PageNoFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
