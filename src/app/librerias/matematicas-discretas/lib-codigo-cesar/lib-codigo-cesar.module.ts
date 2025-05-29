import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LibCodigoCesarRoutingModule } from './lib-codigo-cesar-routing.module';
import { provideHttpClient } from '@angular/common/http';
import { LibCodigoCesarComponent } from './lib-codigo-cesar.component';

// Importaciones de Font Awesome
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faLock,
  faLockOpen,
  faExclamationCircle
} from '@fortawesome/free-solid-svg-icons';
import { faCopy } from '@fortawesome/free-regular-svg-icons';

@NgModule({
  declarations: [
    LibCodigoCesarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LibCodigoCesarRoutingModule,
    FontAwesomeModule // Añade FontAwesomeModule aquí
  ],
  providers: [
    provideHttpClient()
  ]
})
export class LibCodigoCesarModule {
  constructor(library: FaIconLibrary) {
    // Añade los iconos que necesites en tu componente
    library.addIcons(
      faLock,        // Para el botón de codificar
      faLockOpen,    // Para el botón de decodificar
      faExclamationCircle, // Para mensajes de error
      faCopy         // Para el botón de copiar
    );
  }
}
