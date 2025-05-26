import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacultadRoutingModule } from './facultad-routing.module';
import { FacultadDetalleComponent } from './facultad-detalle/facultad-detalle.component';
import { FacultadesComponent } from './facultades/facultades.component';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    FacultadDetalleComponent,
    FacultadesComponent
  ],
  imports: [
    CommonModule,
    FacultadRoutingModule,
    FaIconComponent
  ]
})
export class FacultadModule { }
