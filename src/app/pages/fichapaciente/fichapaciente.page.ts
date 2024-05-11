import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-fichapaciente',
  templateUrl: './fichapaciente.page.html',
  styleUrls: ['./fichapaciente.page.scss'],
})
export class FichapacientePage implements OnInit {
  citas = [
    {
      fechaHora: '01/01/2024 10:00 AM',
      idCita: '1234',
      datosPsicologo: 'Pedro Fernandez',
      estado: 'Confirmada',
      diagnostico: 'Ansiedad',
      observacion: 'Continuar con el tratamiento actual'
    },
    {
      fechaHora: '02/01/2024 11:00 AM',
      idCita: '1235',
      datosPsicologo: 'Juan Pérez',
      estado: 'Pendiente',
      diagnostico: 'Depresión leve',
      observacion: 'Evaluar progreso en próxima sesión'
    },
    {
      fechaHora: '03/01/2024 12:00 PM',
      idCita: '1236',
      datosPsicologo: 'Facundo Campazo',
      estado: 'Cancelada',
      diagnostico: 'Estrés',
      observacion: 'Reprogramar cita'
    },
    {
      fechaHora: '03/01/2024 12:00 PM',
      idCita: '1236',
      datosPsicologo: 'Juan Pérez',
      estado: 'Cancelada',
      diagnostico: 'Estrés',
      observacion: 'Reprogramar cita'
    },
    {
      fechaHora: '03/01/2024 12:00 PM',
      idCita: '1236',
      datosPsicologo: 'Italo Noly',
      estado: 'Cancelada',
      diagnostico: 'Estrés',
      observacion: 'Reprogramar cita'
    },
    {
      fechaHora: '03/01/2024 12:00 PM',
      idCita: '1236',
      datosPsicologo: 'Maribel Muñoz',
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
