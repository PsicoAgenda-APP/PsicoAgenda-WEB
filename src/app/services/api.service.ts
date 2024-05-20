import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  ruta = 'http://localhost:3000/usuarios/login/';
  ruta_ps = 'http://127.0.0.1:3000/psicologos/get_psicologos/';
  ruta_busqueda_ps = 'http://127.0.0.1:3000/psicologos/datos_psicologo/';
  ruta_prestadores = 'https://prestadores.azurewebsites.net/profesionales/get_profesionales/';
  ruta_horas = 'http://127.0.0.1:3000/psicologos/horas_psicologo/';
  ruta_detalles_citas = 'http://127.0.0.1:3000/usuarios/get_citas_by_id';
  ruta_proxima_cita = 'http://127.0.0.1:3000/usuarios/get_proxima_cita_by_id';
  ruta_historial_psicologo = 'http://127.0.0.1:3000/psicologos/get_citas_psicologo';

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

async obtenerHistorialPsicologo(IdPsicologo: string) {
    return this.http.get(this.ruta_historial_psicologo + '?IdPsicologo=' + IdPsicologo).toPromise();    //Historial Psicologo
  }
}
