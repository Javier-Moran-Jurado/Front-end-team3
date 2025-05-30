import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LibLagrangeRoutingModule } from './lib-lagrange-routing.module';
import {provideHttpClient} from '@angular/common/http';
import {LibLagrangeComponent} from './lib-lagrange.component';


@NgModule({
  declarations: [
    LibLagrangeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LibLagrangeRoutingModule

  ],
  providers: [
     provideHttpClient()
  ]
})
export class LibLagrangeModule { }
