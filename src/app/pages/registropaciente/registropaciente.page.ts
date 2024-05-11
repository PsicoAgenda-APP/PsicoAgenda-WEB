import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registropaciente',
  templateUrl: './registropaciente.page.html',
  styleUrls: ['./registropaciente.page.scss'],
})
export class RegistropacientePage implements OnInit {
  userForm: FormGroup;
  showOptions: boolean = false;  // Añade esta propiedad para manejar el despliegue de opciones

  constructor(private router: Router) { // Router ya está inyectado aquí
    this.userForm = new FormGroup({
      Calle: new FormControl('', Validators.required),
      Numero: new FormControl('', Validators.required),
      IdComuna: new FormControl('', Validators.required),
      PrimerNombre: new FormControl('', Validators.required),
      SegundoNombre: new FormControl(''),
      ApellidoPaterno: new FormControl('', Validators.required),
      ApellidoMaterno: new FormControl('', Validators.required),
      Telefono: new FormControl('', Validators.required),
      FechaNacimiento: new FormControl('', Validators.required),
      CorreoElectronico: new FormControl('', [Validators.required, Validators.email]),
      Contrasena: new FormControl('', [Validators.required, Validators.minLength(6)]),
      Rut: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Formulario válido:', this.userForm.value);
      // Aquí puedes manejar la lógica para enviar datos o navegar
      // this.router.navigate(['/alguna-ruta']); // Navegar a otra ruta al enviar el formulario
    } else {
      console.log('Formulario no válido');
    }
  }

  // Métodos adicionales para el manejo de opciones y redirección
  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

  redirectTo(route: string) {
    this.router.navigate([route]);
  }
}