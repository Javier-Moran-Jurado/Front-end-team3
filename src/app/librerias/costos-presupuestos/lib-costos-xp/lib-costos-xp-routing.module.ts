import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibCostosXpComponent } from './lib-costos-xp.component';

const routes: Routes = [
  {
    path: '',
    component: LibCostosXpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibCostosXpRoutingModule {}
