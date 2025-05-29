import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LibCostosXpComponent } from './lib-costos-xp.component';

@NgModule({
  declarations: [LibCostosXpComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,

  ]
})
export class LibCostosXpModule {}
