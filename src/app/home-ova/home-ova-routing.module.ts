import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeOvaComponent } from './home-ova.component';

const routes: Routes = [
  { path: '', component: HomeOvaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeOvaRoutingModule { }
