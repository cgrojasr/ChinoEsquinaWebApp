import { Component, OnInit } from '@angular/core';
import { PromocionService } from 'src/app/core/promocion/promocion.service';
import { Promocion } from 'src/app/models/promocion';

@Component({
  selector: 'app-promocion-home',
  templateUrl: './promocion-home.component.html',
  styleUrls: ['./promocion-home.component.css']
})
export class PromocionHomeComponent implements OnInit {

  lstPromocion: Promocion[];
  strBuscar: string = "";

  constructor(
    private promocionService: PromocionService
  ) { 
    this.lstPromocion = [];
  }

  ngOnInit(): void {
    this.listar("");
  }

  listar(descripcion:string): void{
    this.promocionService.listar(descripcion).subscribe(
      response => {
        this.lstPromocion = response
      }
    )
  }

  onClick_Buscar():void {
    this.listar(this.strBuscar);
  }
}
