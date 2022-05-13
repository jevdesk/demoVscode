import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pasajero } from 'src/app/models/pasajero';
import { PasajeroService } from 'src/app/services/pasajero.service';
@Component({
  selector: 'app-listaventas',
  templateUrl: './listaventas.component.html',
  styleUrls: ['./listaventas.component.css']
})
export class ListaventasComponent implements OnInit {
pasajeros: Array<Pasajero>;
  constructor(private pasajeroService:PasajeroService,
    private router: Router) { 
    this.pasajeros = new Array<Pasajero>();
    this.mostrarHistoricos();
}
  mostrarHistoricos(){
  this.pasajeros = this.pasajeroService.getPasajeros();
  }
  ngOnInit(): void {
  }

  irFormulario() {
    this.router.navigate(['formulario']);
  }
  irResumen() {
    this.router.navigate(['resumen']);
  }
}
