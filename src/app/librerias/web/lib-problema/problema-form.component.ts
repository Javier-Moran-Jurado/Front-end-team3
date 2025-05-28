import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface Problema {
  nombre: string;
  descripcion: string;
  inputs: string;
  outputs: string;
  tiempo: number;
}

@Component({
  selector: 'app-problema-form',
  templateUrl: './problema-form.component.html',
  styleUrls: ['./problema-form.component.css']
})
export class ProblemaFormComponent implements OnInit {
  public problemaForm!: FormGroup;
  submitted = false;
  loading = false;
  apiUrl = 'http://tu-api-url.com/api/problemas';
  showSuccessAlert = false;
  showErrorAlert = false;
  errorMessage = '';

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

  // Cambiado para usar tipo explícito
  get f(): { [key: string]: AbstractControl } {
    return this.problemaForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    this.showSuccessAlert = false;
    this.showErrorAlert = false;

    if (this.problemaForm.invalid) {
      return;
    }

    this.loading = true;
    const problemaData = this.problemaForm.value;

    this.http.post(this.apiUrl, problemaData).subscribe({
      next: (response: any) => {
        this.showSuccessAlert = true;
        setTimeout(() => {
          this.router.navigate(['/problemas']);
        }, 2000);
      },
      error: (error) => {
        this.loading = false;
        console.error('Error:', error);
        this.errorMessage = error.error?.message || 'Error al crear el problema';
        this.showErrorAlert = true;
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

      const outputsArray = outputs.split('\n\n')
        .map((item: string) => item.trim())
        .filter((item: string) => item.length > 0);

      if (outputsArray.length <= 1) return null;

      const inputsArray = inputs.split('\n\n')
        .map((item: string) => item.trim())
        .filter((item: string) => item.length > 0);

      return inputsArray.length === outputsArray.length
        ? null
        : { inputsOutputsMismatch: true };
    };
  }

  closeAlert(): void {
    this.showSuccessAlert = false;
    this.showErrorAlert = false;
  }
}
