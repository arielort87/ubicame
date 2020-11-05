import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioPage } from './inicio.page';

const routes: Routes = [
    {
      path:'',
      redirectTo:'home' 
    },
    {
    path: '',
    component: InicioPage,
    children:[
      {
        path: 'mapas',
        loadChildren: () => import('../mapas/mapas.module').then(m => m.MapasPageModule)
      },
      {
        path: 'alertas',
        loadChildren: () => import('../alertas/alertas.module').then(m => m.AlertasPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
        
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}
