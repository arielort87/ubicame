import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModhistorialPageRoutingModule } from './modhistorial-routing.module';

import { ModhistorialPage } from './modhistorial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModhistorialPageRoutingModule
  ],
  declarations: [ModhistorialPage]
})
export class ModhistorialPageModule {}
