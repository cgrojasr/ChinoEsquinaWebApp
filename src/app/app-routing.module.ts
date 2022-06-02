import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'comercial',
    loadChildren: ()=>import('./comercial/comercial.module').then(m=>m.ComercialModule)
  },
  {
    path: 'mantenimiento',
    loadChildren: ()=>import('./mantenimiento/mantenimiento.module').then(m=>m.MantenimientoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
