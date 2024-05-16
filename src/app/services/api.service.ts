import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  ruta = 'http://localhost:3000/usuarios/login/';
  ruta_ps = 'http://127.0.0.1:3000/psicologos/get_psicologos/'
  ruta_busqueda_ps = 'http://127.0.0.1:3000/psicologos/datos_psicologo/'
  ruta_prestadores = 'http://127.0.0.1:3001/profesionales/get_profesionales'
  ruta_horas = 'http://127.0.0.1:3000/psicologos/horas_psicologo/'

  constructor(private http: HttpClient) { } 

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

}
