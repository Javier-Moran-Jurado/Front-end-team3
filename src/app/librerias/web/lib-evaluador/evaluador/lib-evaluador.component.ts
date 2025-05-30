import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {NgIf} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Problema} from '../../lib-problema/model/problema';
import {ActivatedRoute, Router} from '@angular/router';
import {ProblemaService} from '../../lib-problema/service/problema.service';
import {SolucionService} from '../service/solucion.service';
import {EvaluadorDTO} from '../model/evaluadordto';
import Swal from 'sweetalert2';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-lib-evaluador',
  templateUrl: './lib-evaluador.component.html',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    FormsModule
  ],
  styleUrl: './lib-evaluador.component.css'
})
export class LibEvaluadorComponent implements OnInit, OnDestroy {
  private abortController = new AbortController();
  problema?: Problema;
  error: string = '';
  isSubmitting = false;

  @Input() evaluadordto: EvaluadorDTO = {
    content: '',
    inputs: [[]],
    idEstudiante: 0,
    idProblema: 0,
    outputs: [[]],
    problemName: '',
    timeLimit: 0
  };
  @Output() evaluadordtoChange = new EventEmitter<EvaluadorDTO>();
  constructor(
    private route: ActivatedRoute,
    private problemaService: ProblemaService,
    private solucionService: SolucionService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.problemaService.getProblema(id).subscribe(
      data => {
        this.problema = data.problema;
        if (this.problema) {
          this.processProblemData();
        }
      }
    );
  }

  ngOnDestroy() {
    this.abortController.abort(); // Cancela cualquier solicitud pendiente al salir
  }

  private processProblemData() {
    this.evaluadordto.outputs = this.problema!.outputs
      .split('\n\n')
      .map(group =>
        group.split('\n')
          .filter(line => line.trim() !== '')
      )
      .filter(group => group.length > 0);

    this.evaluadordto.inputs = this.problema!.inputs
      .split('\n\n')
      .map(group =>
        group.split('\n')
          .filter(line => line.trim() !== '')
      )
      .filter(group => group.length > 0);

    this.evaluadordto.idProblema = this.problema!.id;
    this.evaluadordto.problemName = this.formatClassName(this.problema!.nombre);
    this.evaluadordto.timeLimit = this.problema!.tiempo;
    this.evaluadordto.content = this.generateBaseCode(this.evaluadordto.problemName);
  }

  private generateBaseCode(problemName: string): string {
    return `
//El nombre de la clase debe ser el mismo de el problema con la primera letra mayuscula
public class ${problemName} {
    public static void main(String[] args) {
        // Tu código aquí
    }
}`;
  }

  private formatClassName(problemName: string): string {
    return problemName
      .replace(/[^a-zA-Z0-9]/g, ' ')
      .split(' ')
      .filter(word => word.length > 0)
      .map(word => word[0].toUpperCase() + word.substring(1).toLowerCase())
      .join('');
  }

  subir() {
    this.error = '';

    // Validación de contenido vacío
    if (!this.evaluadordto.content || this.evaluadordto.content.trim() === '') {
      this.showDiscreteNotification('Error',
        'Contenido vacío\nPor favor ingresa tu solución antes de subirla.',
        'error');
      return;
    }

    // Validación de código peligroso
    const dangerousPatterns = /(Runtime\.getRuntime\(\)|ProcessBuilder|File(InputStream|OutputStream|Writer|Reader)|exec\(|loadLibrary|native\s)/i;

    if (dangerousPatterns.test(this.evaluadordto.content)) {
      this.showDiscreteNotification('Error',
        'Código peligroso detectado\nTu solución contiene patrones de código no permitidos.',
        'error');
      return;
    }

    // Aquí iría la lógica para enviar la solución al backend
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Deseas enviar esta solución para evaluación?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, enviar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.isSubmitting = true;

        // SweetAlert principal (contiene el progreso y resultados)
        Swal.fire({
          title: 'Procesando solución',
          html: `
      <div id="progress-content" style="text-align: left; max-height: 300px; overflow-y: auto;">
        <p>Evaluando tu código...</p>
      </div>
    `,
          allowOutsideClick: false,
          showConfirmButton: true,
          confirmButtonText: 'Cancelar',
          willOpen: () => Swal.showLoading()
        }).then((result) => {
          if (result.isConfirmed) {
            this.abortController.abort();
          }
        });

        this.solucionService.evaluar(this.evaluadordto, this.abortController.signal).subscribe({
          next: (response) => {
            Swal.update({
              confirmButtonText: 'Cerrar',
              icon: 'success',
              allowOutsideClick: true
            });

            this.showDiscreteNotification('Éxito', 'La solución se evaluó correctamente', 'success');
            this.isSubmitting = false;
            this.router.navigate(['/soluciones']);
          },
          error: (err) => {
            this.showDiscreteNotification('Error', 'La solución no se evaluó correctamente', 'error');
          }
        });
      }
    });

  }

  private showDiscreteNotification(title: string, message: string, icon: 'success' | 'error' | 'info') {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 8000,  // Ajusta el tiempo si lo deseas
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });
    Toast.fire({ icon, title: `${title}: ${message}` });
  }

  handleTab(event: KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault(); // Evita que el foco se mueva fuera del textarea
      const textarea = event.target as HTMLTextAreaElement;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;

      this.evaluadordto.content =
        this.evaluadordto.content.substring(0, start) +
        '\t' +
        this.evaluadordto.content.substring(end);

      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 1;
      });
    }
  }
}
