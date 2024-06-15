import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-commitpay',
  templateUrl: './commitpay.page.html',
  styleUrls: ['./commitpay.page.scss'],
})
export class CommitpayPage implements OnInit {

  showOptions: boolean = false;
  transactionDetail: any;
  errorMessage: string = '';
  token_ws: string = '';
  idCita: number = 0;
  idPaciente: number = 0;
  login: boolean = false;
  correo: string = '';
  nombrePsicologo: string = '';
  fechaCita: string = '';
  horaCita: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.token_ws = params['token_ws'];
      this.idCita = JSON.parse(localStorage.getItem('idCita') || '0');
      this.idPaciente = JSON.parse(localStorage.getItem('idPaciente') || '0');
      this.login = JSON.parse(localStorage.getItem('login') || 'false');
      this.correo = JSON.parse(localStorage.getItem('correo') || '');
      this.nombrePsicologo = JSON.parse(localStorage.getItem('nombrePsicologo') || '');
      this.fechaCita = JSON.parse(localStorage.getItem('fechaCita') || '');
      this.horaCita = JSON.parse(localStorage.getItem('horaCita') || '');
      console.log(this.idCita)
      console.log(this.idPaciente)
      console.log(this.correo)
      console.log(this.nombrePsicologo)
      console.log(this.fechaCita)
      console.log(this.horaCita)
      if (this.token_ws) {
        this.apiService.commitTransaction(this.token_ws).subscribe(
          (response) => {
            console.log("Pago Correcto")
            if (response.status === 'AUTHORIZED' && response.response_code === 0) {
              this.transactionDetail = {
                card_number: response.card_detail.card_number,
                transaction_date: new Date(response.transaction_date).toLocaleString(),
                state: response.status === 'AUTHORIZED' ? 'Aceptado' : 'Rechazado',
                pay_type: this.getPaymentType(response.payment_type_code),
                amount: this.formatAmount(response.amount),
                authorization_code: response.authorization_code,
                buy_order: response.buy_order,
              };
              this.apiService.confirmarCita(this.idPaciente, 1, this.idCita).subscribe(
                response => {
                  console.log('Cita Agendada Correctamente', response);
                },
                error => {
                  console.error('Error al agendar la cita', error);
                }
              );
              this.sendEmail();
            } else {
              this.errorMessage = 'ERROR EN LA TRANSACCIÓN, SE RECHAZA LA TRANSACCIÓN.';
            }
          },
          (error) => {
            this.errorMessage = 'ERROR EN LA TRANSACCIÓN, SE CANCELO EL PAGO.';
          }
        );
      } else {
        this.errorMessage = 'ERROR EN LA TRANSACCIÓN, SE CANCELO EL PAGO.';
      }
    });
  }

  sendEmail() {
    const subject = 'Hora Agendada en PsicoAgenda';

    const text = 'Hola!,\n\nAgendaste una hora a traves de PsicoAgenda APP, revisa los detalles.' +
      '\n\nPsicologo: ' + this.nombrePsicologo +
      '\n\nFecha: ' + this.fechaCita +
      '\n\nHora: ' + this.horaCita +
      '\n\nTe Saluda,\nEquipo de PsicoAgenda APP.';

    const html = `
              <p>Hola!,</p>
              <p>Agendaste una hora a traves de PsicoAgenda APP, revisa los detalles.</p>
              <p><strong>Psicologo: ${this.nombrePsicologo}</strong></p>
              <p><strong>Fecha: ${this.fechaCita}</strong></p>
              <p><strong>Hora: ${this.horaCita}</strong></p>
              <p>Te Saluda,</p>
              <p>Equipo de PsicoAgenda APP.</p>
          `;

    this.apiService.sendEmail(this.correo, subject, text, html).subscribe(
      response => {
        console.log('Email Enviado Correctamente', response);
      },
      error => {
        console.error('Error al enviar correo', error);
      }
    );

  }

  downloadPDF() {
    const element = document.getElementById('tbl-transaction-detail');

    if (element) {
      const scale = 2; // Aumenta este valor para mejorar la calidad
      html2canvas(element, { scale }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('landscape', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();

        // Calcular nuevas dimensiones de la imagen para que se ajuste a la página A4 en landscape
        const imgWidth = pdfWidth - 20; // margen de 10mm en cada lado
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight); // agregar la imagen con márgenes
        pdf.save('Comprobante.pdf');
      });
    } else {
      console.error('El elemento con id "tbl-transaction-detail" no se encontró.');
    }
  }

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

  redirectTo(route: string) {
    this.router.navigate([route]);
  }


  goHome() {
    console.log("Login: ", this.login)
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

  private getPaymentType(code: string): string {
    switch (code) {
      case 'VD':
        return 'Tarjeta de Débito';
      // Agrega otros casos según sea necesario
      default:
        return 'Desconocido';
    }
  }

  private formatAmount(amount: number): string {
    return amount.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
  }

}
