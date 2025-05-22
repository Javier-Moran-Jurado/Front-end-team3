import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import {provideHttpClient} from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  providers: [
    provideHttpClient()
  ]
})
export class LoginModule { }
