import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import {HttpClientModule, provideHttpClient} from '@angular/common/http';
import { PageNoFoundComponent } from './page-no-found/page-no-found.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FullLayoutComponent } from './template/full-layout/full-layout.component';
import { EmptyLayoutComponent } from './template/empty-layout/empty-layout.component';
import { LibMinimoscuadradosComponent } from './librerias/costos-presupuestos/lib-minimoscuadrados/lib-minimoscuadrados.component';
import {HomeOvaComponent} from './home-ova/home-ova.component';
import { InformacionComponent } from './informacion/informacion.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faYoutube, faLinkedin, faXTwitter, faTiktok, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UsuarioComponent } from './usuario/usuario.component';
import {LibLagrangeComponent} from './librerias/analisis-numerico/lib-lagrange/lib-lagrange.component';
import {OvaTemplateComponent} from './template/ova-template/ova-template.component';
import {AcordeonComponent} from './template/acordeon/acordeon.component';
import {RoundRobinComponent} from './librerias/sistemas-operativos/lib-round-robin/lib-round-robin.component';

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
    LibLagrangeComponent,
    LibMinimoscuadradosComponent,
    InformacionComponent,
    OvaTemplateComponent,
    AcordeonComponent,
    UsuarioComponent,
    RoundRobinComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FaIconComponent,
    FontAwesomeModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [RouterModule, HeaderComponent, FooterComponent, FooterComponent, FooterComponent],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faEnvelope,
      faYoutube,
      faLinkedin,
      faXTwitter,
      faTiktok,
      faInstagram,
      faFacebook
    );
  }
}
