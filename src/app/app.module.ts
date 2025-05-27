import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {Router, RouterModule} from '@angular/router';
import {HttpClientModule, provideHttpClient} from '@angular/common/http';
import { PageNoFoundComponent } from './page-no-found/page-no-found.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import {LoginComponent} from './login/login.component';
import { FullLayoutComponent } from './template/full-layout/full-layout.component';
import { EmptyLayoutComponent } from './template/empty-layout/empty-layout.component';
import {HomeOvaComponent} from './home-ova/home-ova.component';
import { LibEscitalaComponent } from './librerias/matematicas-discretas/lib-escitala/lib-escitala.component';
import {FormsModule} from '@angular/forms';
import { LibInversaComponent } from './librerias/matematicas-discretas/lib-inversa/lib-inversa.component';
import {LibInversaModule} from './librerias/matematicas-discretas/lib-inversa/lib-inversa.module';
import { LibSoprioridadesComponent } from './librerias/sistemas-operativos/lib-soprioridades/lib-soprioridades.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeOvaComponent,
    FullLayoutComponent,
    EmptyLayoutComponent,
    PageNoFoundComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LibEscitalaComponent,
    LibInversaComponent,
    LibSoprioridadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    LibInversaModule
  ],
  exports: [RouterModule],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
