import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-soportepaciente',
  templateUrl: './soportepaciente.page.html',
  styleUrls: ['./soportepaciente.page.scss'],
})
export class SoportepacientePage implements OnInit {

  login: boolean = false;
  idTipo: number = 0;
  idPaciente: number = 0;
  correo: string = '';
  idUsuario: number = 0;
  idPersona: number = 0;
  mdl_opcion: string = '';
  formReagendar: boolean = false;
  botonReagendar: boolean = false;
  formCancelar: boolean = false;
  botonCancelar: boolean = false;
  formConsulta: boolean = false;
  botonConsulta: boolean = false;
  lista_respuesta: any = [];
  lista_citas: any = [];
  boton: boolean = false;
  mdl_detalle: any = [];
  correoCorp: string = 'psicoagendaapp@hotmail.com';
  isAlertOpen = false;
  isAlertOpen2 = false;
  isAlertOpen3 = false;
  alertButtons = ['OK'];
  mdl_asunto: string = '';
  mdl_mensaje: string = '';

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    let parametros = this.router.getCurrentNavigation();
    if (parametros?.extras.state) {
      this.idTipo = parametros?.extras.state['idTipoUsuario'];
      this.idPaciente = parametros?.extras.state['idPaciente'];
      this.idUsuario = parametros?.extras.state['idUsuario'];
      this.login = parametros?.extras.state['login'];
      this.correo = parametros?.extras.state['correo'];
      this.idPersona = parametros?.extras.state['idPersona'];
    }
    if (!this.login) {
      this.router.navigate(['home']);
    } else {
      this.citasAsignadas();
      console.log(this.lista_respuesta)
      console.log(this.lista_citas)
    }
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  getCurrentDate(): string {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Los meses en JavaScript son de 0 a 11
    const year = today.getFullYear();

    return `${day}-${month}-${year}`;
  }

  async citasAsignadas() {
    const todayDate: string = this.getCurrentDate();
    console.log('Hoy: ' + todayDate)
    let data = this.apiService.citasAsignadas(this.idPaciente);
    let respuesta = await lastValueFrom(data);
    let jsonTexto = JSON.stringify(respuesta);
    let json = JSON.parse(jsonTexto);
    for (let x = 0; x < json.length; x++) {
      this.lista_respuesta.push(json[x]);
      if (this.lista_respuesta[x].fecha >= todayDate) {
        this.lista_citas.push(this.lista_respuesta[x]);
      }
    }
  }

  goHistorial() {
    console.log('Login: ', this.login)
    let parametros: NavigationExtras = {
      state: {
        login: this.login,
        idPaciente: this.idPaciente,
        correo: this.correo,
        idUsuario: this.idUsuario,
        idTipo: this.idTipo
      },
      replaceUrl: true
    }
    this.router.navigate(['atencionespaciente'], parametros);
  }

  goHome() {
    if (this.login) {
      let parametros: NavigationExtras = {
        state: {
          login: this.login,
          idPaciente: this.idPaciente,
          correo: this.correo,
          idUsuario: this.idUsuario,
          idTipo: this.idTipo
        },
        replaceUrl: true
      }
      this.router.navigate(['cliente'], parametros);
    } else {
      let parametros: NavigationExtras = {
        replaceUrl: true
      }
      this.router.navigate(['home'], parametros);
    }
  }

  goEditar() {
    let parametros: NavigationExtras = {
      state: {
        login: this.login,
        idPaciente: this.idPaciente,
        correo: this.correo,
        idUsuario: this.idUsuario,
        idTipo: this.idTipo
      },
      replaceUrl: true
    }
    this.router.navigate(['editarpaciente'], parametros);
  }

  logout() {
    this.login = false;
    let parametros: NavigationExtras = {
      state: {
        login: this.login
      },
      replaceUrl: true
    }
    this.router.navigate(['home'], parametros);
  }

  cambiarOpcion() {
    console.log("Opcion: " + this.mdl_opcion);
    if (this.mdl_opcion == 'Selecciona una opción') {
      this.formReagendar = false;
      this.formCancelar = false;
      this.formConsulta = false;
      this.botonReagendar = false;
      this.botonCancelar = false;
      this.botonConsulta = false;
    } else if (this.mdl_opcion == 'Reagendar Hora') {
      this.formReagendar = true;
      this.formCancelar = false;
      this.formConsulta = false;
      this.botonReagendar = false;
      this.botonCancelar = false;
      this.botonConsulta = false;
    } else if (this.mdl_opcion == 'Cancelar Hora') {
      this.formReagendar = false;
      this.formCancelar = true;
      this.formConsulta = false;
      this.botonReagendar = false;
      this.botonCancelar = false;
      this.botonConsulta = false;
    } else if (this.mdl_opcion == 'Realizar Consulta') {
      this.formReagendar = false;
      this.formCancelar = false;
      this.formConsulta = true;
      this.botonReagendar = false;
      this.botonCancelar = false;
      this.botonConsulta = false;
    }
  }

  botonTrue() {
    this.boton = true;
    console.log(this.mdl_detalle.IdCita);
  }

  botones() {
    if (this.mdl_opcion == 'Reagendar Hora' && this.boton) {
      this.botonReagendar = true;
      this.botonCancelar = false;
      this.botonConsulta = false;
    } else if (this.mdl_opcion == 'Cancelar Hora' && this.boton == true) {
      this.botonReagendar = false;
      this.botonCancelar = true;
      this.botonConsulta = false;
    } else if (this.mdl_opcion == 'Realizar Consulta' && this.boton) {
      this.botonReagendar = false;
      this.botonCancelar = false;
      this.botonConsulta = true;
    }
  }

  cancelarCita() {
    this.isAlertOpen = false;
    this.isAlertOpen2 = false;
    this.isAlertOpen3 = false;
    const subject = 'SOPORTE: Cancelación de Cita Numero ' + this.mdl_detalle.IdCita;

    const text = 'Estimados,\n\nSe informa que el usuario ' + this.mdl_detalle.nombre_paciente + ' a solicitado cancelar la siguiente cita:' +
      '\n\nNumero de Cita: ' + this.mdl_detalle.IdCita +
      '\n\nPsicologo: ' + this.mdl_detalle.nombre_psicologo +
      '\n\nPaciente: ' + this.mdl_detalle.nombre_paciente +
      '\n\nFecha: ' + this.mdl_detalle.fecha +
      '\n\nHora: ' + this.mdl_detalle.hora +
      '\n\nSaludos Cordiales,\nArea de TI.';

    const html = `
              <p>Estimados,</p>
              <p>Se informa que el usuario ${this.mdl_detalle.nombre_paciente} a solicitado cancelar la siguiente cita:</p>
              <p><strong>Numero Cita: ${this.mdl_detalle.IdCita}</strong></p>
              <p><strong>Psicologo: ${this.mdl_detalle.nombre_psicologo}</strong></p>
              <p><strong>Paciente: ${this.mdl_detalle.nombre_paciente}</strong></p>
              <p><strong>Fecha: ${this.mdl_detalle.fecha}</strong></p>
              <p><strong>Hora: ${this.mdl_detalle.hora}</strong></p>
              <p>Saludos Cordiales,</p>
              <p>Area de TI.</p>
          `;

    this.apiService.sendEmail(this.correoCorp, subject, text, html).subscribe(
      response => {
        console.log('Email Enviado Correctamente', response);
        this.isAlertOpen = true;

      },
      error => {
        console.error('Error al enviar correo', error);
        this.isAlertOpen2 = true;

      }
    );
    setTimeout(() => {
      this.cancelar();
    }, 2500);
  }

  enviarConsulta() {
    this.isAlertOpen = false;
    this.isAlertOpen2 = false;
    this.isAlertOpen3 = false;

    const subject = 'CONSULTA: ' + this.mdl_asunto;
    const text = 'Estimados,\n\nEl usuario ' + this.mdl_detalle.nombre_paciente + ' a solicitado cancelar la siguiente cita:' +
      '\n\nNumero de Cita: ' + this.mdl_detalle.IdCita +
      '\n\nPsicologo: ' + this.mdl_detalle.nombre_psicologo +
      '\n\nPaciente: ' + this.mdl_detalle.nombre_paciente +
      '\n\nFecha: ' + this.mdl_detalle.fecha +
      '\n\nHora: ' + this.mdl_detalle.hora +
      '\n\nSaludos Cordiales,\nArea de TI.';

    const html = `
              <p>Estimados,</p>
              <p>Se informa que el usuario ${this.mdl_detalle.nombre_paciente} a solicitado cancelar la siguiente cita:</p>
              <p><strong>Numero Cita: ${this.mdl_detalle.IdCita}</strong></p>
              <p><strong>Psicologo: ${this.mdl_detalle.nombre_psicologo}</strong></p>
              <p><strong>Paciente: ${this.mdl_detalle.nombre_paciente}</strong></p>
              <p><strong>Fecha: ${this.mdl_detalle.fecha}</strong></p>
              <p><strong>Hora: ${this.mdl_detalle.hora}</strong></p>
              <p>Saludos Cordiales,</p>
              <p>Area de TI.</p>
          `;

    this.apiService.sendEmail(this.correoCorp, subject, text, html).subscribe(
      response => {
        console.log('Email Enviado Correctamente', response);
        this.isAlertOpen = true;

      },
      error => {
        console.error('Error al enviar correo', error);
        this.isAlertOpen2 = true;

      }
    );
    setTimeout(() => {
      this.cancelar();
    }, 2500);
  }

  cancelar() {
    this.formReagendar = false;
    this.formCancelar = false;
    this.formConsulta = false;
    this.botonReagendar = false;
    this.botonCancelar = false;
    this.botonConsulta = false;
    this.mdl_detalle = '';
  }

}
