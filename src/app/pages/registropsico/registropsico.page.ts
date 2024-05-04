import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registropsico',
  templateUrl: './registropsico.page.html',
  styleUrls: ['./registropsico.page.scss'],
})
export class RegistropsicoPage implements OnInit {
  userForm: FormGroup;

  constructor() {  // Eliminada la inyección de HttpClient
    this.userForm = new FormGroup({
      Calle: new FormControl('', Validators.required),
      Numero: new FormControl('', Validators.required),
      IdComuna: new FormControl('', Validators.required),
      PrimerNombre: new FormControl('', Validators.required),
      SegundoNombre: new FormControl(''),  // Si es opcional, puede no necesitar validadores
      ApellidoPaterno: new FormControl('', Validators.required),
      ApellidoMaterno: new FormControl('', Validators.required),
      Telefono: new FormControl('', Validators.required),
      FechaNacimiento: new FormControl('', Validators.required),
      CorreoElectronico: new FormControl('', [Validators.required, Validators.email]),
      Contrasena: new FormControl('', [Validators.required, Validators.minLength(6)]),
      Rut: new FormControl('', Validators.required),
      ValorSesion: new FormControl('', Validators.required),
      IdEspecialidad: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Formulario válido:', this.userForm.value);
      // Aquí puedes manejar el formulario, como mostrar un mensaje, limpiar el formulario, etc.
    } else {
      console.log('Formulario no válido');
    }
  }
}
