import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibCostos5Component } from './lib-costos5.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LibCostos5Component],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],

  exports: [LibCostos5Component]
})
export class LibCostos5Module { }
