import { Component, OnInit } from '@angular/core';

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
  

  constructor() { }

  ngOnInit() {
    // Aquí se podría integrar la carga de datos desde una API
  }

  // Métodos adicionales para la lógica del negocio podrían ser definidos aquí
}
