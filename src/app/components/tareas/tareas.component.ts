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
    // crear un objeto tarea  // agregamos el objeto tarea al array // resetear el form o el input

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

  actualizarTarea(tarea:Tarea, index:number):void{
    this.listaTareas[index].estado = !tarea.estado;
    console.log(tarea.estado)
  }

  ngOnInit(): void {
  }

}
