import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/models/Task';
import { TaskService } from '../../services/task.service'
import { MostrarformulariosPageModule } from '../../mostrarformularios/mostrarformularios.module';


@Component({
  selector: 'app-covid-forms',
  templateUrl: './covid-forms.component.html',
  styleUrls: ['./covid-forms.component.scss'],
})
export class CovidFormsComponent implements OnInit {

  @Input() task: Task;

  constructor(
    public taskService: TaskService
  ) { }

  ngOnInit() {}

  deleteTask(task: Task){
    if(confirm('Esta seguro de eliminar el formulario?')){
      this.taskService.deletTask(task);
    }
    

  }

}
