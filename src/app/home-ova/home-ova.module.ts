import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeOvaComponent } from './home-ova.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeOvaComponent],
  imports: [
    CommonModule,
    RouterModule // necesario si usas rutas
  ],
  exports: [HomeOvaComponent] // opcional, útil si vas a usar el componente en otro módulo
})
export class HomeOvaModule { }
