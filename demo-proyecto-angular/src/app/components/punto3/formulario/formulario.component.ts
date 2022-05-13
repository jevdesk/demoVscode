import { Component, OnInit } from '@angular/core';
import { PasajeroService } from 'src/app/services/pasajero.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pasajero } from 'src/app/models/pasajero';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
 
export class FormularioComponent implements OnInit {
  pasajero: Pasajero;
  ADULTO = 0;
  JUBILADO = 0.5;
  MENOR = 0.25;
  descuento!: number;
  porcentaje!: number;
  CIFRA = 8;
  MINPRECIO =100;
  MAXPRECIO =10000;

  categorialist = ['','Menor', 'Agulto', 'Jubilado']
  pasajeroCtrl = this.fb.group({
    dni: [
      '',
      [
        Validators.required,
        Validators.min(10000000),
        Validators.max(99999999),
        
      ]
    ],
    categoria: ['', [Validators.required]],
    precio: [
      '',
      [
        Validators.required,
        Validators.min(this.MINPRECIO),
        Validators.max(this.MAXPRECIO),
      ]
    ]
  })
  

  constructor(
    private pasajeroService: PasajeroService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder) {
    this.pasajero = new Pasajero();
    
  }

  ngOnInit(): void {
    
  }

  enviarPasajero() {
    
    console.log("Enviando ...");
    this.pasajero.dni = this.pasajeroCtrl.value.dni;
    this.pasajero.precio = this.descuento;
    this.pasajero.categoria = this.pasajeroCtrl.value.categoria;
    this.pasajero.fecha = new Date();
    this.pasajeroService.addPasajero(this.pasajero);
    this.pasajero = new Pasajero();
    this.onReset();
    //this.irLista();
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
  cuantoDescuento(cat: string,precio:number) {
    if (precio >= this.MINPRECIO) {
      if ("Menor" == cat ) {
      this.descuento = precio - precio * this.MENOR;
      this.porcentaje = this.MENOR * 100;
    }
    else {
      if ("Jubilado"==cat) {
        this.descuento = precio - precio * this.JUBILADO;
        this.porcentaje = this.JUBILADO * 100;
      }
      else {
        this.descuento = precio - precio * this.ADULTO;
        this.porcentaje = this.ADULTO * 100;
      }
    }
    }
  }
  get dni() { return this.pasajeroCtrl.get('dni') as FormControl;
  }
  get categoria() { return this.pasajeroCtrl.get('categoria') as FormControl;
  }
  get precio() { return this.pasajeroCtrl.get('precio') as FormControl;
  }
  onReset(): void {
    this.pasajeroCtrl.reset();
  }
}
