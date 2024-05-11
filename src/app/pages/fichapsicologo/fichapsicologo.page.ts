import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fichapsicologo',
  templateUrl: './fichapsicologo.page.html',
  styleUrls: ['./fichapsicologo.page.scss'],
})



export class FichapsicologoPage implements OnInit {
  // Datos simulados para las citas incluyendo diagnóstico y observación
  citas = [
    {
      fechaHora: '01/01/2024 10:00 AM',
      idCita: '1234',
      datosPaciente: 'Juan Pérez',
      estado: 'Confirmada',
      diagnostico: 'Ansiedad',
      observacion: 'Continuar con el tratamiento actual'
    },
    {
      fechaHora: '02/01/2024 11:00 AM',
      idCita: '1235',
      datosPaciente: 'Juan Pérez',
      estado: 'Pendiente',
      diagnostico: 'Depresión leve',
      observacion: 'Evaluar progreso en próxima sesión'
    },
    {
      fechaHora: '03/01/2024 12:00 PM',
      idCita: '1236',
      datosPaciente: 'Juan Pérez',
      estado: 'Cancelada',
      diagnostico: 'Estrés',
      observacion: 'Reprogramar cita'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  redirectTo(route: string) {
    this.router.navigate([route]);
  }
}
