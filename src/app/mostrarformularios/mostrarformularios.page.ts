import { Component, OnInit } from '@angular/core';
import { TaskService} from '../services/task.service';
import { Task } from '../models/Task';  
@Component({
  selector: 'app-mostrarformularios',
  templateUrl: './mostrarformularios.page.html',
  styleUrls: ['./mostrarformularios.page.scss'],
})
export class MostrarformulariosPage implements OnInit {

  tasks: Task[];
  constructor(public taskService:TaskService) {
    
   }

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
    console.log(this.tasks);
  }



}
