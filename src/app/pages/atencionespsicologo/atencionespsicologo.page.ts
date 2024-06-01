import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-atencionespsicologo',
  templateUrl: './atencionespsicologo.page.html',
  styleUrls: ['./atencionespsicologo.page.scss'],
})
export class AtencionespsicologoPage implements OnInit {
  atencionesCitas: any[] = [];
  isAlertOpen = false;
  alertButtons = ['OK'];
  error_mensaje: any = '';
  login: boolean = false;
  idPsicologo: number = 0;

  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit() {let parametros = this.router.getCurrentNavigation();
    if (parametros?.extras.state) {
      this.idPsicologo = parametros?.extras.state['idPsicologo'];
      this.login = parametros?.extras.state['login'];
    }
    this.obtenerAtencionesPsicologo();
  }


  

  async obtenerAtencionesPsicologo() {
    const IdPsicologo = this.idPsicologo; // Reemplaza esto con el IdPsicologo real
    try {
      const data = this.apiService.obtenerAtencionesPsicologo(IdPsicologo);
      const respuesta = await lastValueFrom(data) as any[];
      this.atencionesCitas = respuesta;
    } catch (error) {
      this.isAlertOpen = true;
      this.error_mensaje = 'Error al obtener las atenciones';
      console.error('Error al obtener las atenciones', error);
    }
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  redirectTo(route: string) {
    this.router.navigate([route]);
  }
}
