import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  ruta = 'http://localhost:3000/usuarios/login/';
  ruta_ps = 'http://127.0.0.1:3000/psicologos/get_psicologos/'
  ruta_prestadores = 'http://127.0.0.1:3001/profesionales/get_profesionales'

  constructor(private http: HttpClient) { } 

  obtenerUsuario(correo: string, contrasena: string) {
    return this.http.get(this.ruta + '?CorreoElectronico=' + correo +  '&Contrasena=' + contrasena).pipe();  
  }

  listaPsicologos() {
    return this.http.get(this.ruta_ps).pipe();  
  }

  validarPrestadores(rut: string) {
    return this.http.get(this.ruta_prestadores + '?Rut=' + rut).pipe();  
  }

}
