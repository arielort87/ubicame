import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioPage } from './inicio.page';

const routes: Routes = [
    {
      path:'',
      redirectTo:'eventos' 
    },
    {
    path: '',
    component: InicioPage,
    children:[
      {
        path: 'eventos',
        loadChildren: () => import('../eventos/eventos.module').then(m => m.EventosPageModule)
      },
      {
        path: 'mapas',
        loadChildren: () => import('../mapas/mapas.module').then(m => m.MapasPageModule)
      },
      {
        path: 'alertas',
        loadChildren: () => import('../alertas/alertas.module').then(m => m.AlertasPageModule)
      },  
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}
