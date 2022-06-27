import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromocionGestionarComponent } from './promocion-gestionar/promocion-gestionar.component';
import { PromocionHomeComponent } from './promocion-home/promocion-home.component';
import { HomeComponent } from './home/home.component';
import { FidelizacionRoutingModule } from './fidelizacion-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PromocionGestionarComponent,
    PromocionHomeComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FidelizacionRoutingModule,
    FormsModule
  ]
})
export class FidelizacionModule { }
