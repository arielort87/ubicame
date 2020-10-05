import { Component, OnInit, Input } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  
  constructor( private menuCtrl: MenuController ) { }

  ngOnInit() {
  }
  
  toggleMenu(){
    this.menuCtrl.toggle();
  }

}
