import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClienteListarComponent } from './cliente-listar/cliente-listar.component';
import { ClienteGestionarComponent } from './cliente-gestionar/cliente-gestionar.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'cliente',
        component: ClienteListarComponent
      },
      {
        path: 'cliente/entidad',
        component: ClienteGestionarComponent
      },
      {
        path: 'cliente/entidad/:id',
        component: ClienteGestionarComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MantenimientoRoutingModule { }
