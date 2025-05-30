import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
  ReactiveFormsModule
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-problema-form',
  templateUrl: './problema-form.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgClass,
    NgIf
  ],
  styleUrls: ['./problema-form.component.css']
})
export class ProblemaFormComponent implements OnInit {
  public problemaForm!: FormGroup;
  submitted = false;
  loading = false;
  apiUrl = 'http://api.mewings.joptionpane.software/api/ovaweb-service/problemas';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.problemaForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', [Validators.required, Validators.maxLength(5000)]],
      inputs: ['', [Validators.maxLength(15000)]],
      outputs: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(15000)
      ]],
      tiempo: ['', [Validators.required, Validators.min(1)]]
    }, { validators: this.validateInputsOutputsMatch() });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.problemaForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.problemaForm.invalid) {
      // Mostrar errores de validación con SweetAlert2
      if (this.problemaForm.errors?.['inputsOutputsMismatch']) {
        Swal.fire({
          icon: 'error',
          title: 'Error de validación',
          text: 'El número de entradas (inputs) debe coincidir con el número de salidas (outputs)',
          confirmButtonColor: '#3085d6'
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error de validación',
          text: 'Por favor complete todos los campos requeridos correctamente',
          confirmButtonColor: '#3085d6'
        });
      }
      return;
    }

    this.loading = true;
    const problemaData = this.problemaForm.value;

    this.http.post(this.apiUrl, problemaData).subscribe({
      next: (response: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'Problema creado correctamente',
          showConfirmButton: false,
          timer: 2000
        }).then(() => {
          this.router.navigate(['/problemas']);
        });
      },
      error: (error) => {
        this.loading = false;
        console.error('Error:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.error?.message || 'Error al crear el problema',
          confirmButtonColor: '#3085d6'
        });
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  validateInputsOutputsMatch(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const formGroup = control as FormGroup;

      const inputs = formGroup.get('inputs')?.value || '';
      const outputs = formGroup.get('outputs')?.value || '';

      // Si no hay outputs, dejamos que el validador required se encargue
      if (!outputs.trim()) return null;

      const outputsArray = outputs.split('\n\n')
        .map((item: string) => item.trim())
        .filter((item: string) => item.length > 0);

      // Si no hay inputs pero hay más de un output, es error
      if (!inputs.trim() && outputsArray.length > 1) {
        return { inputsOutputsMismatch: true };
      }

      const inputsArray = inputs.split('\n\n')
        .map((item: string) => item.trim())
        .filter((item: string) => item.length > 0);

      if (inputsArray.length > 0 && outputsArray.length > 0 && inputsArray.length !== outputsArray.length) {
        return { inputsOutputsMismatch: true };
      }

      return null;
    };
  }
}
