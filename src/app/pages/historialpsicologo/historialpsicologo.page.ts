import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit() {
    this.obtenerHistorialPsicologo();
  }

  async obtenerHistorialPsicologo() {
    const IdPsicologo = '4'; // Reemplaza esto con el IdPsicologo real
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
}