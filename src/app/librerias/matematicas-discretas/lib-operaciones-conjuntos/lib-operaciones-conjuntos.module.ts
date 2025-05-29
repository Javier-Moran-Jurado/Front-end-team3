import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LibOperacionesConjuntosRoutingModule } from './lib-operaciones-conjuntos-routing.module';
import { LibOperacionesConjuntosComponent } from './lib-operaciones-conjuntos.component';


@NgModule({
  declarations: [
    LibOperacionesConjuntosComponent
  ],
  imports: [
    CommonModule,
    LibOperacionesConjuntosRoutingModule,
    FormsModule
  ]
})
export class LibOperacionesConjuntosModule { }
