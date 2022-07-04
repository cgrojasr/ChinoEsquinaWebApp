import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PromocionService } from 'src/app/core/promocion/promocion.service';
import { Promocion } from 'src/app/models/promocion';

@Component({
  selector: 'app-promocion-gestionar',
  templateUrl: './promocion-gestionar.component.html',
  styleUrls: ['./promocion-gestionar.component.css']
})
export class PromocionGestionarComponent implements OnInit {

  objPromocion: Promocion = {
    idPromocion: 0,
    nombre: "",
    descripcion: "",
    fechaInicio: new Date(),
    fechaFinal: new Date(),
    idUsuarioRegistro: 0,
    idUsuarioModifico: 0,
    activo: false,
    eliminado: true
  }

  idPromocion = 0;

  constructor(
    private promocionService: PromocionService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idPromocion = params['id'];
    });

    if(this.idPromocion!=0){ 
      this.buscar_promocion();
    }
  }

  buscar_promocion(): void { 
    this.promocionService.buscarPorId(this.idPromocion).subscribe(
      response => { 
        this.objPromocion = response
      }
    );
    console.log(this.objPromocion);
  }

  onclick_registrar(): void{
    this.objPromocion.idUsuarioRegistro = 1;
    this.promocionService.registrar(this.objPromocion).subscribe(
      result => this.objPromocion
    );
    this.router.navigate(['/fidelizacion/promocion']);
  }

  onclick_actualizar(): void{
    this.objPromocion.idUsuarioModifico = 1;
    this.promocionService.actualizar(this.objPromocion).subscribe(
      result => this.objPromocion
    );
    this.router.navigate(['/fidelizacion/promocion']);
  }
}
