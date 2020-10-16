import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapasPageRoutingModule } from './mapas-routing.module';

import { MapasPage } from './mapas.page';
import { ComponentsModule } from 'src/app/componentes/components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MapasPage]
})
export class MapasPageModule {}