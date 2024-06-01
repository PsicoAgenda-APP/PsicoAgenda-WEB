import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-atencionespaciente',
  templateUrl: './atencionespaciente.page.html',
  styleUrls: ['./atencionespaciente.page.scss'],
})
export class AtencionesPacientePage implements OnInit {
  proximaCita: any = {};
  historialCitas: any[] = [];
  isAlertOpen = false;
  alertButtons = ['OK'];
  error_mensaje: any = '';
  idPaciente: number = 0;
  login: boolean = false;

  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit() {
    let parametros = this.router.getCurrentNavigation();
    if (parametros?.extras.state) {
      this.idPaciente = parametros?.extras.state['idPaciente'];
      this.login = parametros?.extras.state['login'];
    }
    this.obtenerDetallesCitas();
    this.obtenerProximaCita();
  }

  async obtenerDetallesCitas() {
    const IdPaciente = this.idPaciente; // Reemplaza esto con el IdPaciente real
    try {
      const data = this.apiService.obtenerDetallesCitas(IdPaciente);
      const respuesta = await lastValueFrom(data);
      this.historialCitas = Array.isArray(respuesta) ? respuesta : [];
    } catch (error) {
      this.isAlertOpen = true;
      this.error_mensaje = 'Error al obtener detalles de citas';
      console.error('Error al obtener detalles de citas', error);
    }
  }

  async obtenerProximaCita() {
    const IdPaciente = this.idPaciente; // Reemplaza esto con el IdPaciente real
    try {
      const data = this.apiService.obtenerProximaCita(IdPaciente);
      const respuesta = await lastValueFrom(data);
      this.proximaCita = respuesta;
    } catch (error) {
      this.isAlertOpen = true;
      this.error_mensaje = 'Error al obtener la próxima cita';
      console.error('Error al obtener la próxima cita', error);
    }
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  redirectTo(route: string) {
    this.router.navigate([route]);
  }

  goHome() {
    if (this.login) {
      let parametros: NavigationExtras = {
        state: {
          login: this.login,
          idPaciente: this.idPaciente
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

}
