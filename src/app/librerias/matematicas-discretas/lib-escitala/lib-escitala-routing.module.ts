import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LibEscitalaComponent} from './lib-escitala.component';

const routes: Routes = [
  {path: '',component:LibEscitalaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibEscitalaRoutingModule { }
