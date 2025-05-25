import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibEscitalaRoutingModule } from './lib-escitala-routing.module';
import {provideHttpClient} from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LibEscitalaRoutingModule
  ],
  providers:[
    provideHttpClient()
  ]
})
export class LibEscitalaModule {

}
