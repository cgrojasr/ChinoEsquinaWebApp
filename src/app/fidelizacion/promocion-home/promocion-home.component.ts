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

  constructor(
    private promocionService: PromocionService
  ) { 
    this.lstPromocion = [];
  }

  ngOnInit(): void {
    this.listar();
  }

  listar(): void{
    this.promocionService.listar().subscribe(
      response => {
        this.lstPromocion = response
      }
    )
  }

}
