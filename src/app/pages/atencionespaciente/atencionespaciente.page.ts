import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-atencionespaciente',
  templateUrl: './atencionespaciente.page.html',
  styleUrls: ['./atencionespaciente.page.scss'],
})
export class AtencionesPacientePage implements OnInit {
  // Simulación de la cita en curso
  proximaCita = {
    fecha: '01/01/2025',
    hora: '10:00 AM',
    paciente: 'Juan Pérez',
    estado: 'Confirmada'
  };

  // Simulación de un array para el historial de citas
  historialCitas = [
    { fecha: '31/12/2024', hora: '09:00 AM', id: 1234, paciente: 'Juan Pérez', estado: 'Completada' },
    { fecha: '30/12/2024', hora: '08:00 AM', id: 1235, paciente: 'Ana Gómez', estado: 'Cancelada' },
    // Asegúrate de incluir todas las propiedades necesarias aquí
  ];
  

  constructor(private router: Router) {}

  redirectTo(route: string) {
    this.router.navigate([route]);
  }

  ngOnInit() {
  }
}
