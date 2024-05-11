import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FichapacientePage } from './fichapaciente.page';

const routes: Routes = [
  {
    path: '',
    component: FichapacientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FichapacientePageRoutingModule {}
