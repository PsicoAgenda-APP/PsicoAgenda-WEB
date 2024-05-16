import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  showOptions: boolean = false;
  dato: string = '';
  mdl_dato: string = '';
  login: boolean = false;

  // Testimonials data
  testimonials = [
    {
      quote: "Una página muy rápida e intuitiva, ahora puedo organizar mis citas con mayor facilidad.",
      author: "Juan Gomez",
      role: "Paciente",
      avatar: "assets/path/to/juan_avatar.png"
    },
    {
      quote: "Muy útil y accesible, de las mejores web disponibles para ofrecer atención a clientes.",
      author: "María Medina",
      role: "Psicóloga de la Universidad de Chile",
      avatar: "assets/path/to/maria_avatar.png"
    },
    {
      quote: "Hasta el momento no he presentado problemas y siempre han resuelto mis consultas.",
      author: "Jesús Riquelme",
      role: "Paciente",
      avatar: "assets/path/to/jesus_avatar.png"
    }
  ];

  constructor(private router: Router) {}
  
  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

  redirectTo(route: string) {
    this.router.navigate([route]);
  }

  buscar() {
    this.login = false;
    let parametros: NavigationExtras = {
      state: {
        dato: this.dato,
        login: this.login
      },
      replaceUrl: true
    }
    this.router.navigate(['busqueda'], parametros);

  }
} 
