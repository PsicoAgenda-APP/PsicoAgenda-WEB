import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-fichapsicologo',
  templateUrl: './fichapsicologo.page.html',
  styleUrls: ['./fichapsicologo.page.scss'],
})
export class FichapsicologoPage implements OnInit {
  fichasPaciente: any[] = [];
  isAlertOpen = false;
  alertButtons = ['OK'];
  error_mensaje: any = '';
  idPaciente: number = 0;

  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit() {
    let parametros = this.router.getCurrentNavigation();
    if (parametros?.extras.state) {
      const idPaciente = parametros?.extras.state['idPaciente'];
      this.idPaciente = parseInt(idPaciente, 10);
      console.log(this.idPaciente)
    }
    this.obtenerFichasPaciente();
  }

  async obtenerFichasPaciente() {
    try {
      const data = this.apiService.obtenerDetallesCitas(this.idPaciente);
      const respuesta = await lastValueFrom(data) as any[];
      this.fichasPaciente = respuesta;
    } catch (error) {
      this.isAlertOpen = true;
      this.error_mensaje = 'Error al obtener las fichas del paciente';
      console.error('Error al obtener las fichas del paciente', error);
    }
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  redirectTo(route: string) {
    this.router.navigate([route]);
  }
}
