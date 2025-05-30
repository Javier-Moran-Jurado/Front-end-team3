import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({

  selector: 'app-lib-codigo-cesar',
  templateUrl: './lib-codigo-cesar.component.html',
  styleUrls: ['./lib-codigo-cesar.component.css']
})
export class LibCodigoCesarComponent {
  mensaje: string = '';
  codigo: number = 0;
  resultado: string = '';
  error: string = '';
  apiUrl: string = 'http://api.mewings.joptionpane.software/api/codificador-service';

  constructor(private http: HttpClient) {}

  //Esto es un componente de Angular que implementa la codificación
  // y decodificación de mensajes usando el cifrado César.
  // El usuario puede ingresar un mensaje y un código de desplazamiento,
  // y el componente enviará una solicitud a un servicio API para codificar o decodificar el mensaje.
  // El resultado se mostrará en la interfaz de usuario y se podrá copiar al portapapeles.
  codificar(): void {
    if (!this.mensaje || this.codigo === 0) {
      this.error = 'Ingrese un mensaje y un código válido.';
      return;
    }
    this.error = '';
    // Construye la URL para la solicitud de codificación
    // y realiza la solicitud HTTP GET al servicio API.
    const url = `${this.apiUrl}/codificar/${this.mensaje}/${this.codigo}`;
    this.http.get(url, { responseType: 'text' }).subscribe({
      next: res => this.resultado = res,
      error: err => {
        console.error(err);
        this.error = 'Ocurrió un error al procesar la solicitud.';
      }
    });
  }

  copiarResultado() {
    navigator.clipboard.writeText(this.resultado).then(() => {
      //aqui podrías mostrar un mensaje de éxito si lo deseas
      // this.resultado = 'Resultado copiado al portapapeles';
    });
  }

  decodificar(): void {
    if (!this.mensaje || this.codigo === 0) {
      this.error = 'Ingrese un mensaje y un código válido.';
      return;
    }
    // Resetea el mensaje de error antes de realizar la solicitud
    this.error = '';
    const url = `${this.apiUrl}/decodificar/${this.mensaje}/${this.codigo}`;
    this.http.get(url, { responseType: 'text' }).subscribe({
      next: res => this.resultado = res,
      error: err => {
        console.error(err);
        this.error = 'Ocurrió un error al procesar la solicitud.';
      }
    });
  }
}
