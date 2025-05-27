import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LibRoundRobinRoutingModule } from './lib-round-robin-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LibRoundRobinComponent } from './lib-round-robin.component';

@NgModule({
  declarations: [
    LibRoundRobinComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    LibRoundRobinRoutingModule
  ]
})
export class LibRoundRobinModule { }
