import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-mantendorcitas',
  templateUrl: './mantendorcitas.page.html',
  styleUrls: ['./mantendorcitas.page.scss'],
})
export class MantendorcitasPage implements OnInit {

  login: boolean = false;
  criterio: number = 2;
  mdl_dato: string = '';
  lista_respuesta: any[] = [];
  botonAccion: boolean = false;
  tablaBusqueda: boolean = false;
  idPaciente: number = 1;
  idCita: number = 0;
  mdl_estado: string = '';
  estado: number = 0;
  isAlertOpen = false;
  isAlertOpen2 = false;
  isAlertOpen3 = false;
  alertButtons = ['OK'];

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    console.log('Criterio: ' + this.criterio);
  }

  goCitas() {
    this.router.navigate(['mantendorcitas']);
  }

  goUsuarios() {
    this.router.navigate(['mantenedorusuarios']);
  }

  logout() {
    this.login = false;
    let parametros: NavigationExtras = {
      state: {
        login: this.login
      },
      replaceUrl: true
    };
    this.router.navigate(['home'], parametros);
  }

  actualizarCriterioRut() {
    this.criterio = 2;
    console.log('Criterio: ' + this.criterio);
  }

  actualizarCriterioId() {
    this.criterio = 1;
    console.log('Criterio: ' + this.criterio);
  }

  async busquedaCita() {
    this.lista_respuesta = [];
    this.isAlertOpen3 = false;
    if (this.mdl_dato != '') {
      let data = this.apiService.adminCita(this.criterio, this.mdl_dato);
      let respuesta = await lastValueFrom(data);
      let jsonTexto = JSON.stringify(respuesta);
      let json = JSON.parse(jsonTexto);
      for (let x = 0; x < json.length; x++) {
        this.tablaBusqueda = true;
        json[x].isEditing = false; // Añadir propiedad isEditing
        this.lista_respuesta.push(json[x]);
      }
    } else {
      this.isAlertOpen3 = true;
    }
  }

  actualizarEstado(cita: any) {
    this.mdl_estado = cita.DescripcionEstado;
    cita.isEditing = true;
  }

  cancelar(cita: any) {
    cita.isEditing = false;
  }

  updateCita(idCita: any) {
    this.isAlertOpen = false;
    this.isAlertOpen = false;
    console.log('Estado Cita: ', this.mdl_estado);
    if (this.mdl_estado == 'Asignado') {
      this.estado = 1;
    } else if (this.mdl_estado == 'Concluido') {
      this.estado = 2;
    } else if (this.mdl_estado == 'Pendiente') {
      this.estado = 3;
    }
    console.log('Estado: ', this.estado);
    this.apiService.confirmarCita(this.idPaciente, this.estado, idCita).subscribe(
      response => {
        console.log('Cita Agendada Correctamente', response);
        this.isAlertOpen = true;
      },
      error => {
        console.error('Error al agendar la cita', error);
        this.isAlertOpen2 = true;
      }
    );
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  setOpen2(isOpen: boolean) {
    this.isAlertOpen2 = isOpen;
  }

  setOpen3(isOpen: boolean) {
    this.isAlertOpen3 = isOpen;
  }

  recarga() {
    this.lista_respuesta = [];
    this.botonAccion = false;
    this.mdl_dato = '';
    this.tablaBusqueda = false;
  }
}