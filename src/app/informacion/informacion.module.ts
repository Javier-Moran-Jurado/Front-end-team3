import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformacionRoutingModule } from './informacion-routing.module';
import {provideHttpClient} from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InformacionRoutingModule
  ],
  providers: [
    provideHttpClient()
  ]
})
export class InformacionModule { }
