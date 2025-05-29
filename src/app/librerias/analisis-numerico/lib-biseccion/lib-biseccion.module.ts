import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LibBiseccionRoutingModule } from './lib-biseccion-routing.module';
import { LibBiseccionComponent } from './lib-biseccion.component';


@NgModule({
  declarations: [
    LibBiseccionComponent
  ],
  imports: [
    CommonModule,
    LibBiseccionRoutingModule,
    FormsModule
  ]
})
export class LibBiseccionModule { }
