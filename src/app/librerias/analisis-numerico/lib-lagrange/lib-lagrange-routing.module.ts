import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LibLagrangeComponent} from './lib-lagrange.component';

const routes: Routes = [
{path: '', component: LibLagrangeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibLagrangeRoutingModule { }
