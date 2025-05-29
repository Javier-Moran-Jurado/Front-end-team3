import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibCompilerComponent } from './lib-compiler.component';

const routes: Routes = [
  { path: '', component: LibCompilerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibCompilerRoutingModule {}
