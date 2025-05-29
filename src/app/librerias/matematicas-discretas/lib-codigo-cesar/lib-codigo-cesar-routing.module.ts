import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LibCodigoCesarComponent} from './lib-codigo-cesar.component';

const routes: Routes = [
{path: '', component: LibCodigoCesarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibCodigoCesarRoutingModule { }
