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
  },
  {
    path: 'fidelizacion',
    loadChildren: ()=>import('./fidelizacion/fidelizacion.module').then(m=>m.FidelizacionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
