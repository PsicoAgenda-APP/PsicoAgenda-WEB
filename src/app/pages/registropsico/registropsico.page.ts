import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-registropsico',
  templateUrl: './registropsico.page.html',
  styleUrls: ['./registropsico.page.scss'],
})
export class RegistropsicoPage implements OnInit {
  //userForm: FormGroup;
  showOptions: boolean = false;  // Añade esta propiedad para manejar el despliegue de opciones
  mdl_rut: string = '';
  rut: string = '';
  isAlertOpen = false;
  isAlertOpen2 = false;
  alertButtons = ['OK'];
  lista_respuesta: any[] = [];
  rutValido = false;
  mdl_nombre: string = '';
  mdl_nombre2: string = '';
  mdl_apellido: string = '';
  mdl_apellido2: string = '';
  nombre_completo: string = '';

  constructor(private router: Router, private apiService: ApiService) { // Router ya está inyectado aquí
    /*this.userForm = new FormGroup({
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
      ValorSesion: new FormControl('', Validators.required),
      IdEspecialidad: new FormControl('', Validators.required)
    });*/
  }

  ngOnInit() {}

  async validarPrestador() {
    this.isAlertOpen2 = false;
    this.isAlertOpen = false;
    this.lista_respuesta = [];
    this.rutValido = false;
    if (this.mdl_rut != '') {
      console.log('Validando prestador con rut:', this.mdl_rut);
      try {
        let data = this.apiService.validarPrestadores(this.mdl_rut)
        let respuesta = await lastValueFrom(data);
        console.log('Respuesta de la API:', respuesta);
        let jsonTexto = JSON.stringify(respuesta);
        let json = JSON.parse(jsonTexto);
        for (let x = 0; x < json.length; x++) {
          this.lista_respuesta.push(json[x]);
          console.log('Lista de respuesta:', this.lista_respuesta);
          this.rut = this.lista_respuesta[x].rut.toString() + '-' + this.lista_respuesta[x].dv;
          console.log('Rut validado:', this.rut);
          if (this.mdl_rut == this.rut) {
            this.rutValido = true;
            this.nombre_completo = this.lista_respuesta[x].nombres
            let nombres_separados = this.nombre_completo.split(" ");
            this.mdl_nombre = nombres_separados[0]
            this.mdl_nombre2 = nombres_separados[1]
            this.mdl_apellido = this.lista_respuesta[x].apellido_paterno
            this.mdl_apellido2 = this.lista_respuesta[x].apellido_materno
            console.log('Rut válido:', this.mdl_rut);
          } 
        }
      } catch (error) {
        console.error('Error al validar el prestador:', error);
        this.isAlertOpen2 = true;
      }
    } else {
      this.isAlertOpen = true;
    }
  }

  /*onSubmit() {
    if (this.userForm.valid) {
      console.log('Formulario válido:', this.userForm.value);
      // Aquí puedes manejar la lógica para enviar datos o navegar
      // this.router.navigate(['/alguna-ruta']); // Navegar a otra ruta al enviar el formulario
    } else {
      console.log('Formulario no válido');
    }
  }*/

  // Métodos adicionales para el manejo de opciones y redirección
  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

  redirectTo(route: string) {
    this.router.navigate([route]);
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

}
