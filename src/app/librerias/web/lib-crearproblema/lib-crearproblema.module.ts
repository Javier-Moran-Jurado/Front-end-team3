import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibCrearproblemaRoutingModule} from './lib-crearproblema-routing.module';
import {LibCrearproblemaComponent} from './lib-crearproblema.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    LibCrearproblemaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    LibCrearproblemaRoutingModule
  ]
})
export class LibCrearproblemaModule { }
