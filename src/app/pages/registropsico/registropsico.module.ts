import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // Importar ReactiveFormsModule aquí

import { IonicModule } from '@ionic/angular';

import { RegistropsicoPageRoutingModule } from './registropsico-routing.module';
import { RegistropsicoPage } from './registropsico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,  // Añadir ReactiveFormsModule a los imports
    IonicModule,
    RegistropsicoPageRoutingModule
  ],
  declarations: [RegistropsicoPage]
})
export class RegistropsicoPageModule {}
