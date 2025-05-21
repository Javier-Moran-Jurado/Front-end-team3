import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeOvaComponent } from './home-ova.component';
import { RouterModule } from '@angular/router';
import {HomeOvaRoutingModule} from './home-ova-routing.module';

@NgModule({
  declarations: [HomeOvaComponent],
  imports: [
    CommonModule,
    RouterModule,
    HomeOvaRoutingModule// necesario si usas rutas
  ], // opcional, útil si vas a usar el componente en otro módulo
})
export class HomeOvaModule { }
