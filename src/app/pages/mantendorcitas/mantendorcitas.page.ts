import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-mantendorcitas',
  templateUrl: './mantendorcitas.page.html',
  styleUrls: ['./mantendorcitas.page.scss'],
})
export class MantendorcitasPage implements OnInit {

  login: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goCitas() {
    this.router.navigate(['mantendorcitas']);
  }

  goUsuarios() {
    this.router.navigate(['editorusuarios']);
  }

  logout() {
    this.login = false;
    let parametros: NavigationExtras = {
      state: {
        login: this.login
      },
      replaceUrl: true
    }
    this.router.navigate(['home'], parametros);
  }

}
