import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import jsPDF from 'jspdf';
import 'jspdf-autotable';


@Component({
  selector: 'app-atencionespaciente',
  templateUrl: './atencionespaciente.page.html',
  styleUrls: ['./atencionespaciente.page.scss'],
})
export class AtencionesPacientePage implements OnInit {
  proximaCita: any = {};
  historialCitas: any[] = [];
  isAlertOpen = false;
  alertButtons = ['OK'];
  error_mensaje: any = '';
  idPaciente: number = 0;
  login: boolean = false;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    let parametros = this.router.getCurrentNavigation();
    if (parametros?.extras.state) {
      this.idPaciente = parametros?.extras.state['idPaciente'];
      this.login = parametros?.extras.state['login'];
    }
    this.obtenerDetallesCitas();
    this.obtenerProximaCita();
  }

  async obtenerDetallesCitas() {
    const IdPaciente = this.idPaciente; // Reemplaza esto con el IdPaciente real
    try {
      const data = this.apiService.obtenerDetallesCitas(IdPaciente);
      const respuesta = await lastValueFrom(data);
      this.historialCitas = Array.isArray(respuesta) ? respuesta : [];
    } catch (error) {
      this.isAlertOpen = true;
      this.error_mensaje = 'Error al obtener detalles de citas';
      console.error('Error al obtener detalles de citas', error);
    }
  }

  async obtenerProximaCita() {
    const IdPaciente = this.idPaciente; // Reemplaza esto con el IdPaciente real
    try {
      const data = this.apiService.obtenerProximaCita(IdPaciente);
      const respuesta = await lastValueFrom(data);
      this.proximaCita = respuesta;
    } catch (error) {
      this.isAlertOpen = true;
      this.error_mensaje = 'Error al obtener la próxima cita';
      console.error('Error al obtener la próxima cita', error);
    }
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  redirectTo(route: string) {
    this.router.navigate([route]);
  }

  goHome() {
    if (this.login) {
      let parametros: NavigationExtras = {
        state: {
          login: this.login,
          idPaciente: this.idPaciente
        },
        replaceUrl: true
      }
      this.router.navigate(['cliente'], parametros);
    } else {
      let parametros: NavigationExtras = {
        replaceUrl: true
      }
      this.router.navigate(['home'], parametros);
    }
  }

  async downloadPDF(cita: any) {
    const doc = new jsPDF();
    const margin = 20; // 2 cm en puntos

    const signatureImage = await fetch('assets/icon/firma.txt')
      .then(response => response.text())
      .catch(error => {
        console.error('Error al leer el archivo de la firma:', error);
        return '';
      });

    doc.setFontSize(14);
    doc.setFont('times', 'bold');
    doc.text('Informe Psicológico', 80, 15);

    doc.setFontSize(11);
    doc.text('1. Datos del Paciente', margin, 30);
    doc.setFontSize(11);
    doc.setFont('times', 'normal');
    doc.text(`Nombre: ${cita.nombre_paciente}`, margin, 40);
    doc.text(`Rut: ${cita.rut_paciente}`, margin, 50);
    doc.text(`Fecha de Nacimiento: ${cita.FechaNacimiento}`, margin, 60);
    doc.text(`Edad: ${cita.Edad}`, margin, 70);

    doc.setFontSize(11);
    doc.setFont('times', 'bold');
    doc.text('2. Detalles de la Cita', margin, 80);
    doc.setFont('times', 'normal');
    doc.setFontSize(11);
    doc.text(`Psicólogo: ${cita.nombre_psicologo}`, margin, 90);
    doc.text(`Fecha: ${cita.fecha}`, margin, 100);
    doc.text(`Hora: ${cita.hora}`, margin, 110);

    doc.setFontSize(11);
    doc.setFont('times', 'bold');
    doc.text('3. Observaciones', margin, 120);
    doc.setFontSize(11);
    doc.setFont('times', 'normal');
    const splitDiagnostico = doc.splitTextToSize(`Diagnóstico: ${cita.Diagnostico}`, 170); // Adjusted for margins
    doc.text(splitDiagnostico, margin, 130);
    const splitTratamiento = doc.splitTextToSize(`Tratamiento: ${cita.Tratamiento}`, 170); // Adjusted for margins
    doc.text(splitTratamiento, margin, 140);

    const finalY = 200 + (splitDiagnostico.length + splitTratamiento.length) * 10;
    doc.addImage(signatureImage, 'PNG', margin, finalY, 50, 20, '', 'FAST'); // Usa compresión 'FAST'
    doc.text(cita.nombre_psicologo, margin, finalY + 30);
    doc.text('Psicólogo', margin, finalY + 40);
    doc.text(this.formatDate(new Date()), margin, finalY + 50);
    
    doc.save(`Informe_Psicologico_${cita.fecha}.pdf`);
  }

  formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }
}


