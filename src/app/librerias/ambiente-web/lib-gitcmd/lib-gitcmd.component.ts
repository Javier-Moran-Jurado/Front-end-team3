import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lib-gitcmd',
  templateUrl: './lib-gitcmd.component.html',
  styleUrls: ['./lib-gitcmd.component.css']
})
export class LibGitcmdComponent {
  comando: string = '';
  resultado: string = '';

  private readonly URL = 'http://api.chacaleo.joptionpane.software/api/libOvaWeb/ejecutar-comando';

  constructor(private http: HttpClient) {}

  ejecutarComando() {
    if (this.comando.trim()) {
      this.http.post<any>(this.URL, { comando: this.comando }).subscribe({
        next: (res) => {
          this.resultado = res.resultado || 'No se recibió salida.';
        },
        error: () => {
          this.resultado = 'Error al ejecutar el comando.';
        }
      });
    }
  }
}
