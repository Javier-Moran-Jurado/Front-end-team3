import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeOvaComponent } from './home-ova.component';
import { RouterModule } from '@angular/router';
import {HomeOvaRoutingModule} from './home-ova-routing.module';
import {provideHttpClient} from '@angular/common/http';

@NgModule({
  declarations: [HomeOvaComponent],
  imports: [
    CommonModule,
    RouterModule,
    HomeOvaRoutingModule// necesario si usas rutas
  ],
  providers:[
    provideHttpClient()
  ]// opcional, útil si vas a usar el componente en otro módulo
})
export class HomeOvaModule { }
