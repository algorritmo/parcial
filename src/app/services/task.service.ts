import { Injectable } from '@angular/core';
import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
 tasks: Task[]
  constructor() {
    this.tasks = [
     /* {nombre: 'jorge', apellido: 'montes', edad: '12', lugar: 'cai', hide: true},
      {nombre: 'carlos', apellido: 'ortiz', edad: '32', lugar: 'vergel', hide: true}*/
    ];
  }

  getTasks(){
    if(localStorage.getItem('formularios') === null){
      return this.tasks;
    }else{
      this.tasks = JSON.parse(localStorage.getItem('formularios'));
      return this.tasks;
    }
    
    
  }

  addTask(task: Task){
    this.tasks.push(task);
    let tasks = [];
    if(localStorage.getItem('formularios') === null){
      tasks.push(task);
      localStorage.setItem('formularios', JSON.stringify(tasks));
    } else {
      tasks = JSON.parse(localStorage.getItem('formularios'));
      tasks.push(task);
      localStorage.setItem('formularios', JSON.stringify(tasks));
    }
  
  

    //this.tasks.push(task);
   // return false;
  }

  deletTask(task: Task){
    for(let i = 0; i < this.tasks.length; i++){
      if(task == this.tasks[i]){
        this.tasks.splice(i, 1);
        localStorage.setItem('formularios', JSON.stringify(this.tasks))
      }
    }
  }
}
