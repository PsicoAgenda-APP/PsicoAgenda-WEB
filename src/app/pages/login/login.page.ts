import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
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
  isAlertOpen = false;
  isAlertOpen2 = false;
  alertButtons = ['OK'];
  error_mensaje: any = '';
  idTipo: number = 0;


  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
  }

  async login() {
    this.isAlertOpen2 = false;
    this.isAlertOpen = false;
    this.lista_respuesta = [];
    if (this.mdl_correo != '' && this.mdl_contrasena != '') {
      console.log(this.mdl_correo)
      console.log(this.mdl_contrasena);
      try {
        let data = this.apiService.obtenerUsuario(this.mdl_correo, this.mdl_contrasena)
        let respuesta = await lastValueFrom(data);
        let jsonTexto = JSON.stringify(respuesta);
        let json = JSON.parse(jsonTexto);
        for (let x = 0; x < json.length; x++) {
          this.lista_respuesta.push(json[x]);
          console.log(this.lista_respuesta);
          this.contrasena = this.lista_respuesta[x].Contrasena;
          this.correo = this.lista_respuesta[x].CorreoElectronico;
          this.idTipo = this.lista_respuesta[x].IdTipoUsuario;
          console.log(this.contrasena)
          console.log(this.correo)
          if (this.mdl_contrasena == this.contrasena && this.mdl_correo == this.correo) {
            if (this.idTipo == 1) {
              let parametros: NavigationExtras = {
                replaceUrl: true
              }
              this.router.navigate(['cliente'],parametros);
            } else if (this.idTipo == 2) {
              let parametros: NavigationExtras = {
                replaceUrl: true
              }
              this.router.navigate(['psicolgo'],parametros);
            }
          }
        }
      } catch (error) {
        this.isAlertOpen2 = true;
      }
    } else {
      this.isAlertOpen = true; 
    }
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  navigateHome() {
    let parametros: NavigationExtras = {
      replaceUrl: true
    }

    this.router.navigate(['home'],parametros)
  }
}
