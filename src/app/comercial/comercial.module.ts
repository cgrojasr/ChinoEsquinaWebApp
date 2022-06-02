import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentaComponent } from './venta/venta.component';
import { HomeComponent } from './home/home.component';
import { ComercialRoutingModule } from './comercial-routing.module';



@NgModule({
  declarations: [
    VentaComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ComercialRoutingModule
  ]
})
export class ComercialModule { }
