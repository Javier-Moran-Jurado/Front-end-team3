import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LibCompilerRoutingModule } from './lib-compiler-routing.module';
import { LibCompilerComponent } from './lib-compiler.component';

@NgModule({
  declarations: [LibCompilerComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    LibCompilerRoutingModule
  ]
})
export class LibCompilerModule {}
