import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  listaTareas: Tarea[] = [];
  nombreTarea = '';


  constructor() { }

  agregarTarea(){
    // crear un objeto tarea
    // agregamos el objeto tarea al array
    // resetear el form o el input
    // console.log(this.nombreTarea)
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false,
    }
    this.listaTareas.push(tarea);

    this.nombreTarea = '';
  }

  eliminarTarea(index:number):void{
    // console.log(index);
    this.listaTareas.splice(index,1);
  }

  ngOnInit(): void {
  }

}
