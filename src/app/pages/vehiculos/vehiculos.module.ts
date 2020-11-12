import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehiculosPageRoutingModule } from './vehiculos-routing.module';

import { VehiculosPage } from './vehiculos.page';
import { ComponentsModule } from 'src/app/componentes/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehiculosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [VehiculosPage]
})
export class VehiculosPageModule {}
