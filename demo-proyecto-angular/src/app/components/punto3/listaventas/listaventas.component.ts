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
  inicio = 0;
  categorialist = ['Todos', 'Menor', 'Adulto', 'Jubilado']
  filtronombre = "";
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

  siguiente() {
    const max = this.pasajeros.length;
    if (this.inicio < max && max -this.inicio >=5) {
      this.inicio = this.inicio +5;
      }
    else {
        this.inicio = 0; 
      }
  }


  anterior() {
    if (this.inicio<=5&&this.inicio>=0) {
       this.inicio = 0;
    }
    else {
     this.inicio = this.inicio - 5;
    }
  }
}
