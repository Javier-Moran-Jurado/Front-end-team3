import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramasRoutingModule } from './programas-routing.module';
import { ProgramaDetalleComponent } from './programa-detalle/programa-detalle.component';
import { ProgramasComponent } from './programas/programas.component';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import { ProgramasFormComponent } from './programas-form/programas-form.component';
import {provideHttpClient} from '@angular/common/http';


@NgModule({
  declarations: [
    ProgramasComponent
  ],
  imports: [
    CommonModule,
    ProgramasRoutingModule,
    FaIconComponent,
    ProgramaDetalleComponent,
    ProgramasFormComponent
  ],
  providers: [
    provideHttpClient()
  ]
})
export class ProgramasModule { }
