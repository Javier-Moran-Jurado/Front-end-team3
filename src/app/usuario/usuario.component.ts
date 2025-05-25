import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  imports: [
    ReactiveFormsModule
  ],
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarioForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.usuarioForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
      confirmarContrasena: ['']
    }, { validators: this.validarCoincidenciaContrasenas });
  }

  // Valida que las contraseñas coincidan
  validarCoincidenciaContrasenas(formGroup: FormGroup) {
    const password = formGroup.get('contrasena')?.value;
    const confirmPassword = formGroup.get('confirmarContrasena')?.value;
    return password === confirmPassword ? null : { noCoinciden: true };
  }

  // Se ejecuta al enviar el formulario
  onSubmit(): void {
    if (this.usuarioForm.valid) {
      console.log('Formulario enviado correctamente:', this.usuarioForm.value);
      alert('Usuario creado con éxito ✅');
      this.usuarioForm.reset();
    } else {
      this.usuarioForm.markAllAsTouched(); // Marca todos los campos para mostrar errores
    }
  }

}
