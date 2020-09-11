import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarformulariosPage } from './mostrarformularios.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarformulariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarformulariosPageRoutingModule {}
