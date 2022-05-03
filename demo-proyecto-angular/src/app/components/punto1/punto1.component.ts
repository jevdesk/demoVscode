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
        this.noticias = [
          {
            codigo: 1,
            nombre: "Gnome",
            detalle: "GNOME Software eliminará automáticamente las dependencias de las aplicaciones desinstaladas",
            parrafo: "GNOME Software es la tienda de aplicaciones del entorno de GNOME y una de las piezas del mismo que más han cuidado desde su lanzamiento, aunque sigue adoleciendo de cosillas que mejorar. En lo que se refiere a la tarea para la que ha sido desarrollado, sin embargo, GNOME Software es una punta de lanza del escritorio Linux y lo va a seguir siendo.",
            img: "imagenes/barriendo.jpg"
          },
          {
            codigo: 2,
            nombre: "Fucus-M2",
            detalle: "El nuevo Kubuntu Focus M2 llega con Intel Alder Lake y NVIDIA Ampere",
            parrafo: "Recientemente ha aparecido la cuarta generación del Kubuntu Focus M2, la última versión del portátil profesional que destaca, como bien indica su nombre, por emplear el miembro de la familia Ubuntu como sistema preinstalado. Se trata de un equipo tope de gama orientado a profesionales, así que su precio no es bajo. Además, se ofrece con gráficas de NVIDIA bajo KDE Plasma y Xorg, lo que aumenta las probabilidades de no tener una buena experiencia con el escritorio.",
            img: "imagenes/Kubuntu-Focus-M2.jpg"
          },
          {
            codigo: 3,
            nombre: "NodeJS",
            detalle: "Node.js 18 actualiza el motor de JavaScript y permite crear compilaciones personalizadas",
            parrafo: "Hoy vamos a darle protagonismo a una tecnología que es muy conocida en el mundo del desarrollo de software desde hace años, pero a la que no le hemos dedicado ninguna entrada hasta ahora en MuyLinux: Node.js. Ciñéndonos a sus características más básicas, se trata un entorno de ejecución para JavaScript que trabaja a nivel de backend y que es de código abierto (MIT) y multiplataforma. Como motor emplea el V8 de Chromium y permite ejecutar código JavaScript fuera de un navegador.",
            img: "imagenes/nodejs.png"
          },
          {
            codigo: 4,
            nombre: "SER44800UX",
            detalle: "Beelink SER 4 4800U X, nuevo mini-PC con Manjaro preinstalado",
            parrafo: "GNOME Software es la tienda de aplicaciones del entorno de GNOME y una de las piezas del mismo que más han cuidado desde su lanzamiento, aunque sigue adoleciendo de cosillas que mejorar. En lo que se refiere a la tarea para la que ha sido desarrollado, sin embargo, GNOME Software es una punta de lanza del escritorio Linux y lo va a seguir siendo.",
            img: "imagenes/SER44800UX.jpg"
          },
          {
            codigo: 5,
            nombre: "Unity desktop",
            detalle: "Beelink SER 4 4800U X, nuevo mini-PC con Manjaro preinstalado",
            parrafo: "Unity 7 fue durante muchos años la cara de Ubuntu, una cara que Canonical decidió abandonar para recuperar GNOME tras dar carpetazo a casi toda su estrategia en torno a la computación de consumo. Sin embargo, eso no quiere decir que la mítica shell haya muerto del todo, ya que entre nosotros tenemos a la versión 7.6 como la primera gran actualización en seis años.",
            img: "imagenes/unitydesk.jpg"
          },
          {
            codigo: 6,
            nombre: "Warsmash",
            detalle: "Warsmash, un motor de mods de código abierto para Warcraft III",
            parrafo: "Warcraft es una de las sagas de videojuegos más conocidas de Blizzard. Aprovechando esa circunstancia y la popularidad de la que todavía goza la tercera entrega de la saga de juegos de estrategia en tiempo real, recientemente nos enterado de la existencia de Warsmash, un motor de mods Open Source y construido con Java.",
            img: "imagenes/Warsmash.jpg"
          }
          
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
