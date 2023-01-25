import { Alumno } from "src/app/models/alumno.model"
import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  listaAlumnos: Alumno[] = [
    new Alumno("jose", "perez", 23, true, true),
    new Alumno("angel", "robles", 24, true, false),
    new Alumno("juan", "roldan", 25, false, false),
  ]

  
}
