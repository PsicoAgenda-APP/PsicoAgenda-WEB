import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  showOptions: boolean = false;

  constructor(private router: Router) {}

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

  redirectTo(route: string) {
    this.router.navigate([route]);
  }
}
