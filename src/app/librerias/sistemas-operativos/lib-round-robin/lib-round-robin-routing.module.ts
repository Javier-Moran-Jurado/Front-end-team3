import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LibRoundRobinComponent} from './lib-round-robin.component';

const routes: Routes = [
{path: '', component: LibRoundRobinComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibRoundRobinRoutingModule { }
