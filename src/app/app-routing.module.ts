import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PageNoFoundComponent} from './page-no-found/page-no-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: "full"},
  {path: '/home', component: HomeComponent},
  /*{path: 'home', loadChildren: () =>
      import('./home/home.module').then(m => m.HomeModule)}*/
  {path: '**', component: PageNoFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
