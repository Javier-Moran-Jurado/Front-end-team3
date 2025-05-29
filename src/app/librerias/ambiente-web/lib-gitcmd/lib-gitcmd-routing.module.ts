import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LibGitcmdComponent} from "./lib-gitcmd.component";

const routes: Routes = [
  {path:'', component:LibGitcmdComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibGitcmdRoutingModule { }
