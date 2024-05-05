import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  mdl_correo: string = '';
  mdl_contrasena: string = '';
  lista_respuesta: any[] = [];
  contrasena: string = '';
  correo: string = '';

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
  }

  async login(){
    console.log(this.mdl_correo)
    console.log(this.mdl_contrasena);
    let data = this.apiService.obtenerUsuario(this.mdl_correo,this.mdl_contrasena)
    let respuesta = await lastValueFrom(data);

    let jsonTexto = JSON.stringify(respuesta);
    let json = JSON.parse(jsonTexto);

    for (let x = 0; x < json.length; x++) {
      this.lista_respuesta.push(json[x]);
      console.log(this.lista_respuesta);
      this.contrasena = this.lista_respuesta[x].Contrasena;
      this.correo = this.lista_respuesta[x].CorreoElectronico;
      console.log(this.contrasena)
      console.log(this.correo)
        if (this.mdl_contrasena == this.contrasena && this.mdl_correo == this.correo) {
          this.router.navigate(['cliente']);
        } else {
          console.log('error')
        }
    }
}

}
