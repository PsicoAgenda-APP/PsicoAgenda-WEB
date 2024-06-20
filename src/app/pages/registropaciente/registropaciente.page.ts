import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-registropaciente',
  templateUrl: './registropaciente.page.html',
  styleUrls: ['./registropaciente.page.scss'],
})
export class RegistropacientePage implements OnInit {
  showOptions: boolean = false;  // Añade esta propiedad para manejar el despliegue de opciones
  mdl_rut: string = '';
  mdl_calle: string = '';
  mdl_numero: number = 0;
  idComuna: number = 1;
  mdl_primerNombre: string = '';
  mdl_segundoNombre: string = '';
  mdl_apellidoPaterno: string = '';
  mdl_apellidoMaterno: string = '';
  mdl_telefono: string = '';
  mdl_fechaNacimiento: string = '';
  mdl_correo: string = '';
  mdl_contrasena: string = '';
  idTipoUsuario: number = 1;
  mdl_comuna: string = '';
  // Propiedades para las alertas
  isAlertOpen: boolean = false;
  isAlertOpen2: boolean = false;
  isAlertOpen3: boolean = false;
  alertButtons: string[] = ['OK'];
  



  constructor(private router: Router, private apiService: ApiService) { // Router ya está inyectado aquí
  }

  ngOnInit() {
  }

  register() {
    this.isAlertOpen = false;
    this.isAlertOpen3 = false;
    if (this.mdl_calle != '' && this.mdl_numero != 0 && this.mdl_rut != '' && this.mdl_comuna != '' 
      && this.mdl_primerNombre != '' && this.mdl_segundoNombre != '' && this.mdl_apellidoPaterno != '' 
      && this.mdl_apellidoMaterno != '' && this.mdl_telefono != '' && this.mdl_fechaNacimiento != '' && this.mdl_contrasena != '') {
      const transformarFecha = (fecha: string): string => fecha.split('-').reverse().join('-');
      const fechaTransformada = transformarFecha(this.mdl_fechaNacimiento);
      this.apiService.registrarPaciente(
        this.mdl_calle,
        this.mdl_numero,
        this.idComuna,
        this.mdl_primerNombre,
        this.mdl_segundoNombre,
        this.mdl_apellidoPaterno,
        this.mdl_apellidoMaterno,
        this.mdl_telefono,
        fechaTransformada,
        this.mdl_correo,
        this.mdl_contrasena,
        this.idTipoUsuario,
        this.mdl_rut
      ).subscribe(
        response => {
          console.log('Paciente registrado correctamente', response);
          this.sendEmail();
          this.isAlertOpen3 = true;
        },
        error => {
          console.error('Error al registrar paciente', error);
        }
      );
    } else {
      this.isAlertOpen = true;
    }

  }

  goHome() {
    let parametros: NavigationExtras = {
      replaceUrl: true
    }
    this.router.navigate(['home'], parametros);
  }


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

  sendEmail() {
    const subject = 'Bienvenido a PsicoAgenda APP';

    const text = 'Hola ' + this.mdl_primerNombre + ',' + '\n\nTe registrate correctamente en PsicoAgenda APP.' +
      '\n\nTu usuario es: ' + this.mdl_correo +
      '\n\nTe Saluda,\nEquipo de PsicoAgenda APP.';

    const html = `
              <p>Hola ${this.mdl_primerNombre},</p>
              <p>Te registrate correctamente en PsicoAgenda APP.</p>
              <p><strong>Psicologo: ${this.mdl_correo}</strong></p>
              <p>Te Saluda,</p>
              <p>Equipo de PsicoAgenda APP.</p>
          `;

    this.apiService.sendEmail(this.mdl_correo, subject, text, html).subscribe(
      response => {
        console.log('Email Enviado Correctamente', response);
      },
      error => {
        console.error('Error al enviar correo', error);
      }
    );
  }

}