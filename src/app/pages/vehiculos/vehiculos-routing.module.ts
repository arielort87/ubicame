import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehiculosPage } from './vehiculos.page';

const routes: Routes = [
  {
    path: '',
    component: VehiculosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehiculosPageRoutingModule {}
