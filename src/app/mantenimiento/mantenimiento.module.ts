import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteGestionarComponent } from './cliente-gestionar/cliente-gestionar.component';
import { ClienteListarComponent } from './cliente-listar/cliente-listar.component';
import { HomeComponent } from './home/home.component';
import { MantenimientoRoutingModule } from './mantenimiento-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ClienteGestionarComponent,
    ClienteListarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MantenimientoRoutingModule,
    FormsModule
  ]
})
export class MantenimientoModule { }
