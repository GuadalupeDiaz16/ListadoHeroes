import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-villanos',
  templateUrl: './villanos.component.html',
  styleUrls: ['./villanos.component.css']
})
export class VillanosComponent {
  nombre: string = 'Doctor Muerte';
  edad: number = 83;
  obtenerNombre(): string{
    return this.nombre + ' - '+ this.edad;

  }
  cambiarNombre(): void{
    this.nombre = 'Kang';
  }
  cambiarEdad(): void {
    this.edad = 70;
  }
  cambiarNumero(): void {
    this.numero = 51;
  }

  get nombreMayusculas(): string {
    return this.nombre.toUpperCase();
  }
    numero = 38;
    base = 6;
  
    constructor() { }
  
    ngOnInit(): void {
    }
  
    acumular(valor: number){
  
      this.numero += valor;
  
    }


}
