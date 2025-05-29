import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lib-compiler',
  templateUrl: './lib-compiler.component.html',
  styleUrls: ['./lib-compiler.component.css']
})
export class LibCompilerComponent {
  selectedFile: File | null = null;
  resultado: string = '';
  codigo: string = '';

  constructor(private http: HttpClient) {}

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (!file) return; // Si no hay archivo, salimos

    this.selectedFile = file;

    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.codigo = e.target.result;
    };
    reader.readAsText(file); // ✅ file es de tipo File (no File | null)
  }

  ejecutar(): void {
    if (!this.selectedFile) {
      alert('Por favor selecciona un archivo .c');
      return;
    }

    const url = 'http://api.chacaleo.joptionpane.software/api/art/code';
    this.http.post(url, this.selectedFile, { responseType: 'text' }).subscribe({
      next: (res: string) => {
        this.resultado = res;
      },
      error: (err) => {
        this.resultado = 'Error al ejecutar el código';
        console.error(err);
      }
    });
  }
}
