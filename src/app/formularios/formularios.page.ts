import { Component, OnInit } from '@angular/core';
import { TaskService} from '../services/task.service';
import { HtmlAstPath } from '@angular/compiler';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.page.html',
  styleUrls: ['./formularios.page.scss'],
})
export class FormulariosPage implements OnInit {

  constructor(public taskService: TaskService) {
    
   }

  ngOnInit() {
  }
  addForm(nuevoNombre: HTMLInputElement, nuevoApellido: HTMLInputElement, nuevaEdad: HTMLInputElement,
    nuevoLugar: HTMLInputElement, nuevoHombre: HTMLIonCheckboxElement, nuevaCedula: HTMLInputElement
    , nuevoSintoma: HTMLInputElement, nuevoAntecedente: HTMLInputElement, nuevoCovid: HTMLInputElement){
    console.log('add', nuevoNombre.value , nuevoApellido.value, nuevaEdad.value, nuevoLugar.value,
    nuevoHombre.checked,
     nuevaCedula.value,
     nuevoSintoma.value,
     nuevoAntecedente.value,
     nuevoCovid.value
    );
    this.taskService.addTask({
      nombre: nuevoNombre.value,
      apellido: nuevoApellido.value,
      edad: nuevaEdad.value,
      lugar: nuevoLugar.value,
      sexo: nuevoHombre.checked,
      cedula: nuevaCedula.value,
      sintomas: nuevoSintoma.value,
      antecedente: nuevoAntecedente.value,
      covid: nuevoCovid.value,
      hide:true   
    });
    nuevoNombre.value = "";
    nuevoApellido.value = "";
    nuevaEdad.value = "";
    nuevoLugar.value = "";
    nuevoHombre.checked = false;
    nuevaCedula.value = "";
    nuevoSintoma.value = "";
    nuevoAntecedente.value = "";
    nuevoCovid.value= "";
    //console.log(this.taskService.getTasks());
    return false;
  }

}
