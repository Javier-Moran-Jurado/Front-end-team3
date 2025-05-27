import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OvaRoutingModule } from './ova-routing.module';
import { OvaDetalleComponent } from './ova-detalle/ova-detalle.component';
import { OvasComponent } from './ovas/ovas.component';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    OvaDetalleComponent,
    OvasComponent
  ],
  imports: [
    CommonModule,
    OvaRoutingModule,
    FaIconComponent
  ]
})
export class OvaModule { }
