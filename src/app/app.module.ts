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
import { LibLagrangeComponent } from './librerias/analisis-numerico/lib-lagrange/lib-lagrange.component';
import { LibRoundRobinComponent } from './librerias/sistemas-operativos/lib-round-robin/lib-round-robin.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LibMinimoscuadradosComponent } from './librerias/costos-presupuestos/lib-minimoscuadrados/lib-minimoscuadrados.component';
import {FaIconComponent, FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faInstagram, faLinkedin, faTiktok, faXTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';

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
    LibRoundRobinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FaIconComponent,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    FaIconComponent,
    FontAwesomeModule
  ],
  exports: [RouterModule, HeaderComponent, FooterComponent],
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
