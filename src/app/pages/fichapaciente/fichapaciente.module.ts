import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FichapacientePageRoutingModule } from './fichapaciente-routing.module';

import { FichapacientePage } from './fichapaciente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FichapacientePageRoutingModule
  ],
  declarations: [FichapacientePage]
})
export class FichapacientePageModule {}
