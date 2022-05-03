import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {
  palabras = ['MANZANA', 'PERA', 'MANDARINA','ANANA','POMELO','LIMON','NARANJA','BANANA','HIGO','UBA'];
  indice = Math.floor((Math.random() * (10)));
  palabra = this.palabras[this.indice];
  palabraOculta= '';
  intentos = 9;
  gano = false;
  perdio = false;

  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
  'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  constructor() {
    this.palabraOculta = '_ '.repeat(this.palabra.length);
   }
comprobar(letra: string) {

    this.existeLetra(letra);

    const palabraOcultaArr = this.palabraOculta.split(' ');

    for ( let i = 0; i < this.palabra.length; i++ ) {

      if(this.palabra[i] === letra){
        palabraOcultaArr[i] = letra;

        }
    }

    this.palabraOculta = palabraOcultaArr.join(' ');
    this.verificaGane();
  }

  verificaGane(){
    const palabraArr = this.palabraOculta.split(' ');
    const palabraEvaluar = palabraArr.join('');

    if( palabraEvaluar === this.palabra){
      this.gano =  true;
    }
    if( this.intentos == 0){
      this.perdio = true;
    }
  }
  existeLetra(letra: string){
    if(this.palabra.indexOf(letra) >= 0){

    }else{
      this.intentos --;
    }
  }
 
  ngOnInit(): void {
  }

}
