import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModhistorialPage } from './modhistorial.page';

const routes: Routes = [
  {
    path: '',
    component: ModhistorialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModhistorialPageRoutingModule {}
