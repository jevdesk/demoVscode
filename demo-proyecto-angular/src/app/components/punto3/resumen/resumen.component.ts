import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pasajero } from 'src/app/models/pasajero';
import { PasajeroService } from 'src/app/services/pasajero.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {
pasajeros: Array<Pasajero>;
  constructor(private pasajeroService:PasajeroService,
    private router: Router) { 
    this.pasajeros = new Array<Pasajero>();
    this.mostrarHistoricos();
}
public mostrarHistoricos(){
this.pasajeros = this.pasajeroService.getPasajeros();
}
  ngOnInit(): void {
  }
  contarArreglo() {
    //
  }
  irResumen() {
    this.router.navigate(['resumen']);
  }
  irLista() {
    this.router.navigate(['lista']);
  }
  irFormulario() {
    this.router.navigate(['formulario']);
  }
  
  filtrTablas(value: any, arg: any): any  {
    if (arg==""||arg=="Todos") {
      return value;
    }
    else {
      const resultFiltro = [];
      for(const pasajeros of value){
        if(pasajeros.categoria.indexOf(arg) > -1){
           resultFiltro.push(pasajeros);
        };
      };
      return resultFiltro.length;
    }
  }
  contar(arg:string) {
    return this.filtrTablas(this.pasajeros, arg)
    
  }
}
