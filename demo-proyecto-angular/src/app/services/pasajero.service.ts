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
     dni: 14234597,
    precio: 500,
    categoria: 'Jubilado',
      fecha: 1552100000000
    },
      {
      id: 2,
     dni: 30123434,
    precio: 1000,
    categoria: 'Adulto',
      fecha: 1562200000000
      },
      {
      id: 3,
     dni: 76234734,
    precio: 770,
    categoria: 'Menor',
      fecha: 1572300000000
      },
      {
      id: 4,
     dni: 20234597,
    precio: 570,
    categoria: 'Jubilado',
      fecha: 1582100000000
    },
      {
      id: 5,
     dni: 30129999,
    precio: 1080,
    categoria: 'Adulto',
      fecha: 1582200000000
      },
      {
      id: 6,
     dni: 76001734,
    precio: 759,
    categoria: 'Menor',
      fecha: 1592300000000
      },
      {
      id: 7,
     dni: 14874597,
    precio: 590,
    categoria: 'Jubilado',
      fecha: 1602100000000
    },
      {
      id: 8,
     dni: 37123434,
    precio: 1050,
    categoria: 'Adulto',
      fecha: 1601200000000
      },
      {
      id: 9,
     dni: 76234734,
    precio: 360,
    categoria: 'Menor',
      fecha: 1612300000000
      },
      {
      id: 10,
     dni: 64230097,
    precio: 5890,
    categoria: 'Menor',
      fecha: 1632100000000
    },
      {
      id: 11,
     dni: 73123434,
    precio: 1500,
    categoria: 'Menor',
      fecha: 1642200000000
      },
      {
      id: 12,
     dni: 26834734,
    precio: 750,
    categoria: 'Jubilado',
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
