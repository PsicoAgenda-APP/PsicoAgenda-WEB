import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

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
