import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialPageRoutingModule } from './historial-routing.module';

import { HistorialPage } from './historial.page';
import { ComponentsModule } from 'src/app/componentes/components.module';
import { ModhistorialPage } from 'src/app/modales/modhistorial/modhistorial.page';
import { ModhistorialPageModule } from 'src/app/modales/modhistorial/modhistorial.module';

@NgModule({
  entryComponents:[
    ModhistorialPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialPageRoutingModule,
    ComponentsModule,
    ModhistorialPageModule
  ],
  declarations: [HistorialPage]
})
export class HistorialPageModule {}
