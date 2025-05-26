import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibInversaRoutingModule } from './lib-inversa-routing.module';
import { LibInversaComponent } from './lib-inversa.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LibInversaComponent],
  imports: [
    CommonModule,
    LibInversaRoutingModule,
    HttpClientModule
  ]
})
export class LibInversaModule { }
