import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {
  noticias: Array<Noticia> = [];
  indice: number = 0;
  noticia:Noticia = new Noticia();

      constructor() {
this.noticias = new Array<Noticia>();
    this.noticias = [{codigo:1, nombre:"Gnome",detalle:"GNOME Software eliminará automáticamente las dependencias de las aplicaciones desinstaladas",img:"imagenes/barriendo.jpg"},
    {codigo:2, nombre:"Fucus-M2",detalle:"El nuevo Kubuntu Focus M2 llega con Intel Alder Lake y NVIDIA Ampere",img:"imagenes/Kubuntu-Focus-M2.jpg"},
    {codigo:3, nombre:"NodeJS",detalle:"Node.js 18 actualiza el motor de JavaScript y permite crear compilaciones personalizadas",img:"imagenes/nodejs.png"},
    {codigo:4, nombre:"SER44800UX",detalle:"Beelink SER 4 4800U X, nuevo mini-PC con Manjaro preinstalado",img:"imagenes/SER44800UX.jpg"}
    ]
    this.iniciar();
   }
  iniciar(){
    if (this.indice < this.noticias.length){
      this.noticia = this.noticias[this.indice];
    }
  }

  siguiente() {
    if (this.indice < this.noticias.length) {
      this.indice = this.indice +1;
    if (this.indice < this.noticias.length){
      this.noticia = this.noticias[this.indice];
    }
    else {
      this.indice = 0;
      this.noticia = this.noticias[this.indice];
    }
    }

  }


  anterior() {
    if (this.indice>0) {
    this.indice = this.indice - 1;
    if (this.indice < this.noticias.length) {
      this.noticia = this.noticias[this.indice];
    }
    }
    else {
      this.indice = this.noticias.length-1;
      this.noticia = this.noticias[this.indice];
    }
  }
  ngOnInit(): void {
  }

}
