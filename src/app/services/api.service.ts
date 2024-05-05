import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  ruta = 'http://localhost:3000/usuarios/login/';

  constructor(private http: HttpClient) { } 

  obtenerUsuario(correo: string, contrasena: string) {
    return this.http.get(this.ruta + '?CorreoElectronico=' + correo +  '&Contrasena=' + contrasena).pipe();  
  }

}
