import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { PageNoFoundComponent } from './page-no-found/page-no-found.component';
import { OvasComponent } from './ova/ovas/ovas.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeOvaComponent } from './home-ova/home-ova.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap'; // 👈 importa aquí

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNoFoundComponent,
    OvasComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbAccordionModule // 👈 y agrégalo aquí
  ],
  exports: [RouterModule],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
