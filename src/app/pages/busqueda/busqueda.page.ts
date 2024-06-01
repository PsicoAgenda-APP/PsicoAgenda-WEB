import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
})
export class BusquedaPage implements OnInit {

  constructor(private router: Router, private apiService: ApiService) { }

  showOptions: boolean = false;
  lista_respuesta: any[] = [];
  dato: string = '';
  currentPage = 1;
  itemsPerPage = 5;
  totalPages: number = 0;
  login: boolean = false;
  idUsuario: string = '';
  idPsicologo: string = '';
  loading: boolean = false;
  idPaciente: number = 0;

  ngOnInit() {
    setTimeout(() => {
      this.loading = true;
    }, 1500);
    this.busqueda();
    let parametros = this.router.getCurrentNavigation();
    if (parametros?.extras.state) {
      this.dato = parametros?.extras.state['dato'];
      this.login = parametros?.extras.state['login'];
      this.idPaciente = parametros?.extras.state['idPaciente'];
    }
  }

  agendarCita(index: number) {
    if (this.login) {
      const elemento2 = document.getElementById('id_psicologo_' + index);
      const idPsicologoString = elemento2 ? elemento2.textContent : null;
      const idPsicologo = parseInt(idPsicologoString!, 10);
      this.idPsicologo = idPsicologo.toString();
      console.log('El ID del usuario como texto es:', this.idPsicologo);
      let parametros: NavigationExtras = {
        state: {
          idPsicologo: this.idPsicologo,
          idPaciente: this.idPaciente,
          login: this.login
        },
        replaceUrl: true
      }
      this.router.navigate(['calendario'], parametros);
    } else if (!this.login) {
      let parametros: NavigationExtras = {
        replaceUrl: true
      }
      this.router.navigate(['login'], parametros);
    }
  }

  async busqueda() {
    let data = this.apiService.listaPsicologos();
    let respuesta = await lastValueFrom(data);
    let jsonTexto = JSON.stringify(respuesta);
    let json = JSON.parse(jsonTexto);
    for (let x = 0; x < json.length; x++) {
      this.lista_respuesta.push(json[x]);
      this.totalPages = Math.ceil(this.lista_respuesta.length / this.itemsPerPage);
    }
    console.log(this.lista_respuesta)
  }

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

  redirectTo(route: string) {
    this.router.navigate([route]);
  }

  get paginatedItems() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.lista_respuesta.slice(startIndex, startIndex + this.itemsPerPage);
  }

  goToPage(page: number) {
    this.currentPage = page;
  }

  goHome() {
    console.log("Login: ", this.login)
    if (this.login) {
      let parametros: NavigationExtras = {
        state: {
          login: this.login
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

}
