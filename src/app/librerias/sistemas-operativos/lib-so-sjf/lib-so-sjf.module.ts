import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibSoSjfRoutingModule } from './lib-so-sjf-routing.module';
import {provideHttpClient} from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LibSoSjfRoutingModule
  ],
  providers:[
    provideHttpClient()
  ]
})
export class LibSoSjfModule {

}
