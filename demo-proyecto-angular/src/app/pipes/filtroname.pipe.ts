import { Pipe, PipeTransform } from '@angular/core';
import { Pasajero } from '../models/pasajero';


@Pipe({
  name: 'filtroname'
})
export class FiltronamePipe implements PipeTransform {
  pasajeros = new Pasajero();
  transform(value: any, arg: any): any  {
    if (arg==""||arg=='Todos') {
      return value;
    }
    else {
      const resultFiltro = [];
      for(const pasajeros of value){
        if(pasajeros.categoria.indexOf(arg) > -1){
           resultFiltro.push(pasajeros);
        };
      };
      return resultFiltro;
    }
    }

}
