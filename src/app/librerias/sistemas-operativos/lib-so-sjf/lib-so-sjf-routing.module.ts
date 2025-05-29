import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LibSoSJComponent} from './lib-so-sjf.component';

const routes: Routes = [
  {path: '',component:LibSoSJComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibSoSjfRoutingModule { }
