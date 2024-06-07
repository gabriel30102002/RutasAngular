import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  titulo:string="Contactos"
  
  datos:any [] = [
    {"nombre": "Pedro","apellido": "Jimenez", "edad": "2003"},
    {"nombre": "Jose", "apellido": "Rodriguez", "edad": "2002"},
    {"nombre": "Maria", "apellido": "Perez", "edad": "2003"},
    {"nombre": "Alberta","apellido": "Carrera", "edad": "2005"}
  ]

}