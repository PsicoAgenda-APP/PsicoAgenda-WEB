import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-historialpsicologo',
  templateUrl: './historialpsicologo.page.html',
  styleUrls: ['./historialpsicologo.page.scss'],
})
export class HistorialpsicologoPage implements OnInit {
  historialCitas: any[] = [];
  isAlertOpen = false;
  alertButtons = ['OK'];
  error_mensaje: any = '';
  login: boolean = false;
  idPsicologo: number = 0;
  idPaciente: string = '';


  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit() {let parametros = this.router.getCurrentNavigation();
    if (parametros?.extras.state) {
      this.idPsicologo = parametros?.extras.state['idPsicologo'];
      this.login = parametros?.extras.state['login'];
    }
    this.obtenerHistorialPsicologo();
  }

  async obtenerHistorialPsicologo() {
    const IdPsicologo = this.idPsicologo; // Reemplaza esto con el IdPsicologo real
    try {
      const data = this.apiService.obtenerHistorialPsicologo(IdPsicologo);
      const respuesta = await lastValueFrom(data) as any[];
      this.historialCitas = respuesta;
    } catch (error) {
      this.isAlertOpen = true;
      this.error_mensaje = 'Error al obtener el historial de citas';
      console.error('Error al obtener el historial de citas', error);
    }
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  redirectTo(route: string) {
    this.router.navigate([route]);
  }

  verFicha(index:number) {
    const elemento2 = document.getElementById('id_paciente_' + index);
    const idPacienteString = elemento2 ? elemento2.textContent : null;
    const idPaciente = parseInt(idPacienteString!, 10);
    this.idPaciente = idPaciente.toString();
    let parametros: NavigationExtras = {
      state: {
        idPaciente: this.idPaciente
      }
    };
    console.log("idPaciente: " + this.idPaciente)
    this.router.navigate(['fichapsicologo'], parametros);
  }

}
