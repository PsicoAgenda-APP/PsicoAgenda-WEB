import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-psicologo',
  templateUrl: './psicologo.page.html',
  styleUrls: ['./psicologo.page.scss'],
})
export class PsicologoPage implements OnInit {
  // Datos simulados para las citas
  citas = [
    { fechaHora: '01/01/2024 10:00 AM', idCita: '1234', datosPaciente: 'Juan Pérez', estado: 'Confirmada' },
    { fechaHora: '02/01/2024 11:00 AM', idCita: '1235', datosPaciente: 'Ana Gómez', estado: 'Pendiente' },
    { fechaHora: '03/01/2024 12:00 PM', idCita: '1236', datosPaciente: 'Mario Bros', estado: 'Cancelada' }
  ];


  constructor(private router: Router) {}

  redirectTo(route: string) {
    this.router.navigate([route]);
  }

  ngOnInit() {
  }
}