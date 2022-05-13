import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {
  

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  irLista() {
   this.router.navigate(['lista']);
  }
  irResumen() {
    this.router.navigate(['resumen']);
  }
  irFormulario() {
    this.router.navigate(['formulario']);
  }
  
}
