import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibInversaRoutingModule } from './lib-inversa-routing.module';
import { provideHttpClient } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LibInversaRoutingModule
  ],
  providers: [
    provideHttpClient()
  ]
})
export class LibInversaModule { }
