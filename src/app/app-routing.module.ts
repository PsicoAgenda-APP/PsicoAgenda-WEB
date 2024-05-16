import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cliente',
    loadChildren: () => import('./pages/cliente/cliente.module').then( m => m.ClientePageModule)
  },
  {
    path: 'registropsico',
    loadChildren: () => import('./pages/registropsico/registropsico.module').then( m => m.RegistropsicoPageModule)
  },
  {
    path: 'psicologo',
    loadChildren: () => import('./pages/psicologo/psicologo.module').then( m => m.PsicologoPageModule)
  },
  {
    path: 'atencionespaciente',
    loadChildren: () => import('./pages/atencionespaciente/atencionespaciente.module').then( m => m.AtencionesPacientePageModule)
  },
  {
    path: 'fichapaciente',
    loadChildren: () => import('./pages/fichapaciente/fichapaciente.module').then( m => m.FichapacientePageModule)
  },
  {
    path: 'busqueda',
    loadChildren: () => import('./pages/busqueda/busqueda.module').then( m => m.BusquedaPageModule)
  },
  {
    path: 'fichapsicologo',
    loadChildren: () => import('./pages/fichapsicologo/fichapsicologo.module').then( m => m.FichapsicologoPageModule)
  },
  {
    path: 'registropaciente',
    loadChildren: () => import('./pages/registropaciente/registropaciente.module').then( m => m.RegistropacientePageModule)
  },  {
    path: 'calendario',
    loadChildren: () => import('./pages/calendario/calendario.module').then( m => m.CalendarioPageModule)
  },



  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
