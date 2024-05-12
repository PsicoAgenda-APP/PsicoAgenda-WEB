import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {

  constructor(private router: Router) {}

  login: boolean = true;

  redirectTo(route: string) {
    this.router.navigate([route]);
  }

  ngOnInit() {
  }

  buscar() {
    let parametros: NavigationExtras = {
      state: {
        login: this.login
      },
      replaceUrl: true
    }
    this.router.navigate(['busqueda'], parametros);

  }
}
