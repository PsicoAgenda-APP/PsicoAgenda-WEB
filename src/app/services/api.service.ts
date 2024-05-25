import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  ruta = 'https://psicoagenda-api.azurewebsites.net/usuarios/login/';
  ruta_ps = 'https://psicoagenda-api.azurewebsites.net/psicologos/get_psicologos/';
  ruta_busqueda_ps = 'https://psicoagenda-api.azurewebsites.net/psicologos/datos_psicologo/';
  ruta_prestadores = 'https://prestadores.azurewebsites.net/profesionales/get_profesionales/';
  ruta_horas = 'https://psicoagenda-api.azurewebsites.net/psicologos/horas_psicologo/';
  ruta_detalles_citas = 'https://psicoagenda-api.azurewebsites.net/usuarios/get_citas_by_id';
  ruta_proxima_cita = 'https://psicoagenda-api.azurewebsites.net/usuarios/get_proxima_cita_by_id';
  ruta_citas_psicologo = 'https://psicoagenda-api.azurewebsites.net/psicologos/get_citas_psicologo';
  ruta_atenciones_psicologo = 'https://psicoagenda-api.azurewebsites.net/psicologos/get_atenciones_psicologo';
  ruta_historial_psicologo = 'https://psicoagenda-api.azurewebsites.net/psicologos/get_historial_psicologo';
  

  constructor(private http: HttpClient) {}

  obtenerUsuario(correo: string, contrasena: string) {
    return this.http.get(this.ruta + '?CorreoElectronico=' + correo +  '&Contrasena=' + contrasena).pipe();
  }

  obtenerHoras(id: number, fecha: string) {
    return this.http.get(this.ruta_horas + '?IdPsicologo=' + id +  '&FechaCita=' + fecha).pipe();
  }

  listaPsicologos() {
    return this.http.get(this.ruta_ps).pipe();
  }

  datosPsicologo(id: number) {
    return this.http.get(this.ruta_busqueda_ps + '?IdPsicologo=' + id).pipe();
  }

  validarPrestadores(rut: string) {
    return this.http.get(this.ruta_prestadores + '?Rut=' + rut).pipe();
  }

  obtenerDetallesCitas(IdPaciente: string) {
    return this.http.get(this.ruta_detalles_citas + '?IdPaciente=' + IdPaciente).pipe();  //Historial citas
  }

  obtenerProximaCita(IdPaciente: string) {
    return this.http.get(this.ruta_proxima_cita + '?IdPaciente=' + IdPaciente).pipe();    //Próxima Cita
  }

  obtenerCitaPsicologo(IdPsicologo: string) {
    return this.http.get(this.ruta_citas_psicologo + '?IdPsicologo=' + IdPsicologo).pipe();    //Historial Psicologo
  }

  obtenerHistorialPsicologo(IdPsicologo: string) {
    return this.http.get(this.ruta_historial_psicologo + '?IdPsicologo=' + IdPsicologo).pipe();    //Historial Psicologo
  }

  obtenerAtencionesPsicologo(IdPsicologo: string) {
    return this.http.get(this.ruta_atenciones_psicologo + '?IdPsicologo=' + IdPsicologo).pipe();    //Atenciones Psicologo
  }

  createTransaction(buyOrder: string, sessionId: string, amount: number, returnUrl: string): Observable<any> {
    const url = `https://psicoagenda-api.azurewebsites.net/api/v1/transbank/transaction/create`;
    const body = {
      buy_order: buyOrder,
      session_id: sessionId,
      amount: amount,
      return_url: returnUrl 
    };
    return this.http.post(url, body);
  }

  commitTransaction(token: string): Observable<any> {
    const url = `https://psicoagenda-api.azurewebsites.net/api/v1/transbank/transaction/commit/${token}`;
    return this.http.put(url, { token });
  }

}
