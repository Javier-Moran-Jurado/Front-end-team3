import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibMinimoscuadradosRoutingModule } from './lib-minimoscuadrados-routing.module';
import {provideHttpClient} from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LibMinimoscuadradosRoutingModule
  ],
  providers: [
    provideHttpClient()
  ]
})
export class LibMinimoscuadradosModule { }
