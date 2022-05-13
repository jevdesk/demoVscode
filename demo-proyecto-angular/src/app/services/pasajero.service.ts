import { Injectable } from '@angular/core';
import { Pasajero } from '../models/pasajero';

@Injectable({
  providedIn: 'root'
})

export class PasajeroService {
  pasajeros: Array<any>;

  constructor() { 
    this.pasajeros = new Array<Pasajero>();
    this.pasajeros = [{
      id: 1,
     dni: 14234,
    precio: 500,
    categoria: 'Jubilado',
      fecha: 1652100000000
    },
      {
      id: 2,
     dni: 123434,
    precio: 1000,
    categoria: 'Adulto',
      fecha: 1652200000000
      },
      {
      id: 3,
     dni: 623434,
    precio: 750,
    categoria: 'Menor',
      fecha: 1652300000000
    },
      
    ]
  }
  getPasajeros(){
return this.pasajeros;
}
addPasajero(pasajero: Pasajero){
pasajero.id = this.getIdDisponible();
this.pasajeros.push(pasajero);
}
// retorna un id disponible en el array para hacer un insert
// la lógica es que se retorna el máximo + 1
getIdDisponible(){
var maxid: number;
maxid = 0;
for ( var i = 0; i < this.pasajeros.length;i++){
if(maxid < this.pasajeros[i].id){
maxid = this.pasajeros[i].id;
}
};
return (maxid + 1);
}
getPasajero (id:number):Pasajero{
let pasajero:Pasajero = new Pasajero();
let indexPasajero:number = this.pasajeros.findIndex(msj => (msj.id == id));
pasajero = this.pasajeros[indexPasajero];
return pasajero;
}
}
