import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registropsico',
  templateUrl: './registropsico.page.html',
  styleUrls: ['./registropsico.page.scss'],
})
export class RegistropsicoPage implements OnInit {
  userForm: FormGroup;  // Define la propiedad userForm como FormGroup

  constructor() {
    // Inicializa el formulario en el constructor
    this.userForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  ngOnInit() {
  }

  // Método para manejar el envío del formulario
  onSubmit() {
    if (this.userForm.valid) {
      console.log('Formulario enviado:', this.userForm.value);
      // Aquí podrías añadir la lógica para enviar los datos a un backend
    } else {
      console.log('Formulario no válido');
    }
  }
}
