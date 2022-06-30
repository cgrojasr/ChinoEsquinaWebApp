import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PromocionGestionarComponent } from './promocion-gestionar/promocion-gestionar.component';
import { PromocionHomeComponent } from './promocion-home/promocion-home.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'promocion',
        component: PromocionHomeComponent
      },
      {
        path: 'promocion/gestionar',
        component: PromocionGestionarComponent
      },
      {
        path: 'promocion/gestionar/:id',
        component: PromocionGestionarComponent
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
export class FidelizacionRoutingModule { }
