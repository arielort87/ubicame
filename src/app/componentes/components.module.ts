import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { HheraderComponent } from "./hherader/hherader.component";



@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    HheraderComponent
  ],
  exports:[
    HeaderComponent,
    MenuComponent,
    HheraderComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }
