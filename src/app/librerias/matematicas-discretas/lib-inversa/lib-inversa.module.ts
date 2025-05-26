import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibInversaRoutingModule } from './lib-inversa-routing.module';
import { provideHttpClient } from '@angular/common/http';


@NgModule({
  declarations: [], // Intencionalmente vacío (igual que LibEscitala)
  imports: [
    CommonModule,
    LibInversaRoutingModule
  ],
  providers: [
    provideHttpClient() // Provee HttpClient igual que LibEscitala
  ]
})
export class LibInversaModule { }
