import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarformulariosPageRoutingModule } from './mostrarformularios-routing.module';

import { MostrarformulariosPage } from './mostrarformularios.page';

import { CovidFormsComponent } from '../components/covid-forms/covid-forms.component'

@NgModule({
  imports: [
    
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarformulariosPageRoutingModule
  ],
  declarations: [MostrarformulariosPage, CovidFormsComponent]
})
export class MostrarformulariosPageModule {}
